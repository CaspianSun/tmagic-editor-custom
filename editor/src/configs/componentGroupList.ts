import {
  TwoDimensionalCodeOne,
  Checkbox,
  RadioTwo,
  Text,
  FormOne,
  AddText,
  Pic,
  SwitchButton,
  MaskTwo,
  PageTemplate
} from '@icon-park/vue-next'

export const componentGroupList = [
  {
    title: '布局组件',
    items: [
      {
        icon: PageTemplate,
        text: '组',
        type: 'container'
      },
      {
        icon: MaskTwo,
        text: '遮罩',
        type: 'overlay'
      }
    ]
  },
  {
    title: '组件列表',
    items: [
      {
        icon: AddText,
        text: '文字',
        type: 'text'
      },
      {
        icon: Pic,
        text: '图片',
        type: 'img'
      },
      {
        icon: SwitchButton,
        text: '按钮',
        type: 'button'
      },
      {
        icon: TwoDimensionalCodeOne,
        text: '二维码',
        type: 'qr_code'
      }
    ]
  },
  {
    title: '表单列表',
    items: [
      {
        icon: FormOne,
        text: '表单容器',
        type: 'form'
      },
      {
        icon: Text,
        text: '输入框',
        type: 'field'
      },
      {
        icon: Checkbox,
        text: '复选框',
        type: 'check_box'
      },
      {
        icon: RadioTwo,
        text: '单选框',
        type: 'radio'
      }
    ]
  }
]
