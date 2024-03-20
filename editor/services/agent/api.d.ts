type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value
}

declare namespace defs {
  export namespace agent {
    export class ActLockBody {
      /** 锁定码 */
      lockCode: string
    }

    export class ActSyncBody {
      /** 同步地址 */
      url: string
    }

    export class ActiveStatus {}

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
      matchSettings: defs.agent.MerchantSetting

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

    export class AnswerConfig {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** id */
      id: number

      /** 随机题目总数 */
      limit: number

      /** 每题时间；单位秒 */
      time: number
    }

    export class AnswerConfigDto {
      /** 活动ID */
      actId?: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** id */
      id?: number

      /** 随机题目总数 */
      limit?: number

      /** 每题时间；单位秒 */
      time?: number
    }

    export class AnswerRecord {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 答案 */
      answer: string

      /** id */
      id: number

      /** 是否正确 */
      isRight: boolean

      /** 用户id */
      playerId: number

      /** 试题id */
      questionId: number

      /** 目标键 */
      targetKey: string

      /** 答题时间；单位秒 */
      time: number
    }

    export class CodeFileBody {
      /** 活动标识 */
      actCode: string

      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 版本描述 */
      description: string

      /** dsl */
      dsl: Record<string, any>

      /** dsljs脚本 */
      dslJs: string

      /** file */
      file: string

      /** 版本号 */
      version: string
    }

    export class CodeManagement {
      /** 活动标识 */
      actCode: string

      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 版本描述 */
      description: string

      /** dsl */
      dsl: Record<string, any>

      /** dsljs脚本 */
      dslJs: string

      /** id */
      id: number

      /** 是否启用 */
      isEnabled: boolean

      /** 版本地址 */
      path: string

      /** 状态;1已发布；2未发布 */
      status: 1 | 2

      /** 版本号 */
      version: string
    }

    export class CopyRuleByTimeBody {
      /** 结束时间 */
      endTime: number

      /** 时间id */
      oldTimeId: number

      /** 开始时间 */
      startTime: number
    }

    export class CreateActivityRequest {
      /** 活动标识 */
      actCode?: string

      /** 账号ID;前端不传 */
      agentId?: number

      /** 创建人Id */
      creatorId?: number

      /** 部门标识 */
      deptNum?: string

      /** 活动结束时间 */
      endTime?: string

      /** 活动图片-横版 */
      horizontalImage?: string

      /** 是否启用 */
      isEnabled?: boolean

      /** 活动链接 */
      link?: string

      /** 锁定码 */
      lockCode?: string

      /** 锁定状态 */
      lockStatus?: boolean

      /** 腾讯地图Key */
      mapKey?: string

      /** 商户配置 */
      matchSettings?: defs.agent.MerchantSetting

      /** 活动备注 */
      remark?: string

      /** 数据统计url；前端不传 */
      shareHref?: string

      /** 活动开始时间 */
      startTime?: string

      /** 状态；1开启, 2关闭，3活动未开始, 4活动进行中,5活动结束 */
      status?: 1 | 2 | 3 | 4 | 5

      /** 置顶 */
      sticky?: boolean

      /** 活动名称 */
      title?: string

      /** 活动类型;后台创建字典 */
      type?: string

      /** h5地址 */
      url?: string

      /** 是否使用微信登录 */
      useWechatLogin?: boolean

      /** 活动图片-竖版 */
      verticalImage?: string

      /** 数据统计 */
      websiteId?: string

      /** 是否获取微信头像昵称信息 */
      wxprofile?: boolean
    }

    export class CreateCustomDataRequest {
      /** 活动id；静默处理页面不显示 */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 自定义标识；不传 */
      customCode: string

      /** 描述 */
      desc: string

      /** json数据；单独更改 */
      jsonData: Record<string, any>

      /** 标题 */
      title: string
    }

    export class CreateDictionaryRequest {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 字典码 */
      dictionaryCode: string

      /** 字典json */
      optionData: Array<defs.agent.OptionData>

      /** 字典名称 */
      title: string

      /** 字典类型;1系统全局, 2自定义 */
      type: string
    }

