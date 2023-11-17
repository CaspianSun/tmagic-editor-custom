class ActLockBody {
  /** 锁定码 */
  lockCode = '';
}

class ActSyncBody {
  /** 同步地址 */
  url = '';
}

class ActiveStatus {}

class Activity {
  /** 活动标识 */
  actCode = '';

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 创建人Id */
  creatorId = undefined;

  /** 活动结束时间 */
  endTime = '';

  /** 活动图片-横版 */
  horizontalImage = '';

  /** id */
  id = undefined;

  /** 是否启用 */
  isEnabled = false;

  /** 活动链接 */
  link = '';

  /** 锁定码 */
  lockCode = '';

  /** 锁定状态 */
  lockStatus = false;

  /** 腾讯地图Key */
  mapKey = '';

  /** 活动备注 */
  remark = '';

  /** 数据统计url；前端不传 */
  shareHref = '';

  /** 活动开始时间 */
  startTime = '';

  /** 状态；1开启, 2关闭，3活动未开始, 4活动进行中,5活动结束 */
  status = 1;

  /** 置顶 */
  sticky = false;

  /** 活动名称 */
  title = '';

  /** 活动类型;后台创建字典 */
  type = '';

  /** h5地址 */
  url = '';

  /** 是否使用微信登录 */
  useWechatLogin = false;

  /** 活动图片-竖版 */
  verticalImage = '';

  /** 数据统计 */
  websiteId = '';
}

class CodeFileBody {
  /** 活动标识 */
  actCode = '';

  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 版本描述 */
  description = '';

  /** dsl */
  dsl = undefined;

  /** dsljs脚本 */
  dslJs = '';

  /** file */
  file = '';

  /** 版本号 */
  version = '';
}

class CodeManagement {
  /** 活动标识 */
  actCode = '';

  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 版本描述 */
  description = '';

  /** dsl */
  dsl = undefined;

  /** dsljs脚本 */
  dslJs = '';

  /** id */
  id = undefined;

  /** 是否启用 */
  isEnabled = false;

  /** 版本地址 */
  path = '';

  /** 状态;1已发布；2未发布 */
  status = 1;

  /** 版本号 */
  version = '';
}

class CopyRuleByTimeBody {
  /** 结束时间 */
  endTime = undefined;

  /** 时间id */
  oldTimeId = undefined;

  /** 开始时间 */
  startTime = undefined;
}

class CreateActivityRequest {
  /** 活动标识 */
  actCode = '';

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 创建人Id */
  creatorId = undefined;

  /** 活动结束时间 */
  endTime = '';

  /** 活动图片-横版 */
  horizontalImage = '';

  /** 是否启用 */
  isEnabled = false;

  /** 活动链接 */
  link = '';

  /** 锁定码 */
  lockCode = '';

  /** 锁定状态 */
  lockStatus = false;

  /** 腾讯地图Key */
  mapKey = '';

  /** 活动备注 */
  remark = '';

  /** 数据统计url；前端不传 */
  shareHref = '';

  /** 活动开始时间 */
  startTime = '';

  /** 状态；1开启, 2关闭，3活动未开始, 4活动进行中,5活动结束 */
  status = 1;

  /** 置顶 */
  sticky = false;

  /** 活动名称 */
  title = '';

  /** 活动类型;后台创建字典 */
  type = '';

  /** h5地址 */
  url = '';

  /** 是否使用微信登录 */
  useWechatLogin = false;

  /** 活动图片-竖版 */
  verticalImage = '';

  /** 数据统计 */
  websiteId = '';
}

class CreateCustomDataRequest {
  /** 活动id；静默处理页面不显示 */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 自定义标识；不传 */
  customCode = '';

  /** 描述 */
  desc = '';

  /** json数据；单独更改 */
  jsonData = undefined;

  /** 标题 */
  title = '';
}

class CreateDictionaryRequest {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 字典码 */
  dictionaryCode = '';

