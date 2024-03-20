class Activity {
  /** 活动标识 */
  actCode = ""

  /** 账号ID;前端不传 */
  agentId = undefined

  /** 创建人Id */
  creatorId = undefined

  /** 部门标识 */
  deptNum = ""

  /** 活动结束时间 */
  endTime = ""

  /** 活动图片-横版 */
  horizontalImage = ""

  /** id */
  id = undefined

  /** 是否启用 */
  isEnabled = false

  /** 活动链接 */
  link = ""

  /** 锁定码 */
  lockCode = ""

  /** 锁定状态 */
  lockStatus = false

  /** 腾讯地图Key */
  mapKey = ""

  /** 商户配置 */
  matchSettings = new MerchantSetting()

  /** 活动备注 */
  remark = ""

  /** 数据统计url；前端不传 */
  shareHref = ""

  /** 活动开始时间 */
  startTime = ""

  /** 状态；1开启, 2关闭，3活动未开始, 4活动进行中,5活动结束 */
  status = 1

  /** 置顶 */
  sticky = false

  /** 活动名称 */
  title = ""

  /** 活动类型;后台创建字典 */
  type = ""

  /** h5地址 */
  url = ""

  /** 是否使用微信登录 */
  useWechatLogin = false

  /** 活动图片-竖版 */
  verticalImage = ""

  /** 数据统计 */
  websiteId = ""

  /** 是否获取微信头像昵称信息 */
  wxprofile = false
}

class AgentAccount {
  /** 账号 */
  account = ""

  /** 账号ID;前端不传 */
  agentId = undefined

  /** 业务端配置;结构前端定义 */
  configuration = new LoginConfiguration()

  /** id */
  id = undefined

  /** 使用周期 */
  usageCycle = ""

  /** 用户ID */
  userId = undefined

  /** 用于前端链接标识 */
  verify = ""
}

class CreateDepartmentRequest {
  /** 账号ID;前端不传 */
  agentId = undefined

  /** 身份 */
  identity = ""

  /** 部门名称 */
  name = ""

  /** 部门排序 */
  orderNo = undefined

  /** 父id */
  parentId = undefined

  /** 部门权限标识 */
  permission = ""

  /** 备注 */
  remark = ""

  /** 状态 */
  status = undefined
}

class CreateLogRequest {
  /** IP地址 */
  ip = ""

  /** 消息描述 */
  message = ""

  /** 操作内容 */
  operatorContent = ""

  /** 日志类型 */
  type = undefined

  /** 操作人 */
  userId = ""
}

class CreateUserRequest {
  /** 账号ID;前端不传 */
  agentId = undefined

  /** 头像 */
  avatar = ""

  /** 业务端配置;结构前端定义 */
  configuration = new LoginConfiguration()

  /** 部门id */
  deptId = undefined

  /** 部门管理者 */
  deptLeader = false

  /** 简介 */
  desc = ""

  /** 昵称 */
  displayName = ""

  /** 邮箱 */
  email = ""

  /** 身份 */
  identity = ""

  /** 是否可用 */
  isEnabled = false

  /** 是否为超级管理员 */
  isSuper = false

  /** 手机号 */
  mobile = ""

  /** openid */
  openid = ""

  /** 角色id */
  roleId = undefined

  /** 性别 */
  sex = undefined

  /** 使用周期 */
  usageCycle = ""

  /** 用户名 */
  username = ""
}

class Department {
  /** 账号ID;前端不传 */
  agentId = undefined

  /** id */
  id = undefined

  /** 身份 */
  identity = ""

  /** 部门名称 */
  name = ""

  /** 部门排序 */
  orderNo = undefined

  /** 父id */
  parentId = undefined

  /** 部门权限标识 */
  permission = ""

  /** 备注 */
  remark = ""

  /** 状态 */
  status = undefined
}

class EditorRequest {
  /** zip */
  zip = ""
}

class FileUploadBody {
  /** file */
  file = ""
}

class FilesUploadBody {
  /** files */
  files = []
}

class ForgetPasswordRequest {
  /** 手机号 */
  mobile = ""

  /** 新密码 */
  newPassword = ""

  /** 验证码 */
  smsCode = ""
}

class GetPhoneNumber {
  /** 小程序code */
  code = ""
}