    export class CreateEventKeyRequest {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 是否启用 */
      enable: boolean

      /** 事件Key */
      key: string

      /** 模块字典获取 sys_event_module */
      module: "prize" | "register" | "saveUser" | "hxbefore" | "hxafter"
    }

    export class CreateFieldRequest {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 是否禁用 */
      disabled: boolean

      /** 字段标识 */
      fieldCode: string

      /** 表单ID */
      formId: number

      /** icon */
      icon: string

      /** 是否是默认列表显示 */
      isDefault: boolean

      /** 是否必选 */
      isRequired: boolean

      /** 字段是否参与搜索 */
      isSearch: boolean

      /** 是否显示 */
      isShow: boolean

      /** 是否是关联键 */
      isTarget: boolean

      /** 字段名称 */
      name: string

      /** placeholder */
      placeholder: string

      /** 列表显示优先级, 高的在前, 低的在后 */
      priority: number

      /** 正则 */
      regular: string

      /** 备注 */
      remark: string

      /** 顺序 */
      sort: number

      /** 字段类型 1字符串 2数字 3时间 4下拉框 */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
    }

    export class CreateFormRequest {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 是否为基础表单 */
      basics: boolean

      /** 报名截止时间 */
      deadline: string

      /** 表单字段 */
      fields: Array<string>

      /** 表单标识 */
      formCode: string

      /** 创建表单是否验证验证码 */
      formVCode: boolean

      /** 是否开启 */
      isEnabled: boolean

      /** 短信签名 */
      signName: string

      /** 短信内容 */
      smsContent: string

      /** 表单名称 */
      title: string
    }

    export class CreateLinkRequest {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 结束时间 */
      endTime: string

      /** 介绍 */
      introduction: string

      /** 开始时间 */
      startTime: string

      /** 状态；3开启4关闭 */
      status: 1 | 2 | 3 | 4

      /** 标题 */
      title: string

      /** uid二维码核销使用 */
      uid: string
    }

    export class CreateMapManagementRequest {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 地点标识 */
      code: string

      /** 点位介绍 */
      introduce: string

      /** 自定义json数据 */
      jsonData: Record<string, any>

      /** 维度 */
      lat: number

      /** 经度 */
      lng: number

      /** 范围单位Km */
      range: number

      /** 点位名称 */
      title: string
    }

    export class CreateMaterialLibraryGroupRequest {
      /** 账号ID;前端不传 */
      agentId?: number

      /** 分组名称 */
      name: string

      /** 上级分组ID */
      parentId: number

      /** 排序 */
      sort: number
    }

    export class CreateMaterialLibraryRequest {
      /** 账号ID;前端不传 */
      agentId?: number

      /** 分组id */
      groupId: number

      /** 图片名称 */
      name: string

      /** 图片地址 */
      path: string

      /** 1.总端素材2.商户端素材 */
      store: number

      /** 1.图片 2.视频 3.音频 4.其他  */
      type: number

      /** 小程序id */
      uniacid: number
    }

    export class CreatePrizeChannelRecordRequest {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 用户信息 */
      channel: defs.agent.PrizeChannel

      /** 渠道id */
      channelId: number

      /** 渠道名称 */
      channelName: string

      /** 渠道类型 */
      channelType: number

      /** 用户信息 */
      player: defs.agent.Submit

      /** 用户id */
      playerId: number

      /** 增加减少积分值 */
      value: number
    }

    export class CreatePrizeChannelRequest {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 渠道码 */
      code: string

      /** 是否限制0表示不限制 */
      limit: number

      /** 名称 */
      name: string

      /** 类型；1抽奖扣除积分；2增加积分 */
      type: number

      /** 限制次数单位；0表示不限制，1表示按天 */
      unit: number

      /** 积分值 */
      value: number
    }

    export class CreatePrizeRequest {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 奖品图片 */
      image?: string

      /** mini图 */
      mini?: string

      /** 奖品名称 */
      name: string

      /** 排序;越大越在前 */
      sort?: number

      /** 奖品类型;1普通礼品；2实物奖品，需要登记邮寄地址；3虚拟商品，需要兑换码；4现金红包 */
      type: number

