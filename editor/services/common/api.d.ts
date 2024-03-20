type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value
}

declare namespace defs {
  export namespace common {
    export class Activity {
      /** 活动标识 */
      actCode: string

      /** 账号ID;前端不传 */
      agentId?: number

      /** 创建人Id */
      creatorId: number

      /** 部门标识 */
      deptNum: string

      /** 活动结束时间 */
      endTime: string

      /** 活动图片-横版 */
      horizontalImage: string

      /** id */
      id: number

      /** 是否启用 */
      isEnabled: boolean

      /** 活动链接 */
      link: string

      /** 锁定码 */
      lockCode: string

      /** 锁定状态 */
      lockStatus: boolean

      /** 腾讯地图Key */
      mapKey: string

      /** 商户配置 */
      matchSettings: defs.common.MerchantSetting

      /** 活动备注 */
      remark: string

      /** 数据统计url；前端不传 */
      shareHref: string

      /** 活动开始时间 */
      startTime: string

      /** 状态；1开启, 2关闭，3活动未开始, 4活动进行中,5活动结束 */
      status: 1 | 2 | 3 | 4 | 5

      /** 置顶 */
      sticky: boolean

      /** 活动名称 */
      title: string

      /** 活动类型;后台创建字典 */
      type: string

      /** h5地址 */
      url: string

      /** 是否使用微信登录 */
      useWechatLogin: boolean

      /** 活动图片-竖版 */
      verticalImage: string

      /** 数据统计 */
      websiteId: string

      /** 是否获取微信头像昵称信息 */
      wxprofile: boolean
    }

    export class AgentAccount {
      /** 账号 */
      account: string

      /** 账号ID;前端不传 */
      agentId?: number

      /** 业务端配置;结构前端定义 */
      configuration: defs.common.LoginConfiguration

      /** id */
      id: number

      /** 使用周期 */
      usageCycle: string

      /** 用户ID */
      userId: number

      /** 用于前端链接标识 */
      verify: string
    }

    export class CreateDepartmentRequest {
      /** 账号ID;前端不传 */
      agentId?: number

      /** 身份 */
      identity: string

      /** 部门名称 */
      name: string

      /** 部门排序 */
      orderNo: number

      /** 父id */
      parentId: number

      /** 部门权限标识 */
      permission: string

      /** 备注 */
      remark: string

      /** 状态 */
      status: number
    }

    export class CreateLogRequest {
      /** IP地址 */
      ip: string

      /** 消息描述 */
      message: string

      /** 操作内容 */
      operatorContent: string

      /** 日志类型 */
      type: number

      /** 操作人 */
      userId: string
    }

    export class CreateUserRequest {
      /** 账号ID;前端不传 */
      agentId?: number

      /** 头像 */
      avatar: string

      /** 业务端配置;结构前端定义 */
      configuration: defs.common.LoginConfiguration

      /** 部门id */
      deptId: number

      /** 部门管理者 */
      deptLeader: boolean

      /** 简介 */
      desc?: string

      /** 昵称 */
      displayName?: string

      /** 邮箱 */
      email?: string

      /** 身份 */
      identity: string

      /** 是否可用 */
      isEnabled: boolean

      /** 是否为超级管理员 */
      isSuper: boolean

      /** 手机号 */
      mobile: string

      /** openid */
      openid?: string

      /** 角色id */
      roleId: number

      /** 性别 */
      sex?: number

      /** 使用周期 */
      usageCycle: string

      /** 用户名 */
      username: string
    }

    export class Department {
      /** 账号ID;前端不传 */
      agentId?: number

      /** id */
      id: number

      /** 身份 */
      identity: string

      /** 部门名称 */
      name: string

      /** 部门排序 */
      orderNo: number

      /** 父id */
      parentId: number

      /** 部门权限标识 */
      permission: string

      /** 备注 */
      remark: string

      /** 状态 */
      status: number
    }

    export class EditorRequest {
      /** zip */
      zip: string
    }

    export class FileUploadBody {
      /** file */
      file: string
    }

    export class FilesUploadBody {
      /** files */
      files: Array<string>
    }