class LoginConfiguration {
  /** 背景图片 */
  bg = ""

  /** logo */
  logo = ""

  /** 网站应用标题 */
  title = ""
}

class LoginMobileRequest {
  /** 手机号 */
  mobile = ""

  /** 验证码 */
  smsCode = ""
}

class LoginPasswordRequest {
  /** 账号 */
  account = ""

  /** 身份 传1或者2,   1是运维  2是业务 */
  identity = "1"

  /** 密码 */
  password = ""
}

class LoginSuccessResponse {
  /** token */
  token = ""
}

class Logs {
  /** id */
  id = undefined

  /** IP地址 */
  ip = ""

  /** 消息描述 */
  message = ""

  /** 操作内容 */
  operatorContent = ""

  /** 日志类型 */
  type = undefined

  /** 操作人 */
  userId = ""
}

class Menu {
  /** 账号ID;前端不传 */
  agentId = undefined

  /** 页面组件 */
  component = ""

  /** id */
  id = undefined

  /** 身份 */
  identity = ""

  /** 菜单名称 */
  menuName = ""

  /** 菜单 meta */
  meta = new RouteMeta()

  /** 路由名称 */
  name = ""

  /** 父级ID */
  parentId = undefined

  /** 路由地址 */
  path = ""

  /** 权限标识 */
  permission = ""

  /** 重定向path */
  redirect = ""

  /** sort */
  sort = undefined

  /** status */
  status = undefined

  /** 菜单类型 */
  type = undefined
}

class MenuCreateBody {
  /** 组件地址 */
  component = ""

  /** 菜单名称 */
  menuName = ""

  /** meta 数据 */
  meta = new Meta()

  /** 路由名称 */
  name = ""

  /** 上级菜单 */
  parentId = ""

  /** 路由地址 */
  path = ""

  /** 权限标识 */
  permission = ""

  /** 重定向path */
  redirect = ""

  /** 排序 */
  sort = ""

  /** 状态 1启用 0禁用 */
  status = undefined

  /** 菜单类型 */
  type = undefined
}

class MenuUpdateBody {
  /** id */
  id = ""
}

class MerchantSetting {
  /** 活动名称 */
  actName = ""

  /** apikey */
  apiKey = ""

  /** 私钥key */
  key = ""

  /** 商户id */
  matchId = ""

  /** 证书pem */
  pem = ""

  /** 备注 */
  remark = ""

  /** 发放者名称 */
  sendName = ""

  /** 祝福语 */
  wishing = ""
}

class Meta {
  /** icon */
  icon = ""

  /** 是否是外链 1是 0否 */
  isExt = ""

  /** 标题 */
  title = ""
}

class RegisterMobileRequest {
  /** 手机号 */
  mobile = ""

  /** 验证码 */
  smsCode = ""
}

class Role {
  /** 账号ID;前端不传 */
  agentId = undefined

  /** id */
  id = undefined

  /** 身份 */
  identity = ""

  /** 简介 */
  introduction = ""

  /** 针对后期提供注册用 是否是默认角色, 只能存在一个 */
  isDefault = false

  /** 是否开启 */
  isEnabled = false

  /** 关联菜单 */
  menus = new Menu()

  /** 角色名称 */
  name = ""
}

class RoleCreateBody {
  /** 账号ID;前端不传 */
  agentId = undefined

  /** 身份 */
  identity = ""

  /** 简介 */
  introduction = ""

  /** 针对后期提供注册用 是否是默认角色, 只能存在一个 */
  isDefault = false

  /** 是否开启 */
  isEnabled = false

  /** 菜单id */
  menu = []

  /** 角色名称 */
  name = ""
}

class RoleUpdateBody {
  /** 账号ID;前端不传 */
  agentId = undefined

  /** id */
  id = undefined

  /** 身份 */
  identity = ""

  /** 简介 */
  introduction = ""

  /** 针对后期提供注册用 是否是默认角色, 只能存在一个 */
  isDefault = false

  /** 是否开启 */
  isEnabled = false

  /** 菜单id */
  menu = []

  /** 角色名称 */
  name = ""
}

class RouteMeta {
  /** 高亮指定菜单 */
  activeMenu = ""

  /** badge小标签(只支持子级) */
  badge = ""