  /** 字典json */
  optionData = [];

  /** 字典名称 */
  title = '';

  /** 字典类型;1系统全局, 2自定义 */
  type = '';
}

class CreateEventKeyRequest {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 是否启用 */
  enable = false;

  /** 事件Key */
  key = '';

  /** 模块字典获取 sys_event_module */
  module = 'prize';
}

class CreateFieldRequest {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 是否禁用 */
  disabled = false;

  /** 字段标识 */
  fieldCode = '';

  /** 表单ID */
  formId = undefined;

  /** icon */
  icon = '';

  /** 是否是默认列表显示 */
  isDefault = false;

  /** 是否必选 */
  isRequired = false;

  /** 字段是否参与搜索 */
  isSearch = false;

  /** 是否显示 */
  isShow = false;

  /** 是否是关联键 */
  isTarget = false;

  /** 字段名称 */
  name = '';

  /** placeholder */
  placeholder = '';

  /** 列表显示优先级, 高的在前, 低的在后 */
  priority = undefined;

  /** 正则 */
  regular = '';

  /** 备注 */
  remark = '';

  /** 顺序 */
  sort = undefined;

  /** 字段类型 1字符串 2数字 3时间 4下拉框 */
  type = 1;
}

class CreateFormRequest {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 是否为基础表单 */
  basics = false;

  /** 报名截止时间 */
  deadline = '';

  /** 表单字段 */
  fields = [];

  /** 表单标识 */
  formCode = '';

  /** 创建表单是否验证验证码 */
  formVCode = false;

  /** 是否开启 */
  isEnabled = false;

  /** 短信签名 */
  signName = '';

  /** 短信内容 */
  smsContent = '';

  /** 表单名称 */
  title = '';
}

class CreateLinkRequest {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 结束时间 */
  endTime = '';

  /** 介绍 */
  introduction = '';

  /** 开始时间 */
  startTime = '';

  /** 状态 */
  status = undefined;

  /** 标题 */
  title = '';
}

class CreateMapManagementRequest {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 地点标识 */
  code = '';

  /** 点位介绍 */
  introduce = '';

  /** 自定义json数据 */
  jsonData = undefined;

  /** 维度 */
  lat = undefined;

  /** 经度 */
  lng = undefined;

  /** 范围单位Km */
  range = undefined;

  /** 点位名称 */
  title = '';
}

class CreateMaterialLibraryGroupRequest {
  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 分组名称 */
  name = '';

  /** 上级分组ID */
  parentId = undefined;

  /** 排序 */
  sort = undefined;
}

class CreateMaterialLibraryRequest {
  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 分组id */
  groupId = undefined;

  /** 图片名称 */
  name = '';

  /** 图片地址 */
  path = '';

  /** 1.总端素材2.商户端素材 */
  store = undefined;

  /** 1.图片 2.视频 3.音频 4.其他  */
  type = undefined;

  /** 小程序id */
  uniacid = undefined;
}

class CreatePrizeChannelRecordRequest {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 用户信息 */
  channel = undefined;

  /** 渠道id */
  channelId = undefined;

  /** 渠道名称 */
  channelName = '';

  /** 渠道类型 */
  channelType = undefined;

  /** 用户信息 */
  player = undefined;

  /** 用户id */
  playerId = undefined;

  /** 增加减少积分值 */
  value = undefined;
}

class CreatePrizeChannelRequest {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 渠道码 */
  code = '';

  /** 是否限制0表示不限制 */
  limit = undefined;

  /** 名称 */
  name = '';

  /** 类型；1抽奖扣除积分；2增加积分 */
  type = undefined;

  /** 限制次数单位；0表示不限制，1表示按天 */
  unit = undefined;

  /** 积分值 */
  value = undefined;
}

class CreatePrizeRequest {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 奖品图片 */
  image = '';

  /** mini图 */
  mini = '';

  /** 奖品名称 */
  name = '';