      /** 奖品值；当奖品为特定数值是填写 */
      value?: number
    }

    export class CreatePrizeRuleRequest {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 表单规则； */
      formRule: Array<defs.agent.PrizeFormRule>

      /** 是否开启规则 */
      isEnable: boolean

      /** 限制用户中奖次数 */
      limit: number

      /** 剩余库存 */
      num: number

      /** 奖品ID */
      prizeId: number

      /** 百分数 100% 就是传100 90% 就是传90 也可以0.0001 也就是0.0001%的意思 */
      probability: number

      /** 时间ID */
      timeId: number

      /** 规则名称 */
      title: string

      /** 总库存 */
      total: number
    }

    export class CreatePrizeRuleTimeRequest {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 结束时间时间戳；单位秒 */
      endTime: number

      /** 关联奖品规则 */
      prizeRule: Array<defs.agent.PrizeRule>

      /** 备注 */
      remark: string

      /** 开始时间时间戳；单位秒 */
      startTime: number
    }

    export class CreateTimePeriodRequest {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 时间段标识 */
      code: string

      /** 描述 */
      description: string

      /** 结束时间 */
      endTime: string

      /** 是否开启 */
      isEnable: boolean

      /** 开始时间 */
      startTime: string

      /** 状态 */
      status: Record<string, any>

      /** 标题 */
      title: string
    }

    export class CustomData {
      /** 活动id；静默处理页面不显示 */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 自定义标识；不传 */
      customCode: string

      /** 描述 */
      desc: string

      /** id */
      id: number

      /** json数据；单独更改 */
      jsonData: Record<string, any>

      /** 标题 */
      title: string
    }

    export class DelBody {
      /** 表单id；删除用户提交表单数据，当数组仅有基础表单id时删除整条用户数据，其他删除对应表单字段数据 */
      formId: Array<Array<any>>
    }

    export class Dictionary {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 字典码 */
      dictionaryCode: string

      /** id */
      id: number

      /** 字典json */
      optionData: Array<defs.agent.OptionData>

      /** 字典名称 */
      title: string

      /** 字典类型;1系统全局, 2自定义 */
      type: string
    }

    export class EventKey {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 是否启用 */
      enable: boolean

      /** id */
      id: number

      /** 事件Key */
      key: string

      /** 模块字典获取 sys_event_module */
      module: "prize" | "register" | "saveUser" | "hxbefore" | "hxafter"
    }

    export class Field {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 字典数据 */
      dictionary: Array<defs.agent.OptionData>

      /** 是否禁用 */
      disabled: boolean

      /** 字段标识 */
      fieldCode: string

      /** 表单ID */
      formId: number

      /** icon */
      icon: string

      /** id */
      id: number

      /** 是否是默认列表显示 */
      isDefault: boolean

      /** 是否必选 */
      isRequired: boolean

      /** 字段是否参与搜索 */
      isSearch: boolean

      /** 是否显示 */
      isShow: boolean

      /** 是否是关联键 */
      isTarget: boolean

      /** 字段名称 */
      name: string

      /** placeholder */
      placeholder: string

      /** 列表显示优先级, 高的在前, 低的在后 */
      priority: number

      /** 正则 */
      regular: string

      /** 备注 */
      remark: string

      /** 顺序 */
      sort: number

      /** 字段类型 1字符串 2数字 3时间 4下拉框 */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
    }

    export class FieldSort {
      /** 字段id排序数组 */
      ids: Array<Array<any>>
    }

    export class FileUploadBody {
      /** file */
      file: string
    }

    export class Form {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 是否为基础表单 */
      basics: boolean

      /** 报名截止时间 */
      deadline: string

      /** 表单字段 */
      fields: Array<string>

      /** 表单标识 */
      formCode: string

      /** 创建表单是否验证验证码 */
      formVCode: boolean

      /** id */
      id: number

      /** 是否开启 */
      isEnabled: boolean

      /** 短信签名 */
      signName: string

      /** 短信内容 */
      smsContent: string

      /** 表单名称 */
      title: string
    }

