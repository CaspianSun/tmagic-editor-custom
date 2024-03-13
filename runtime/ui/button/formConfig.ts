export default [
  {
    name: "vantProps",
    items: [
      {
        text: "文本",
        name: "text",
        type: "data-source-input"
      },
      {
        text: "类型",
        name: "type",
        type: "select",
        options: [
          {
            text: "主要",
            value: "primary"
          },
          {
            text: "成功",
            value: "success"
          },
          {
            text: "警告",
            value: "warning"
          },
          {
            text: "危险",
            value: "danger"
          }
        ]
      },
      {
        text: "尺寸",
        name: "size",
        type: "select",
        options: [
          {
            text: "默认",
            value: ""
          },
          {
            text: "大型",
            value: "large"
          },
          {
            text: "小型",
            value: "small"
          },
          {
            text: "超小",
            value: "mini"
          }
        ]
      },
      {
        type: "row",
        span: 8,
        items: [
          {
            text: "朴素",
            name: "plain",
            type: "switch"
          },
          {
            text: "圆角",
            name: "round",
            type: "switch"
          }
        ]
      }
    ]
  }
]