  /** 排序;越大越在前 */
  sort = undefined;

  /** 奖品类型;1普通礼品；2实物奖品，需要登记邮寄地址；3虚拟商品，需要兑换码；4空奖 */
  type = undefined;

  /** 奖品值；当奖品为特定数值是填写 */
  value = undefined;
}

class CreatePrizeRuleRequest {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 表单规则； */
  formRule = [];

  /** 是否开启规则 */
  isEnable = false;

  /** 限制用户中奖次数 */
  limit = undefined;

  /** 剩余库存 */
  num = undefined;

  /** 奖品ID */
  prizeId = undefined;

  /** 百分数 100% 就是传100 90% 就是传90 也可以0.0001 也就是0.0001%的意思 */
  probability = undefined;

  /** 时间ID */
  timeId = undefined;

  /** 规则名称 */
  title = '';

  /** 总库存 */
  total = undefined;
}

class CreatePrizeRuleTimeRequest {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 结束时间时间戳；单位秒 */
  endTime = undefined;

  /** 关联奖品规则 */
  prizeRule = [];

  /** 备注 */
  remark = '';

  /** 开始时间时间戳；单位秒 */
  startTime = undefined;
}

class CreateTimePeriodRequest {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 时间段标识 */
  code = '';

  /** 描述 */
  description = '';

  /** 结束时间 */
  endTime = '';

  /** 是否开启 */
  isEnable = false;

  /** 开始时间 */
  startTime = '';

  /** 状态 */
  status = undefined;

  /** 标题 */
  title = '';
}

class CustomData {
  /** 活动id；静默处理页面不显示 */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 自定义标识；不传 */
  customCode = '';

  /** 描述 */
  desc = '';

  /** id */
  id = undefined;

  /** json数据；单独更改 */
  jsonData = undefined;

  /** 标题 */
  title = '';
}

class DelBody {
  /** 表单id；删除用户提交表单数据，当数组仅有基础表单id时删除整条用户数据，其他删除对应表单字段数据 */
  formId = [];
}

class Dictionary {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 字典码 */
  dictionaryCode = '';

  /** id */
  id = undefined;

  /** 字典json */
  optionData = [];

  /** 字典名称 */
  title = '';

  /** 字典类型;1系统全局, 2自定义 */
  type = '';
}

class EventKey {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 是否启用 */
  enable = false;

  /** id */
  id = undefined;

  /** 事件Key */
  key = '';

  /** 模块字典获取 sys_event_module */
  module = 'prize';
}

class Field {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 字典数据 */
  dictionary = [];

  /** 是否禁用 */
  disabled = false;

  /** 字段标识 */
  fieldCode = '';

  /** 表单ID */
  formId = undefined;

  /** icon */
  icon = '';

  /** id */
  id = undefined;

  /** 是否是默认列表显示 */
  isDefault = false;

  /** 是否必选 */
  isRequired = false;

  /** 字段是否参与搜索 */
  isSearch = false;

  /** 是否显示 */
  isShow = false;

  /** 是否是关联键 */
  isTarget = false;

  /** 字段名称 */
  name = '';

  /** placeholder */
  placeholder = '';

  /** 列表显示优先级, 高的在前, 低的在后 */
  priority = undefined;

  /** 正则 */
  regular = '';

  /** 备注 */
  remark = '';

  /** 顺序 */
  sort = undefined;

  /** 字段类型 1字符串 2数字 3时间 4下拉框 */
  type = 1;
}

class FieldSort {
  /** 字段id排序数组 */
  ids = [];
}

class FileUploadBody {
  /** file */
  file = '';
}

class Form {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 是否为基础表单 */
  basics = false;

  /** 报名截止时间 */
  deadline = '';

  /** 表单字段 */
  fields = [];

  /** 表单标识 */
  formCode = '';

  /** 创建表单是否验证验证码 */
  formVCode = false;

  /** id */
  id = undefined;