    export class FormFieldChildren {
      /** 字段key */
      code: string

      /** 字段名字 */
      name: string
    }

    export class FormTreeRes {
      /** 字段 */
      children: Array<defs.agent.FormFieldChildren>

      /** 表单名字 */
      name: string
    }

    export class GetListQuery {
      /** limit */
      limit?: number

      /** page */
      page?: number

      /** 唯一键 */
      targetKey?: string
    }

    export class HxBody {
      /** 备注 */
      comment: string

      /** 扫码结果 */
      hxContent: string

      /** 环节id；可穿uid或id */
      linkId: number
    }

    export class Link {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 结束时间 */
      endTime: string

      /** id */
      id: number

      /** 介绍 */
      introduction: string

      /** 开始时间 */
      startTime: string

      /** 状态；3开启4关闭 */
      status: 1 | 2 | 3 | 4

      /** 标题 */
      title: string

      /** uid二维码核销使用 */
      uid: string
    }

    export class LinkOverviewRes {
      /** 已核销人数 */
      count: number

      /** 未核销人数 */
      noHx: number

      /** 总人数 */
      total: number
    }

    export class LinkSwitchBody {
      /** 开启关闭 3 开启;4 关闭 */
      status: 1 | 2 | 3 | 4
    }

    export class MapBody {
      /** 维度 */
      lat: number

      /** 经度 */
      lng: number
    }

    export class MapManagement {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 地点标识 */
      code: string

      /** id */
      id: number

      /** 点位介绍 */
      introduce: string

      /** 自定义json数据 */
      jsonData: Record<string, any>

      /** 维度 */
      lat: number

      /** 经度 */
      lng: number

      /** 范围单位Km */
      range: number

      /** 点位名称 */
      title: string
    }

    export class MaterialLibrary {
      /** 账号ID;前端不传 */
      agentId?: number

      /** 分组id */
      groupId: number

      /** id */
      id: number

      /** 图片名称 */
      name: string

      /** 图片地址 */
      path: string

      /** 1.总端素材2.商户端素材 */
      store: number

      /** 1.图片 2.视频 3.音频 4.其他  */
      type: number

      /** 小程序id */
      uniacid: number
    }

    export class MaterialLibraryGroup {
      /** 账号ID;前端不传 */
      agentId?: number

      /** id */
      id: number

      /** 分组名称 */
      name: string

      /** 上级分组ID */
      parentId: number

      /** 排序 */
      sort: number
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

    export class MoveMaterialLibraryRequest {
      /** groupId */
      groupId?: number

      /** id */
      id?: string
    }

    export class OptionData {
      /** 选项值 */
      key: string

      /** 选项名称 */
      name: string
    }

    export class OptionsType {
      /** 选项内容 */
      label: string

      /** 选项内容图片 */
      labelImg: string

      /** 选项值 */
      value: string
    }

    export class PickTypeClass {
      /** 版本号 */
      version: string
    }

    export class PriorityField {
      /** 字段标识 */
      fieldCode: string

      /** id */
      id: number

      /** 字段名称 */
      name: string
    }

    export class Prize {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** id */
      id: number

      /** 奖品图片 */
      image?: string

      /** mini图 */
      mini?: string

      /** 奖品名称 */
      name: string

      /** 排序;越大越在前 */
      sort?: number

      /** 奖品类型;1普通礼品；2实物奖品，需要登记邮寄地址；3虚拟商品，需要兑换码；4现金红包 */
      type: number

      /** 奖品值；当奖品为特定数值是填写 */
      value?: number
    }

    export class PrizeChannel {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 渠道码 */
      code: string

      /** id */
      id: number

      /** 是否限制0表示不限制 */
      limit: number

      /** 名称 */
      name: string

      /** 类型；1抽奖扣除积分；2增加积分 */
      type: number

      /** 限制次数单位；0表示不限制，1表示按天 */
      unit: number

      /** 积分值 */
      value: number
    }

    export class PrizeChannelRecord {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 用户信息 */
      channel: defs.agent.PrizeChannel

      /** 渠道id */
      channelId: number

      /** 渠道名称 */
      channelName: string

