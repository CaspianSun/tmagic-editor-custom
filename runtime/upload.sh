#!/bin/bash

# 如果 dist.zip存在，则删除
if [ -f "dist.zip" ]; then
  rm dist.zip
fi

# 压缩 dist 文件夹为 zip 文件 不显示压缩过程
zip -r -q dist.zip dist

# 获取参数 --mode
while [ -n "$1" ]; do
  case "$1" in
  --mode)
    mode=$2
    shift
    ;;
  *)
    echo "$1 is not an option"
    ;;
  esac
  shift
done

env=".env.$mode"

# 读取当前目录下的所有的 .env 文件
envFiles=$(ls $env)
if [ -z "$envFiles" ]; then
  echo "没有找到 .env.$mode 文件"
  exit 1
fi

# 从.env 文件中读取环境变量 VITE_APP_BASE_URL
VITE_APP_BASE_URL=$(grep VITE_APP_BASE_URL $env | cut -d '=' -f2)
if [ -z "$VITE_APP_BASE_URL" ]; then
  echo "没有找到 VITE_APP_BASE_URL 环境变量"
  exit 1
fi

PLATFORM=$(grep PLATFORM $env | cut -d '=' -f2)
if [ -z "$PLATFORM" ]; then
  echo "没有找到 PLATFORM 环境变量"
  exit 1
fi

# 去除 VITE_APP_BASE_URL 环境变量中的双引号单引号
VITE_APP_BASE_URL=$(echo $VITE_APP_BASE_URL | sed "s/\"//g" | sed "s/'//g")

# 拼接请求地址
URL="$VITE_APP_BASE_URL/api/backend/updateResource"

# 发送 POST 请求到指定接口
RESPONSE=$(curl -s -X POST -F "zip=@dist.zip" -F "platform=$PLATFORM" $URL)

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
rm dist.zip