  /** 是否开启 */
  isEnabled = false;

  /** 短信签名 */
  signName = '';

  /** 短信内容 */
  smsContent = '';

  /** 表单名称 */
  title = '';
}

class FormFieldChildren {
  /** 字段key */
  code = '';

  /** 字段名字 */
  name = '';
}

class FormTreeRes {
  /** 字段 */
  children = [];

  /** 表单名字 */
  name = '';
}

class HxBody {
  /** 关联键 */
  foreignKey = '';

  /** 环节id */
  linkId = undefined;
}

class Link {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 结束时间 */
  endTime = '';

  /** id */
  id = undefined;

  /** 介绍 */
  introduction = '';

  /** 开始时间 */
  startTime = '';

  /** 状态 */
  status = undefined;

  /** 标题 */
  title = '';
}

class LinkOverviewRes {
  /** 已核销人数 */
  count = undefined;

  /** 未核销人数 */
  noHx = undefined;

  /** 总人数 */
  total = undefined;
}

class LinkSwitchBody {
  /** 开启关闭 3 开启;4 关闭 */
  status = 1;
}

class MapBody {
  /** 维度 */
  lat = undefined;

  /** 经度 */
  lng = undefined;
}

class MapManagement {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 地点标识 */
  code = '';

  /** id */
  id = undefined;

  /** 点位介绍 */
  introduce = '';

  /** 自定义json数据 */
  jsonData = undefined;

  /** 维度 */
  lat = undefined;

  /** 经度 */
  lng = undefined;

  /** 范围单位Km */
  range = undefined;

  /** 点位名称 */
  title = '';
}

class MaterialLibrary {
  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 分组id */
  groupId = undefined;

  /** id */
  id = undefined;

  /** 图片名称 */
  name = '';

  /** 图片地址 */
  path = '';

  /** 1.总端素材2.商户端素材 */
  store = undefined;

  /** 1.图片 2.视频 3.音频 4.其他  */
  type = undefined;

  /** 小程序id */
  uniacid = undefined;
}

class MaterialLibraryGroup {
  /** 账号ID;前端不传 */
  agentId = undefined;

  /** id */
  id = undefined;

  /** 分组名称 */
  name = '';

  /** 上级分组ID */
  parentId = undefined;

  /** 排序 */
  sort = undefined;
}

class MoveMaterialLibraryRequest {
  /** groupId */
  groupId = undefined;

  /** id */
  id = '';
}

class OptionData {
  /** 选项值 */
  key = '';

  /** 选项名称 */
  name = '';
}

class PriorityField {
  /** 字段标识 */
  fieldCode = '';

  /** id */
  id = undefined;

  /** 字段名称 */
  name = '';
}

class Prize {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** id */
  id = undefined;

  /** 奖品图片 */
  image = '';

  /** mini图 */
  mini = '';

  /** 奖品名称 */
  name = '';

  /** 排序;越大越在前 */
  sort = undefined;

  /** 奖品类型;1普通礼品；2实物奖品，需要登记邮寄地址；3虚拟商品，需要兑换码；4空奖 */
  type = undefined;

  /** 奖品值；当奖品为特定数值是填写 */
  value = undefined;
}

class PrizeChannel {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 渠道码 */
  code = '';

  /** id */
  id = undefined;

  /** 是否限制0表示不限制 */
  limit = undefined;

  /** 名称 */
  name = '';

  /** 类型；1抽奖扣除积分；2增加积分 */
  type = undefined;

  /** 限制次数单位；0表示不限制，1表示按天 */
  unit = undefined;

  /** 积分值 */
  value = undefined;
}

class PrizeChannelRecord {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 用户信息 */
  channel = undefined;

  /** 渠道id */
  channelId = undefined;

  /** 渠道名称 */
  channelName = '';

  /** 渠道类型 */
  channelType = undefined;

  /** id */
  id = undefined;

  /** 用户信息 */
  player = undefined;