      /** 渠道类型 */
      channelType: number

      /** id */
      id: number

      /** 用户信息 */
      player: defs.agent.Submit

      /** 用户id */
      playerId: number

      /** 增加减少积分值 */
      value: number
    }

    export class PrizeFormRule {
      /** 概率 */
      probability: number

      /** 规则；示例 identity=1&sex=1 表示身份为1性别为1时命中 */
      rule: string

      /** 规则汉字；示例 身份为车主性别为男 */
      ruleName: string
    }

    export class PrizeOverview {
      /** 奖品名称 */
      name: string

      /** 中奖数量 */
      number: number
    }

    export class PrizeRecord {
      /** 活动ID */
      actId: number

      /** 邮寄-联系地址 */
      address: string

      /** 账号ID;前端不传 */
      agentId?: number

      /** 邮寄-联系人 */
      cName: string

      /** 兑换码 */
      cdkey: string

      /** id */
      id: number

      /** 奖品图片 */
      image: string

      /** 奖品名称 */
      name: string

      /** 邮寄-联系电话 */
      phone: string

      /** 用户信息 */
      player: defs.agent.Submit

      /** 用户id */
      playerId: number

      /** 用户信息 */
      prize: defs.agent.Prize

      /** 奖品id */
      prizeId: number

      /** 奖品类型 */
      prizeType: Record<string, any>

      /** targetKey */
      targetKey: string

      /** 奖品值；当奖品为特定数值是填写 */
      value: number
    }

    export class PrizeRule {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 表单规则； */
      formRule: Array<defs.agent.PrizeFormRule>

      /** id */
      id: number

      /** 是否开启规则 */
      isEnable: boolean

      /** 限制用户中奖次数 */
      limit: number

      /** 剩余库存 */
      num: number

      /** 奖品ID */
      prizeId: number

      /** 百分数 100% 就是传100 90% 就是传90 也可以0.0001 也就是0.0001%的意思 */
      probability: number

      /** 时间ID */
      timeId: number

      /** 规则名称 */
      title: string

      /** 总库存 */
      total: number
    }

    export class PrizeRuleTime {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 结束时间时间戳；单位秒 */
      endTime: number

      /** id */
      id: number

      /** 关联奖品规则 */
      prizeRule: Array<defs.agent.PrizeRule>

      /** 备注 */
      remark: string

      /** 开始时间时间戳；单位秒 */
      startTime: number
    }

    export class PrizeSetting {
      /** 普通奖品用户可中奖数量 */
      "1": number

      /** 实物奖品用户可中奖数量 */
      "2": number

      /** 虚拟奖品用户可中奖数量 */
      "3": number

      /** 现金红包奖品用户可中奖数量 */
      "4": number
    }

    export class PrizeVirtual {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 兑换码 */
      cdkey: string

      /** 是否兑换;0未兑换，1已兑换 */
      exchange: number

      /** id */
      id: number

      /** 用户信息 */
      player: defs.agent.Submit

      /** 用户id */
      playerId: number

      /** 奖品 */
      prize: defs.agent.Prize

      /** 奖品id */
      prizeId: number
    }

    export class Question {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 答案 */
      answer: string

      /** id */
      id: number

      /** 选项 */
      options: Array<defs.agent.OptionsType>

      /** 分数 */
      score: number

      /** 题目 */
      title: string

      /** 题目图片 */
      titleImg: string

      /** 1单选题；2多选题 */
      type: string
    }

    export class QuestionCreateDto {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 答案 */
      answer: string

      /** 选项 */
      options: Array<defs.agent.OptionsType>

      /** 分数 */
      score: number

      /** 题目 */
      title: string

      /** 题目图片 */
      titleImg: string

      /** 1单选题；2多选题 */
      type: string
    }

    export class SaveDslBody {
      /** 活动id */
      actId: number

      /** dsl */
      dsl: Record<string, any>

      /** 版本id，不传为先建 */
      id?: number

      /** 版本号 */
      version: string
    }

    export class Submit {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 答题记录 */
      answerRecord?: Array<defs.agent.AnswerRecord>