    export class ForgetPasswordRequest {
      /** 手机号 */
      mobile: string

      /** 新密码 */
      newPassword: string

      /** 验证码 */
      smsCode: string
    }

    export class GetPhoneNumber {
      /** 小程序code */
      code: string
    }

    export class LoginConfiguration {
      /** 背景图片 */
      bg: string

      /** logo */
      logo: string

      /** 网站应用标题 */
      title: string
    }

    export class LoginMobileRequest {
      /** 手机号 */
      mobile: string

      /** 验证码 */
      smsCode: string
    }

    export class LoginPasswordRequest {
      /** 账号 */
      account: string

      /** 身份 传1或者2,   1是运维  2是业务 */
      identity: "1" | "2" | 1 | 2

      /** 密码 */
      password: string
    }

    export class LoginSuccessResponse {
      /** token */
      token: string
    }

    export class Logs {
      /** id */
      id: number

      /** IP地址 */
      ip: string

      /** 消息描述 */
      message: string

      /** 操作内容 */
      operatorContent: string

      /** 日志类型 */
      type: number

      /** 操作人 */
      userId: string
    }

    export class Menu {
      /** 账号ID;前端不传 */
      agentId?: number

      /** 页面组件 */
      component: string

      /** id */
      id: number

      /** 身份 */
      identity: string

      /** 菜单名称 */
      menuName: string

      /** 菜单 meta */
      meta: defs.common.RouteMeta

      /** 路由名称 */
      name: string

      /** 父级ID */
      parentId: number

      /** 路由地址 */
      path: string

      /** 权限标识 */
      permission: string

      /** 重定向path */
      redirect: string

      /** sort */
      sort: number

      /** status */
      status: number

      /** 菜单类型 */
      type: number
    }

    export class MenuCreateBody {
      /** 组件地址 */
      component: string

      /** 菜单名称 */
      menuName: string

      /** meta 数据 */
      meta: defs.common.Meta

      /** 路由名称 */
      name: string

      /** 上级菜单 */
      parentId: string

      /** 路由地址 */
      path: string

      /** 权限标识 */
      permission: string

      /** 重定向path */
      redirect: string

      /** 排序 */
      sort: string

      /** 状态 1启用 0禁用 */
      status: number

      /** 菜单类型 */
      type: number
    }

    export class MenuUpdateBody {
      /** id */
      id: string
    }

    export class MerchantSetting {
      /** 活动名称 */
      actName: string

      /** apikey */
      apiKey: string

      /** 私钥key */
      key: string

      /** 商户id */
      matchId: string

      /** 证书pem */
      pem: string

      /** 备注 */
      remark: string

      /** 发放者名称 */
      sendName: string

      /** 祝福语 */
      wishing: string
    }

    export class Meta {
      /** icon */
      icon: string

      /** 是否是外链 1是 0否 */
      isExt: string

      /** 标题 */
      title: string
    }

    export class RegisterMobileRequest {
      /** 手机号 */
      mobile: string

      /** 验证码 */
      smsCode: string
    }

    export class Role {
      /** 账号ID;前端不传 */
      agentId?: number

      /** id */
      id: number

      /** 身份 */
      identity: string

      /** 简介 */
      introduction?: string

      /** 针对后期提供注册用 是否是默认角色, 只能存在一个 */
      isDefault?: boolean

      /** 是否开启 */
      isEnabled: boolean

      /** 关联菜单 */
      menus: defs.common.Menu

      /** 角色名称 */
      name: string
    }

    export class RoleCreateBody {
      /** 账号ID;前端不传 */
      agentId?: number

      /** 身份 */
      identity: string

      /** 简介 */
      introduction?: string

      /** 针对后期提供注册用 是否是默认角色, 只能存在一个 */
      isDefault?: boolean

      /** 是否开启 */
      isEnabled: boolean

      /** 菜单id */
      menu: Array<string>

      /** 角色名称 */
      name: string
    }

    export class RoleUpdateBody {
      /** 账号ID;前端不传 */
      agentId?: number

      /** id */
      id: number

