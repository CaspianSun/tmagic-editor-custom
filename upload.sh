#!/bin/bash
# 定义脚本文件为当前目录
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# 定义打包函数
build() {
  cd $DIR/runtime
  npm run build
  if [ $? -ne 0 ]; then
    exit 1
  fi
  npm run build:libs
  cd $DIR/editor
  npm run build
  if [ $? -ne 0 ]; then
    exit 1
  fi
  cd $DIR
}

# 如果存在字符 --build 或者 -b，则执行打包函数
if [[ $* =~ "--build" ]] || [[ $* =~ "-b" ]]; then
  build
fi

# 如果 code 目录存在，则删除
if [ -d "$DIR/code" ]; then
  rm -rf $DIR/code
fi
mkdir $DIR/code

#检验是否存在$DIR/code/editor跟$DIR/code/runtime 目录，如果不存在就打包
if [ ! -d "$DIR/editor/dist" ] || [ ! -d "$DIR/runtime/dist" ]; then
  build
fi

# 拷贝 editor/dist 到 code/editor
cp -r $DIR/editor/dist $DIR/code/editor
# 拷贝 runtime/dist 到 code/runtime
cp -r $DIR/runtime/dist $DIR/code/runtime

cd $DIR/code
# 压缩成 code.zip
zip -q -r code.zip editor runtime
cd $DIR

# 获取参数 --mode
mode=$(echo $* | grep -o "\-\-mode [a-zA-Z]*" | cut -d ' ' -f2)

# 如果没有传入 --mode 参数，则默认为 development
if [ -z "$mode" ]; then
  mode="development"
fi
env=".env.$mode"
echo "环境文件: $env"

# 读取当前目录下的所有的 .env 文件
envFiles=$(ls $DIR/$env)
if [ -z "$envFiles" ]; then
  echo "没有找到 .env.$mode 文件"
  exit 1
fi

# 从.env 文件中读取环境变量 UPLOAD_URL 不读取 # 注释行
UPLOAD_URL=$(grep UPLOAD_URL $env | grep -v '#' | cut -d '=' -f2)
if [ -z "$UPLOAD_URL" ]; then
  echo "没有找到 UPLOAD_URL 环境变量"
  exit 1
fi

PLATFORM=$(grep PLATFORM $env | grep -v '#' | cut -d '=' -f2)
if [ -z "$PLATFORM" ]; then
  echo "没有找到 PLATFORM 环境变量"
  exit 1
fi

# 去除 UPLOAD_URL 环境变量中的双引号单引号
UPLOAD_URL=$(echo $UPLOAD_URL | sed "s/\"//g" | sed "s/'//g")

# 发送 POST 请求到指定接口
RESPONSE=$(curl -s -X POST -F "zip=@$DIR/code/code.zip" -F "platform=$PLATFORM" $UPLOAD_URL)

# 打印返回结果
echo "接口返回: $RESPONSE"

# 判断是否包含true
if [[ $RESPONSE =~ "true" ]]; then
  echo "上传成功"
else
  echo "上传失败"
  exit 1
fi

# 删除 dist.zip
rm -rf $DIR/code
