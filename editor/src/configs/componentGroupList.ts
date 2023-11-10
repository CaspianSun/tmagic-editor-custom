import { FolderOpened, Grid, PictureFilled, SwitchButton, Tickets } from '@element-plus/icons-vue'

export const componentGroupList = [
  {
    title: '布局组件',
    items: [
      {
        icon: FolderOpened,
        text: '组',
        type: 'container'
      },
      {
        icon: FolderOpened,
        text: '遮罩',
        type: 'overlay'
      }
    ]
  },
  {
    title: '组件列表',
    items: [
      {
        icon: Tickets,
        text: '文字',
        type: 'text'
      },
      {
        icon: PictureFilled,
        text: '图片',
        type: 'img'
      },
      {
        icon: SwitchButton,
        text: '按钮',
        type: 'button'
      }
    ]
  },
  {
    title: '表单列表',
    items: [
      {
        icon: Tickets,
        text: '表单容器',
        type: 'form'
      },
      {
        icon: Tickets,
        text: '输入框',
        type: 'field'
      },
      {
        icon: Tickets,
        text: '复选框',
        type: 'check_box'
      },
      {
        icon: Tickets,
        text: '单选框',
        type: 'radio'
      }
    ]
  }
]