      /** 用户提交的数据json */
      content: Record<string, any>

      /** 抽奖扣除积分 */
      deduct?: number

      /** id */
      id: number

      /** 积分数, 不需要提交 */
      integral?: number

      /** 操作人 */
      operator?: string

      /** 可操作人集合 */
      principals?: Array<defs.agent.Submit>

      /** 答题分数 */
      score?: number

      /** 目标key, 用于保存字段表中的唯一枢纽 */
      targetKey?: string

      /** uid */
      uid?: string

      /** 投票数 */
      vote?: number
    }

    export class SubmitList {
      /** 导出字段数组 */
      fieldArr: Array<string>

      /** 表单id递增排序；关联表单时也需要传 */
      formIds: Array<Array<any>>

      /** limit */
      limit?: number

      /** page */
      page?: number

      /** 搜索条件集合 */
      searchArr: Array<defs.agent.SubmitSearch>
    }

    export class SubmitSearch {
      /** 搜索字段名称 */
      name: string

      /** 用户搜索数据 */
      search: string
    }

    export class TimePeriod {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 时间段标识 */
      code: string

      /** 描述 */
      description: string

      /** 结束时间 */
      endTime: string

      /** id */
      id: number

      /** 是否开启 */
      isEnable: boolean

      /** 开始时间 */
      startTime: string

      /** 状态 */
      status: Record<string, any>

      /** 标题 */
      title: string
    }

    export class TimeSwitchBody {
      /** 开启关闭 3 开启;4 关闭 */
      status: 1 | 2 | 3 | 4
    }

    export class TraceQuery {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 事件名 */
      event?: string

      /** 事件数据 */
      eventData?: Record<string, any>

      /** 页面 */
      page?: string

      /** session;用户区分用户唯一标识；不传用sessionId 客户端需持久化保存 */
      session?: string

      /** 类型;1普通，2事件 */
      type?: number
    }

    export class UpdateActivityRequest {
      /** 活动标识 */
      actCode?: string

      /** 账号ID;前端不传 */
      agentId?: number

      /** 创建人Id */
      creatorId?: number

      /** 部门标识 */
      deptNum?: string

      /** 活动结束时间 */
      endTime?: string

      /** 活动图片-横版 */
      horizontalImage?: string

      /** 是否启用 */
      isEnabled?: boolean

      /** 活动链接 */
      link?: string

      /** 锁定码 */
      lockCode?: string

      /** 锁定状态 */
      lockStatus?: boolean

      /** 腾讯地图Key */
      mapKey?: string

      /** 商户配置 */
      matchSettings?: defs.agent.MerchantSetting

      /** 活动备注 */
      remark?: string

      /** 数据统计url；前端不传 */
      shareHref?: string

      /** 活动开始时间 */
      startTime?: string

      /** 状态；1开启, 2关闭，3活动未开始, 4活动进行中,5活动结束 */
      status?: 1 | 2 | 3 | 4 | 5

      /** 置顶 */
      sticky?: boolean

      /** 活动名称 */
      title?: string

      /** 活动类型;后台创建字典 */
      type?: string

      /** h5地址 */
      url?: string

      /** 是否使用微信登录 */
      useWechatLogin?: boolean

      /** 活动图片-竖版 */
      verticalImage?: string

      /** 数据统计 */
      websiteId?: string

      /** 是否获取微信头像昵称信息 */
      wxprofile?: boolean
    }

    export class UpdateCustomDataRequest {
      /** 活动id；静默处理页面不显示 */
      actId?: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 自定义标识；不传 */
      customCode?: string

      /** 描述 */
      desc?: string

      /** json数据；单独更改 */
      jsonData?: Record<string, any>

      /** 标题 */
      title?: string
    }

    export class UpdateDictionaryRequest {
      /** 活动id */
      actId?: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 字典码 */
      dictionaryCode?: string

      /** 字典json */
      optionData?: Array<defs.agent.OptionData>

      /** 字典名称 */
      title?: string

      /** 字典类型;1系统全局, 2自定义 */
      type?: string
    }

    export class UpdateEventKeyRequest {
      /** 活动id */
      actId?: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 是否启用 */
      enable?: boolean