  /** 用户id */
  playerId = undefined;

  /** 增加减少积分值 */
  value = undefined;
}

class PrizeFormRule {
  /** 概率 */
  probability = undefined;

  /** 规则；示例 identity=1&sex=1 表示身份为1性别为1时命中 */
  rule = '';

  /** 规则汉字；示例 身份为车主性别为男 */
  ruleName = '';
}

class PrizeOverview {
  /** 奖品名称 */
  name = '';

  /** 中奖数量 */
  number = undefined;
}

class PrizeRecord {
  /** 活动ID */
  actId = undefined;

  /** 邮寄-联系地址 */
  address = '';

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 邮寄-联系人 */
  cName = '';

  /** 兑换码 */
  cdkey = '';

  /** id */
  id = undefined;

  /** 奖品图片 */
  image = '';

  /** 奖品名称 */
  name = '';

  /** 邮寄-联系电话 */
  phone = '';

  /** 用户信息 */
  player = undefined;

  /** 用户id */
  playerId = undefined;

  /** 用户信息 */
  prize = undefined;

  /** 奖品id */
  prizeId = undefined;

  /** 奖品类型 */
  prizeType = undefined;

  /** targetKey */
  targetKey = '';

  /** 奖品值；当奖品为特定数值是填写 */
  value = undefined;
}

class PrizeRule {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 表单规则； */
  formRule = [];

  /** id */
  id = undefined;

  /** 是否开启规则 */
  isEnable = false;

  /** 限制用户中奖次数 */
  limit = undefined;

  /** 剩余库存 */
  num = undefined;

  /** 奖品ID */
  prizeId = undefined;

  /** 百分数 100% 就是传100 90% 就是传90 也可以0.0001 也就是0.0001%的意思 */
  probability = undefined;

  /** 时间ID */
  timeId = undefined;

  /** 规则名称 */
  title = '';

  /** 总库存 */
  total = undefined;
}

class PrizeRuleTime {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 结束时间时间戳；单位秒 */
  endTime = undefined;

  /** id */
  id = undefined;

  /** 关联奖品规则 */
  prizeRule = [];

  /** 备注 */
  remark = '';

  /** 开始时间时间戳；单位秒 */
  startTime = undefined;
}

class PrizeSetting {
  /** 普通奖品用户可中奖数量 */
  '1' = undefined;

  /** 实物奖品用户可中奖数量 */
  '2' = undefined;

  /** 虚拟奖品用户可中奖数量 */
  '3' = undefined;
}

class PrizeVirtual {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 兑换码 */
  cdkey = '';

  /** 是否兑换;0未兑换，1已兑换 */
  exchange = undefined;

  /** id */
  id = undefined;

  /** 用户信息 */
  player = undefined;

  /** 用户id */
  playerId = undefined;

  /** 奖品 */
  prize = undefined;

  /** 奖品id */
  prizeId = undefined;
}

class SaveDslBody {
  /** 活动id */
  actId = undefined;

  /** dsl */
  dsl = undefined;

  /** 版本id，不传为先建 */
  id = undefined;

  /** 版本号 */
  version = '';
}

class SetTargetBody {
  /** 是否是关联字段 */
  isTarget = false;
}

class Submit {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 用户提交的数据json */
  content = undefined;

  /** 抽奖扣除积分 */
  deduct = undefined;

  /** id */
  id = undefined;

  /** 积分数, 不需要提交 */
  integral = undefined;

  /** 操作人 */
  operator = '';

  /** 可操作人集合 */
  principals = [];

  /** 目标key, 用于保存字段表中的唯一枢纽 */
  targetKey = '';

  /** uid */
  uid = '';
}

class SubmitContent {
  /** 用户提交的数据json，根据表单数据来 */
  content = undefined;

  /** 表单code */
  formCode = '';

  /** 目标key, 用于保存字段表中的唯一枢纽 */
  operator = '';

  /** 手机验证码表单key */
  phoneKey = '';

