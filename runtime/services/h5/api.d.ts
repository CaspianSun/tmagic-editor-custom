type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value
}

declare namespace defs {
  export namespace h5 {
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
      matchSettings: defs.h5.MerchantSetting

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

    export class AnswerRankRes {
      /** 活动ID */
      actId: number

      /** 用户提交的数据json */
      content: Record<string, any>

      /** id */
      id: number

      /** 积分数, 不需要提交 */
      integral?: number

      /** 操作人 */
      operator?: string

      /** 排名 */
      rank: number

      /** 答题分数 */
      score?: number

      /** 目标key, 用于保存字段表中的唯一枢纽 */
      targetKey?: string

      /** 时间 */
      time: number
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

    export class AnswerSaveBody {
      /** 答案 */
      answer: string

      /** 题目id */
      questionId: number

      /** 目标键 */
      targetKey: string

      /** 答题消耗时间;单位秒 */
      time: number
    }

    export class AnswerSaveRes {
      /** 是否正确 */
      isRight: boolean

      /** 用户 */
      player: defs.h5.Submit

      /** 记录id */
      recordId: number

      /** 得分 */
      score: number
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

    export class Field {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 字典数据 */
      dictionary: Array<defs.h5.OptionData>

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

    export class FormFieldsRes {
      /** 目标key, 用于保存字段表中的唯一枢纽 */
      fieldData: Array<defs.h5.Field>

      /** 表单 */
      form: defs.h5.Form
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

    export class LotteryPlay {
      /** 目标key, 用于保存字段表中的唯一枢纽 */
      targetKey: string
    }

    export class LotteryRes {
      /** 是否抽中奖品 */
      isLottery: boolean

      /** 中奖信息 */
      prizeInfo: defs.h5.PrizeInfo
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

    export class OpenidLogin {
      /** openid */
      openid: string
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

    export class PrizeInfo {
      /** 图片地址 */
      image: string

      /** mini图片地址 */
      mini: string

      /** 奖品名称 */
      name: string

      /** 奖品id */
      prizeId: number

      /** 中奖记录id */
      recordId: number

      /** 奖品类型 */
      type: number
    }

    export class PrizeRecordAdress {
      /** 邮寄-联系地址 */
      address: string

      /** 邮寄-联系人 */
      cName: string

      /** 中奖记录id */
      id: number

      /** 邮寄-联系电话 */
      phone: string
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
      options: Array<defs.h5.OptionsType>

      /** 分数 */
      score: number

      /** 题目 */
      title: string

      /** 题目图片 */
      titleImg: string

      /** 1单选题；2多选题 */
      type: string
    }

    export class RankListQuery {
      /** 是否过滤0票;1过滤0不过滤 */
      filterZero?: number

      /** limit */
      limit?: number

      /** page */
      page?: number

      /** 搜索条件集合 */
      searchArr?: Array<defs.h5.SubmitSearch>

      /** 唯一值 */
      targetKey?: string
    }

    export class RankListRes {
      /** 活动ID */
      actId: number

      /** 用户提交的数据json */
      content: Record<string, any>

      /** id */
      id: number

      /** 操作人 */
      operator?: string

      /** 排名 */
      rank: number

      /** 目标key, 用于保存字段表中的唯一枢纽 */
      targetKey?: string

      /** 投票数 */
      vote?: number
    }

    export class SendFormSmsCode {
      /** 表单code */
      formCode?: string

      /** 手机号 */
      phone: string
    }

    export class SendSmsBody {
      /** 活动code */
      actCode: string

      /** 表单code，发放指定的短信验证码,需创建一个登录表单 */
      formCode: string

      /** 手机号 */
      phone: string
    }

    export class SmsLoginBody {
      /** 活动code */
      actCode: string

      /** 验证码 */
      code: string

      /** 表单code，发放指定的短信验证码,需创建一个登录表单 */
      formCode: string

      /** 手机号 */
      phone: string
    }

    export class Submit {
      /** 活动ID */
      actId: number

      /** 账号ID;前端不传 */
      agentId?: number

      /** 答题记录 */
      answerRecord?: Array<defs.h5.AnswerRecord>

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
      principals?: Array<defs.h5.Submit>

      /** 答题分数 */
      score?: number

      /** 目标key, 用于保存字段表中的唯一枢纽 */
      targetKey?: string

      /** uid */
      uid?: string

      /** 投票数 */
      vote?: number
    }

    export class SubmitContent {
      /** 用户提交的数据json，根据表单数据来 */
      content: defs.h5.SubmitContentMust

      /** 表单code */
      formCode: string

      /** 目标key, 用于保存字段表中的唯一枢纽 */
      operator?: string

      /** 手机表单key */
      phoneKey?: string

      /** 验证码； */
      smsCode?: string

      /** 目标key, 用于保存字段表中的唯一枢纽 */
      targetKey: string
    }

    export class SubmitContentMust {}

    export class SubmitSearch {
      /** 搜索字段名称 */
      name: string

      /** 用户搜索数据 */
      search: string
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
      link: defs.h5.Link

      /** 环节id */
      linkId: number

      /** 用户关联数据 */
      player: defs.h5.Submit

      /** 用户id */
      playerId: number

      /** 工作人员id */
      userId: number
    }

    export class VoteBody {
      /** 要投票的用户标识,多用于逗号隔开 */
      targetKey: string
    }

    export class VoteInfoRes {
      /** 总票数 */
      totalVote: number

      /** 已投票票数 */
      useVote: number

      /** unit单位内对用户所投票数 */
      vote: number
    }

    export class VotePersonInfoRes {
      /** 上一名用户 */
      lastPlayer: defs.h5.Submit

      /** 当前用户 */
      player: defs.h5.Submit

      /** 排名 */
      rank: number

      /** 当前投票数 */
      vote: number
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
      player: defs.h5.Submit

      /** 用户id */
      playerId: number

      /** sessionId 投票者sessionId */
      sessionId: string

      /** 平台唯一值 */
      targetKey: string
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

    export class WechatJssdkSignature {
      /** 活动code */
      actCode: string

      /** 地址 */
      href: string
    }
  }
}

declare namespace API {
  export namespace h5 {}
}