      /** 事件Key */
      key?: string

      /** 模块字典获取 sys_event_module */
      module?: "prize" | "register" | "saveUser" | "hxbefore" | "hxafter"
    }

    export class UpdateFieldRequest {
      /** 活动ID */
      actId?: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 是否禁用 */
      disabled?: boolean

      /** 字段标识 */
      fieldCode?: string

      /** 表单ID */
      formId?: number

      /** icon */
      icon?: string

      /** 是否是默认列表显示 */
      isDefault?: boolean

      /** 是否必选 */
      isRequired?: boolean

      /** 字段是否参与搜索 */
      isSearch?: boolean

      /** 是否显示 */
      isShow?: boolean

      /** 是否是关联键 */
      isTarget?: boolean

      /** 字段名称 */
      name?: string

      /** placeholder */
      placeholder?: string

      /** 列表显示优先级, 高的在前, 低的在后 */
      priority?: number

      /** 正则 */
      regular?: string

      /** 备注 */
      remark?: string

      /** 顺序 */
      sort?: number

      /** 字段类型 1字符串 2数字 3时间 4下拉框 */
      type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
    }

    export class UpdateFormRequest {
      /** 活动ID */
      actId?: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 是否为基础表单 */
      basics?: boolean

      /** 报名截止时间 */
      deadline?: string

      /** 表单字段 */
      fields?: Array<string>

      /** 表单标识 */
      formCode?: string

      /** 创建表单是否验证验证码 */
      formVCode?: boolean

      /** 是否开启 */
      isEnabled?: boolean

      /** 短信签名 */
      signName?: string

      /** 短信内容 */
      smsContent?: string

      /** 表单名称 */
      title?: string
    }

    export class UpdateInventory {
      /** 补充或消减数 */
      num: number
    }

    export class UpdateLinkRequest {
      /** 活动id */
      actId?: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 结束时间 */
      endTime?: string

      /** 介绍 */
      introduction?: string

      /** 开始时间 */
      startTime?: string

      /** 状态；3开启4关闭 */
      status?: 1 | 2 | 3 | 4

      /** 标题 */
      title?: string

      /** uid二维码核销使用 */
      uid?: string
    }

    export class UpdateMapManagementRequest {
      /** 活动id */
      actId?: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 地点标识 */
      code?: string

      /** 点位介绍 */
      introduce?: string

      /** 自定义json数据 */
      jsonData?: Record<string, any>

      /** 维度 */
      lat?: number

      /** 经度 */
      lng?: number

      /** 范围单位Km */
      range?: number

      /** 点位名称 */
      title?: string
    }

    export class UpdateMaterialLibraryGroupRequest {
      /** 账号ID;前端不传 */
      agentId?: number

      /** 分组名称 */
      name?: string

      /** 上级分组ID */
      parentId?: number

      /** 排序 */
      sort?: number
    }

    export class UpdateMaterialLibraryRequest {
      /** 账号ID;前端不传 */
      agentId?: number

      /** 分组id */
      groupId?: number

      /** 图片名称 */
      name?: string

      /** 图片地址 */
      path?: string

      /** 1.总端素材2.商户端素材 */
      store?: number

      /** 1.图片 2.视频 3.音频 4.其他  */
      type?: number

      /** 小程序id */
      uniacid?: number
    }

    export class UpdatePrizeRequest {
      /** 活动ID */
      actId?: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 奖品图片 */
      image?: string

      /** mini图 */
      mini?: string

      /** 奖品名称 */
      name?: string

      /** 排序;越大越在前 */
      sort?: number

      /** 奖品类型;1普通礼品；2实物奖品，需要登记邮寄地址；3虚拟商品，需要兑换码；4现金红包 */
      type?: number

      /** 奖品值；当奖品为特定数值是填写 */
      value?: number
    }

    export class UpdatePrizeRuleRequest {
      /** 活动ID */
      actId?: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 表单规则； */
      formRule?: Array<defs.agent.PrizeFormRule>

      /** 是否开启规则 */
      isEnable?: boolean