  /** 验证码； */
  smsCode = '';

  /** 目标key, 用于保存字段表中的唯一枢纽 */
  targetKey = '';
}

class SubmitContentMust {}

class SubmitList {
  /** 导出字段数组 */
  fieldArr = [];

  /** 表单id递增排序；关联表单时也需要传 */
  formIds = [];

  /** limit */
  limit = undefined;

  /** page */
  page = undefined;

  /** 搜索条件集合 */
  searchArr = [];
}

class SubmitSearch {
  /** 搜索字段名称 */
  name = '';

  /** 用户搜索数据 */
  search = '';
}

class TimePeriod {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 时间段标识 */
  code = '';

  /** 描述 */
  description = '';

  /** 结束时间 */
  endTime = '';

  /** id */
  id = undefined;

  /** 是否开启 */
  isEnable = false;

  /** 开始时间 */
  startTime = '';

  /** 状态 */
  status = undefined;

  /** 标题 */
  title = '';
}

class TimeSwitchBody {
  /** 开启关闭 3 开启;4 关闭 */
  status = 1;
}

class TraceQuery {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 事件名 */
  event = '';

  /** 事件数据 */
  eventData = undefined;

  /** 页面 */
  page = '';

  /** session;用户区分用户唯一标识；不传用sessionId 客户端需持久化保存 */
  session = '';

  /** 类型;1普通，2事件 */
  type = undefined;
}

class UpdateActivityRequest {
  /** 活动标识 */
  actCode = '';

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 创建人Id */
  creatorId = undefined;

  /** 活动结束时间 */
  endTime = '';

  /** 活动图片-横版 */
  horizontalImage = '';

  /** 是否启用 */
  isEnabled = false;

  /** 活动链接 */
  link = '';

  /** 锁定码 */
  lockCode = '';

  /** 锁定状态 */
  lockStatus = false;

  /** 腾讯地图Key */
  mapKey = '';

  /** 活动备注 */
  remark = '';

  /** 数据统计url；前端不传 */
  shareHref = '';

  /** 活动开始时间 */
  startTime = '';

  /** 状态；1开启, 2关闭，3活动未开始, 4活动进行中,5活动结束 */
  status = 1;

  /** 置顶 */
  sticky = false;

  /** 活动名称 */
  title = '';

  /** 活动类型;后台创建字典 */
  type = '';

  /** h5地址 */
  url = '';

  /** 是否使用微信登录 */
  useWechatLogin = false;

  /** 活动图片-竖版 */
  verticalImage = '';

  /** 数据统计 */
  websiteId = '';
}

class UpdateCustomDataRequest {
  /** 活动id；静默处理页面不显示 */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 自定义标识；不传 */
  customCode = '';

  /** 描述 */
  desc = '';

  /** json数据；单独更改 */
  jsonData = undefined;

  /** 标题 */
  title = '';
}

class UpdateDictionaryRequest {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 字典码 */
  dictionaryCode = '';

  /** 字典json */
  optionData = [];

  /** 字典名称 */
  title = '';

  /** 字典类型;1系统全局, 2自定义 */
  type = '';
}

class UpdateEventKeyRequest {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 是否启用 */
  enable = false;

  /** 事件Key */
  key = '';

  /** 模块字典获取 sys_event_module */
  module = 'prize';
}

class UpdateFieldRequest {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 是否禁用 */
  disabled = false;

  /** 字段标识 */
  fieldCode = '';

  /** 表单ID */
  formId = undefined;

  /** icon */
  icon = '';

  /** 是否是默认列表显示 */
  isDefault = false;

  /** 是否必选 */
  isRequired = false;

  /** 字段是否参与搜索 */
  isSearch = false;

  /** 是否显示 */
  isShow = false;

  /** 是否是关联键 */
  isTarget = false;

  /** 字段名称 */
  name = '';

  /** placeholder */
  placeholder = '';