      /** 身份 */
      identity: string

      /** 简介 */
      introduction?: string

      /** 针对后期提供注册用 是否是默认角色, 只能存在一个 */
      isDefault?: boolean

      /** 是否开启 */
      isEnabled: boolean

      /** 菜单id */
      menu: Array<string>

      /** 角色名称 */
      name: string
    }

    export class RouteMeta {
      /** 高亮指定菜单 */
      activeMenu: string

      /** badge小标签(只支持子级) */
      badge: string

      /** 是否隐藏面包屑 */
      breadcrumbHidden: boolean

      /** 是否显示小圆点 */
      dot: boolean

      /** 动态传参路由是否新开标签页 */
      dynamicNewTab: boolean

      /** 权限 */
      guard: Record<string, any>

      /** 是否显示在菜单中显示隐藏路由 */
      hidden: boolean

      /** 图标 */
      icon: string

      /** 是否是自定义svg图标 */
      isCustomSvg: boolean

      /** 是否显示在菜单中显示隐藏一级路由 */
      levelHidden: boolean

      /** 当前路由是否可关闭多标签页 */
      noClosable: boolean

      /** 是否隐藏侧边栏 */
      noColumn: boolean

      /** 当前路由是否不缓存 */
      noKeepAlive: boolean

      /** 当前路由是否不显示多标签页 */
      tabHidden: boolean

      /** 在新窗口中打开 */
      target: Record<string, any>

      /** 菜单、面包屑、多标签页显示的名称 */
      title: string
    }

    export class SmsRes {}

    export class String {}

    export class UpdateDepartmentRequest {
      /** 账号ID;前端不传 */
      agentId?: number

      /** 身份 */
      identity?: string

      /** 部门名称 */
      name?: string

      /** 部门排序 */
      orderNo?: number

      /** 父id */
      parentId?: number

      /** 部门权限标识 */
      permission?: string

      /** 备注 */
      remark?: string

      /** 状态 */
      status?: number
    }

    export class UpdateRequest {
      /** 所属平台 */
      platform: string

      /** zip */
      zip: string
    }

    export class UpdateUserPasswordRequest {
      /** newPwd */
      newPwd: string

      /** oldPwd */
      oldPwd: string
    }

    export class UpdateUserRequest {
      /** 账号ID;前端不传 */
      agentId?: number

      /** 头像 */
      avatar?: string

      /** 业务端配置;结构前端定义 */
      configuration?: defs.common.LoginConfiguration

      /** 部门id */
      deptId?: number

      /** 部门管理者 */
      deptLeader?: boolean

      /** 简介 */
      desc?: string

      /** 昵称 */
      displayName?: string

      /** 邮箱 */
      email?: string

      /** 身份 */
      identity?: string

      /** 是否可用 */
      isEnabled?: boolean

      /** 是否为超级管理员 */
      isSuper?: boolean

      /** 手机号 */
      mobile?: string

      /** openid */
      openid?: string

      /** 角色id */
      roleId?: number

      /** 性别 */
      sex?: number

      /** 使用周期 */
      usageCycle?: string

      /** 用户名 */
      username?: string
    }

    export class User {
      /** 运维端账号信息 */
      agent: defs.common.AgentAccount

      /** 账号ID;前端不传 */
      agentId?: number

      /** 头像 */
      avatar: string

      /** 部门id */
      deptId: number

      /** 部门管理者 */
      deptLeader: boolean

      /** 简介 */
      desc?: string

      /** 昵称 */
      displayName?: string

      /** 邮箱 */
      email?: string

      /** id */
      id: number

      /** 身份 */
      identity: string

      /** 是否可用 */
      isEnabled: boolean

      /** 是否为超级管理员 */
      isSuper: boolean

      /** 手机号 */
      mobile: string

      /** openid */
      openid?: string

      /** 角色id */
      roleId: number

      /** 性别 */
      sex?: number

      /** 用户名 */
      username: string
    }

    export class UserActUpdateBody {
      /** 活动id */
      actIds: Array<number>
    }
  }
}

declare namespace API {
  export namespace common {}
}