  /** 是否隐藏面包屑 */
  breadcrumbHidden = false

  /** 是否显示小圆点 */
  dot = false

  /** 动态传参路由是否新开标签页 */
  dynamicNewTab = false

  /** 权限 */
  guard = undefined

  /** 是否显示在菜单中显示隐藏路由 */
  hidden = false

  /** 图标 */
  icon = ""

  /** 是否是自定义svg图标 */
  isCustomSvg = false

  /** 是否显示在菜单中显示隐藏一级路由 */
  levelHidden = false

  /** 当前路由是否可关闭多标签页 */
  noClosable = false

  /** 是否隐藏侧边栏 */
  noColumn = false

  /** 当前路由是否不缓存 */
  noKeepAlive = false

  /** 当前路由是否不显示多标签页 */
  tabHidden = false

  /** 在新窗口中打开 */
  target = undefined

  /** 菜单、面包屑、多标签页显示的名称 */
  title = ""
}

class SmsRes {}

class String {}

class UpdateDepartmentRequest {
  /** 账号ID;前端不传 */
  agentId = undefined

  /** 身份 */
  identity = ""

  /** 部门名称 */
  name = ""

  /** 部门排序 */
  orderNo = undefined

  /** 父id */
  parentId = undefined

  /** 部门权限标识 */
  permission = ""

  /** 备注 */
  remark = ""

  /** 状态 */
  status = undefined
}

class UpdateRequest {
  /** 所属平台 */
  platform = ""

  /** zip */
  zip = ""
}

class UpdateUserPasswordRequest {
  /** newPwd */
  newPwd = ""

  /** oldPwd */
  oldPwd = ""
}

class UpdateUserRequest {
  /** 账号ID;前端不传 */
  agentId = undefined

  /** 头像 */
  avatar = ""

  /** 业务端配置;结构前端定义 */
  configuration = new LoginConfiguration()

  /** 部门id */
  deptId = undefined

  /** 部门管理者 */
  deptLeader = false

  /** 简介 */
  desc = ""

  /** 昵称 */
  displayName = ""

  /** 邮箱 */
  email = ""

  /** 身份 */
  identity = ""

  /** 是否可用 */
  isEnabled = false

  /** 是否为超级管理员 */
  isSuper = false

  /** 手机号 */
  mobile = ""

  /** openid */
  openid = ""

  /** 角色id */
  roleId = undefined

  /** 性别 */
  sex = undefined

  /** 使用周期 */
  usageCycle = ""

  /** 用户名 */
  username = ""
}

class User {
  /** 运维端账号信息 */
  agent = new AgentAccount()

  /** 账号ID;前端不传 */
  agentId = undefined

  /** 头像 */
  avatar = ""

  /** 部门id */
  deptId = undefined

  /** 部门管理者 */
  deptLeader = false

  /** 简介 */
  desc = ""

  /** 昵称 */
  displayName = ""

  /** 邮箱 */
  email = ""

  /** id */
  id = undefined

  /** 身份 */
  identity = ""

  /** 是否可用 */
  isEnabled = false

  /** 是否为超级管理员 */
  isSuper = false

  /** 手机号 */
  mobile = ""

  /** openid */
  openid = ""

  /** 角色id */
  roleId = undefined

  /** 性别 */
  sex = undefined

  /** 用户名 */
  username = ""
}

class UserActUpdateBody {
  /** 活动id */
  actIds = []
}

export const common = {
  Activity,
  AgentAccount,
  CreateDepartmentRequest,
  CreateLogRequest,
  CreateUserRequest,
  Department,
  EditorRequest,
  FileUploadBody,
  FilesUploadBody,
  ForgetPasswordRequest,
  GetPhoneNumber,
  LoginConfiguration,
  LoginMobileRequest,
  LoginPasswordRequest,
  LoginSuccessResponse,
  Logs,
  Menu,
  MenuCreateBody,
  MenuUpdateBody,
  MerchantSetting,
  Meta,
  RegisterMobileRequest,
  Role,
  RoleCreateBody,
  RoleUpdateBody,
  RouteMeta,
  SmsRes,
  String,
  UpdateDepartmentRequest,
  UpdateRequest,
  UpdateUserPasswordRequest,
  UpdateUserRequest,
  User,
  UserActUpdateBody
}