  /** 列表显示优先级, 高的在前, 低的在后 */
  priority = undefined;

  /** 正则 */
  regular = '';

  /** 备注 */
  remark = '';

  /** 顺序 */
  sort = undefined;

  /** 字段类型 1字符串 2数字 3时间 4下拉框 */
  type = 1;
}

class UpdateFormRequest {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 是否为基础表单 */
  basics = false;

  /** 报名截止时间 */
  deadline = '';

  /** 表单字段 */
  fields = [];

  /** 表单标识 */
  formCode = '';

  /** 创建表单是否验证验证码 */
  formVCode = false;

  /** 是否开启 */
  isEnabled = false;

  /** 短信签名 */
  signName = '';

  /** 短信内容 */
  smsContent = '';

  /** 表单名称 */
  title = '';
}

class UpdateInventory {
  /** 补充或消减数 */
  num = undefined;
}

class UpdateLinkRequest {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 结束时间 */
  endTime = '';

  /** 介绍 */
  introduction = '';

  /** 开始时间 */
  startTime = '';

  /** 状态 */
  status = undefined;

  /** 标题 */
  title = '';
}

class UpdateMapManagementRequest {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 地点标识 */
  code = '';

  /** 点位介绍 */
  introduce = '';

  /** 自定义json数据 */
  jsonData = undefined;

  /** 维度 */
  lat = undefined;

  /** 经度 */
  lng = undefined;

  /** 范围单位Km */
  range = undefined;

  /** 点位名称 */
  title = '';
}

class UpdateMaterialLibraryGroupRequest {
  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 分组名称 */
  name = '';

  /** 上级分组ID */
  parentId = undefined;

  /** 排序 */
  sort = undefined;
}

class UpdateMaterialLibraryRequest {
  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 分组id */
  groupId = undefined;

  /** 图片名称 */
  name = '';

  /** 图片地址 */
  path = '';

  /** 1.总端素材2.商户端素材 */
  store = undefined;

  /** 1.图片 2.视频 3.音频 4.其他  */
  type = undefined;

  /** 小程序id */
  uniacid = undefined;
}

class UpdatePrizeRequest {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 奖品图片 */
  image = '';

  /** mini图 */
  mini = '';

  /** 奖品名称 */
  name = '';

  /** 排序;越大越在前 */
  sort = undefined;

  /** 奖品类型;1普通礼品；2实物奖品，需要登记邮寄地址；3虚拟商品，需要兑换码；4空奖 */
  type = undefined;

  /** 奖品值；当奖品为特定数值是填写 */
  value = undefined;
}

class UpdatePrizeRuleRequest {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 表单规则； */
  formRule = [];

  /** 是否开启规则 */
  isEnable = false;

  /** 限制用户中奖次数 */
  limit = undefined;

  /** 奖品ID */
  prizeId = undefined;

  /** 百分数 100% 就是传100 90% 就是传90 也可以0.0001 也就是0.0001%的意思 */
  probability = undefined;

  /** 时间ID */
  timeId = undefined;

  /** 规则名称 */
  title = '';
}

class UpdateSubmitRequest {
  /** 活动ID */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 用户提交的数据json */
  content = undefined;

  /** 抽奖扣除积分 */
  deduct = undefined;

  /** 积分数, 不需要提交 */
  integral = undefined;

  /** 操作人 */
  operator = '';

  /** 可操作人集合 */
  principals = [];

  /** 目标key, 用于保存字段表中的唯一枢纽 */
  targetKey = '';

  /** uid */
  uid = '';
}

class UpdateTimePeriodRequest {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 时间段标识 */
  code = '';

  /** 描述 */
  description = '';

  /** 结束时间 */
  endTime = '';

  /** 是否开启 */
  isEnable = false;

  /** 开始时间 */
  startTime = '';

  /** 状态 */
  status = undefined;

  /** 标题 */
  title = '';
}

class Verification {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** 关联键 */
  foreignKey = '';