      /** 限制用户中奖次数 */
      limit?: number

      /** 奖品ID */
      prizeId?: number

      /** 百分数 100% 就是传100 90% 就是传90 也可以0.0001 也就是0.0001%的意思 */
      probability?: number

      /** 时间ID */
      timeId?: number

      /** 规则名称 */
      title?: string
    }

    export class UpdateSubmitRequest {
      /** 用户提交的数据json */
      content: Record<string, any>

      /** 表单id */
      formId: Array<Array<any>>

      /** 更新id，不传为新增 */
      id: number

      /** 操作人 */
      operator?: string

      /** 目标key, 用于保存字段表中的唯一枢纽 */
      targetKey?: string
    }

    export class UpdateTimePeriodRequest {
      /** 活动id */
      actId?: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 时间段标识 */
      code?: string

      /** 描述 */
      description?: string

      /** 结束时间 */
      endTime?: string

      /** 是否开启 */
      isEnable?: boolean

      /** 开始时间 */
      startTime?: string

      /** 状态 */
      status?: Record<string, any>

      /** 标题 */
      title?: string
    }

    export class Verification {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 备注 */
      comment: string

      /** 组织权限标识 */
      deptNum: string

      /** 关联键 */
      foreignKey: string

      /** id */
      id: number

      /** 签到环节 */
      link: defs.agent.Link

      /** 环节id */
      linkId: number

      /** 用户关联数据 */
      player: defs.agent.Submit

      /** 用户id */
      playerId: number

      /** 工作人员id */
      userId: number
    }

    export class VoteConfigBody {
      /** 活动id */
      actId?: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 截止时间；截止时间为空时不限制 */
      deadline?: string

      /** id */
      id?: number

      /** 是否限制0表示不限制 */
      limit?: number

      /** 是否限制用户0表示不限制，大于0表示限制次数;比如可设置投票者对单个投票人限制次数单位投票数 */
      limitUser?: number

      /** 限制次数单位；0表示不限制，1表示按天 */
      unit?: number
    }

    export class VotingConfig {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 截止时间；截止时间为空时不限制 */
      deadline: string

      /** id */
      id: number

      /** 是否限制0表示不限制 */
      limit: number

      /** 是否限制用户0表示不限制，大于0表示限制次数;比如可设置投票者对单个投票人限制次数单位投票数 */
      limitUser: number

      /** 限制次数单位；0表示不限制，1表示按天 */
      unit: number
    }

    export class VotingRecord {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** id */
      id: number

      /** 投票ip地址 */
      ip: string

      /** 用户信息 */
      player: defs.agent.Submit

      /** 用户id */
      playerId: number

      /** sessionId 投票者sessionId */
      sessionId: string

      /** 平台唯一值 */
      targetKey: string
    }

    export class WeChat {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** appId */
      appId: string

      /** appSecret */
      appSecret: string

      /** encodingAesKey */
      encodingAesKey: string

      /** encryptMessage */
      encryptMessage: string

      /** id */
      id: number

      /** 是否为默认 */
      isDefault: boolean

      /** token */
      token: string

      /** 授权文件 */
      verifyTxt: string
    }

    export class WeChatShare {
      /** 活动id */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** id */
      id: number

      /** 是否为默认 */
      isDefault: boolean

      /** 分享图片 */
      shareImg: string

      /** 分享副标题 */
      subTitle: string

      /** 分享标题 */
      title: string
    }

    export class WebStatisticsItem {
      /** 变化值 */
      change?: number

      /** 当前值 */
      value?: number
    }

    export class WebStatisticsRes {
      /** 跳出 */
      bounces?: defs.agent.WebStatisticsItem

      /** 浏览量 */
      pageviews?: defs.agent.WebStatisticsItem

      /** 总时间 */
      totalTime?: defs.agent.WebStatisticsItem

      /** 访客 */
      uniques?: defs.agent.WebStatisticsItem
    }

    export class WebsiteMetric {
      /** 时间 */
      t?: string

      /** x坐标或事件名 */
      x: string

      /** y或数值 */
      y: number
    }
  }
}

declare namespace API {
  export namespace agent {}
}
