import {
  TwoDimensionalCodeOne,
  AddText,
  Pic,
  SwitchButton,
  MaskTwo,
  PageTemplate,
  LayoutFour,
  Performance,
  FormOne
} from "@icon-park/vue-next"

export const componentGroupList = [
  {
    title: "布局组件",
    items: [
      {
        icon: PageTemplate,
        text: "组",
        type: "container"
      },
      {
        icon: MaskTwo,
        text: "遮罩",
        type: "overlay"
      }
    ]
  },
  {
    title: "滑动布局",
    items: [
      {
        icon: LayoutFour,
        text: "滑动容器",
        type: "swiper"
      }
    ]
  },
  {
    title: "组件列表",
    items: [
      {
        icon: AddText,
        text: "文字",
        type: "text"
      },
      {
        icon: Pic,
        text: "图片",
        type: "img"
      },
      {
        icon: SwitchButton,
        text: "按钮",
        type: "button"
      },
      {
        icon: TwoDimensionalCodeOne,
        text: "二维码",
        type: "qr_code"
      },
      {
        icon: Performance,
        text: "音乐",
        type: "music"
      }
    ]
  },
  {
    title: "表单列表",
    items: [
      {
        icon: FormOne,
        text: "表单容器",
        type: "form"
      }
    ]
  }
]