  /** id */
  id = undefined;

  /** 环节id */
  linkId = undefined;

  /** 用户关联数据 */
  player = undefined;
}

class WeChat {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** appId */
  appId = '';

  /** appSecret */
  appSecret = '';

  /** encodingAesKey */
  encodingAesKey = '';

  /** encryptMessage */
  encryptMessage = '';

  /** id */
  id = undefined;

  /** 是否为默认 */
  isDefault = false;

  /** token */
  token = '';

  /** 授权文件 */
  verifyTxt = '';
}

class WeChatShare {
  /** 活动id */
  actId = undefined;

  /** 账号ID;前端不传 */
  agentId = undefined;

  /** id */
  id = undefined;

  /** 是否为默认 */
  isDefault = false;

  /** 分享图片 */
  shareImg = '';

  /** 分享副标题 */
  subTitle = '';

  /** 分享标题 */
  title = '';
}

class WebStatisticsItem {
  /** 变化值 */
  change = undefined;

  /** 当前值 */
  value = undefined;
}

class WebStatisticsRes {
  /** 跳出 */
  bounces = undefined;

  /** 浏览量 */
  pageviews = undefined;

  /** 总时间 */
  totalTime = undefined;

  /** 访客 */
  uniques = undefined;
}

class WebsiteMetric {
  /** 时间 */
  t = '';

  /** x坐标或事件名 */
  x = '';

  /** y或数值 */
  y = undefined;
}

export const agent = {
  ActLockBody,
  ActSyncBody,
  ActiveStatus,
  Activity,
  CodeFileBody,
  CodeManagement,
  CopyRuleByTimeBody,
  CreateActivityRequest,
  CreateCustomDataRequest,
  CreateDictionaryRequest,
  CreateEventKeyRequest,
  CreateFieldRequest,
  CreateFormRequest,
  CreateLinkRequest,
  CreateMapManagementRequest,
  CreateMaterialLibraryGroupRequest,
  CreateMaterialLibraryRequest,
  CreatePrizeChannelRecordRequest,
  CreatePrizeChannelRequest,
  CreatePrizeRequest,
  CreatePrizeRuleRequest,
  CreatePrizeRuleTimeRequest,
  CreateTimePeriodRequest,
  CustomData,
  DelBody,
  Dictionary,
  EventKey,
  Field,
  FieldSort,
  FileUploadBody,
  Form,
  FormFieldChildren,
  FormTreeRes,
  HxBody,
  Link,
  LinkOverviewRes,
  LinkSwitchBody,
  MapBody,
  MapManagement,
  MaterialLibrary,
  MaterialLibraryGroup,
  MoveMaterialLibraryRequest,
  OptionData,
  PriorityField,
  Prize,
  PrizeChannel,
  PrizeChannelRecord,
  PrizeFormRule,
  PrizeOverview,
  PrizeRecord,
  PrizeRule,
  PrizeRuleTime,
  PrizeSetting,
  PrizeVirtual,
  SaveDslBody,
  SetTargetBody,
  Submit,
  SubmitContent,
  SubmitContentMust,
  SubmitList,
  SubmitSearch,
  TimePeriod,
  TimeSwitchBody,
  TraceQuery,
  UpdateActivityRequest,
  UpdateCustomDataRequest,
  UpdateDictionaryRequest,
  UpdateEventKeyRequest,
  UpdateFieldRequest,
  UpdateFormRequest,
  UpdateInventory,
  UpdateLinkRequest,
  UpdateMapManagementRequest,
  UpdateMaterialLibraryGroupRequest,
  UpdateMaterialLibraryRequest,
  UpdatePrizeRequest,
  UpdatePrizeRuleRequest,
  UpdateSubmitRequest,
  UpdateTimePeriodRequest,
  Verification,
  WeChat,
  WeChatShare,
  WebStatisticsItem,
  WebStatisticsRes,
  WebsiteMetric,
};
