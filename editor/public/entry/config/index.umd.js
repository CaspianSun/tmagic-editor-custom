(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.magicPresetConfigs = factory());
})(this, (function () { 'use strict';

  const page = [
    {
      text: "页面标识",
      name: "name",
      disabled: true,
      extra: "在多页面的情况下用来指定要打开的页面"
    },
    {
      text: "页面标题",
      name: "title"
    },
    {
      name: "layout",
      text: "容器布局",
      type: "select",
      defaultValue: "absolute",
      options: [
        { value: "absolute", text: "绝对定位" },
        { value: "relative", text: "流式布局" }
      ],
      onChange: (formState, v, { model }) => {
        if (!model.style)
          return v;
        if (v === "relative") {
          model.style.height = "auto";
        } else {
          const el = formState.stage?.renderer?.contentWindow.document.getElementById(model.id);
          if (el) {
            model.style.height = el.getBoundingClientRect().height;
          }
        }
      }
    }
  ];

  const text = [
    {
      name: "text",
      text: "文本",
      type: "data-source-input"
    },
    {
      name: "multiple",
      text: "多行文本",
      type: "switch"
    }
  ];

  const img = [
    {
      text: "图片",
      name: "src",
      type: "data-source-input"
    },
    {
      text: "链接",
      name: "url",
      type: "data-source-input"
    },
    {
      text: "Fit",
      name: "fit",
      type: "select",
      options: [
        { value: "contain", text: "Contain" },
        { value: "cover", text: "Cover" },
        { value: "fill", text: "Fill" },
        { value: "none", text: "None" },
        { value: "unset", text: "Unset" },
        { value: "inherit", text: "Inherit" }
      ]
    }
  ];

  const container = [
    {
      name: "layout",
      text: "容器布局",
      type: "select",
      defaultValue: "absolute",
      options: [
        { value: "absolute", text: "绝对定位" },
        { value: "relative", text: "流式布局" }
      ],
      onChange: (formState, v, { model }) => {
        if (!model.style)
          return v;
        if (v === "relative") {
          model.style.height = "auto";
        } else {
          const el = formState.stage?.renderer?.contentWindow.document.getElementById(model.id);
          if (el) {
            model.style.height = el.getBoundingClientRect().height;
          }
        }
      }
    }
  ];

  const overlay = [];

  const button = [
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
  ];

  const field = [
    {
      name: "vantProps",
      labelWidth: "80px",
      items: [
        {
          name: "size",
          type: "select",
          text: "尺寸",
          options: [
            {
              text: "默认",
              value: ""
            },
            {
              text: "大号",
              value: "large"
            }
          ]
        },
        {
          name: "type",
          type: "data-source-input",
          text: "类型"
        },
        {
          name: "label",
          type: "data-source-input",
          text: "左侧文本"
        },
        {
          name: "labelWidth",
          type: "data-source-input",
          text: "左侧宽度"
        },
        {
          name: "placeholder",
          type: "data-source-input",
          text: "占位文字"
        },
        {
          name: "maxlength",
          type: "data-source-input",
          text: "最大长度"
        },
        {
          name: "name",
          type: "data-source-input",
          text: "表单标识"
        },
        {
          name: "rules",
          type: "vs-code",
          text: "校验规则",
          height: "200px",
          language: "javascript",
          parse: true,
          options: {
            theme: "vs-light",
            fixedOverflowWidgets: true,
            automaticLayout: true,
            glyphMargin: false,
            folding: false,
            tabSize: 2,
            lineDecorationsWidth: 6,
            lineNumbersMinChars: 0
          }
        },
        {
          name: "colon",
          type: "switch",
          text: "冒号"
        },
        {
          name: "border",
          type: "switch",
          text: "内边框"
        },
        {
          name: "required",
          type: "switch",
          text: "必填星号"
        },
        {
          name: "center",
          type: "switch",
          text: "垂直居中"
        },
        {
          name: "clearable",
          type: "switch",
          text: "清除控件"
        }
      ]
    }
  ];

  const form = [
    {
      name: "layout",
      text: "容器布局",
      type: "select",
      defaultValue: "absolute",
      options: [
        { value: "absolute", text: "绝对定位" },
        { value: "relative", text: "流式布局" }
      ],
      onChange: (formState, v, { model }) => {
        if (!model.style)
          return v;
        if (v === "relative") {
          model.style.height = "auto";
        } else {
          const el = formState.stage?.renderer?.contentWindow.document.getElementById(model.id);
          if (el) {
            model.style.height = el.getBoundingClientRect().height;
          }
        }
      }
    },
    {
      name: "vantProps",
      labelWidth: "80px",
      items: [
        {
          name: "labelWidth",
          type: "data-source-input",
          text: "左侧宽度"
        },
        {
          name: "labelAlign",
          type: "select",
          text: "左侧对齐",
          options: [
            {
              text: "左对齐",
              value: "left"
            },
            {
              text: "居中",
              value: "center"
            },
            {
              text: "右对齐",
              value: "right"
            },
            {
              text: "上对齐",
              value: "top"
            }
          ]
        },
        {
          name: "inputAlign",
          type: "select",
          text: "输入对齐",
          options: [
            {
              text: "左对齐",
              value: "left"
            },
            {
              text: "居中",
              value: "center"
            },
            {
              text: "右对齐",
              value: "right"
            }
          ]
        },
        {
          name: "colon",
          type: "switch",
          text: "冒号"
        },
        {
          name: "required",
          type: "switch",
          text: "必填星号"
        }
      ]
    }
  ];

  const check_box = [
    {
      name: "vantProps",
      labelWidth: "80px",
      items: [
        {
          name: "size",
          type: "select",
          text: "尺寸",
          options: [
            {
              text: "默认",
              value: ""
            },
            {
              text: "大号",
              value: "large"
            }
          ]
        },
        {
          name: "label",
          type: "data-source-input",
          text: "左侧文本"
        },
        {
          name: "labelWidth",
          type: "data-source-input",
          text: "左侧宽度"
        },
        {
          name: "name",
          type: "data-source-input",
          text: "表单标识"
        },
        {
          name: "rules",
          type: "vs-code",
          text: "校验规则",
          height: "200px",
          language: "javascript",
          parse: true,
          options: {
            theme: "vs-light",
            fixedOverflowWidgets: true,
            automaticLayout: true,
            glyphMargin: false,
            folding: false,
            tabSize: 2,
            lineDecorationsWidth: 6,
            lineNumbersMinChars: 0
          }
        },
        {
          name: "colon",
          type: "switch",
          text: "冒号"
        },
        {
          name: "border",
          type: "switch",
          text: "内边框"
        },
        {
          name: "required",
          type: "switch",
          text: "必填星号"
        },
        {
          name: "center",
          type: "switch",
          text: "垂直居中"
        }
      ]
    },
    {
      type: "table",
      name: "options",
      items: [
        {
          name: "label",
          label: "选项文本"
        },
        {
          name: "name",
          label: "标识符"
        },
        {
          name: "disabled",
          label: "禁用",
          defaultValue: false,
          type: "switch"
        },
        {
          name: "shape",
          label: "形状",
          type: "select",
          defaultValue: "round",
          options: [
            {
              text: "方形",
              value: "square"
            },
            {
              text: "圆形",
              value: "round"
            }
          ]
        }
      ]
    }
  ];

  const radio = [
    {
      name: "vantProps",
      labelWidth: "80px",
      items: [
        {
          name: "size",
          type: "select",
          text: "尺寸",
          options: [
            {
              text: "默认",
              value: ""
            },
            {
              text: "大号",
              value: "large"
            }
          ]
        },
        {
          name: "label",
          type: "data-source-input",
          text: "左侧文本"
        },
        {
          name: "labelWidth",
          type: "data-source-input",
          text: "左侧宽度"
        },
        {
          name: "name",
          type: "data-source-input",
          text: "表单标识"
        },
        {
          name: "rules",
          type: "vs-code",
          text: "校验规则",
          height: "200px",
          language: "javascript",
          parse: true,
          options: {
            theme: "vs-light",
            fixedOverflowWidgets: true,
            automaticLayout: true,
            glyphMargin: false,
            folding: false,
            tabSize: 2,
            lineDecorationsWidth: 6,
            lineNumbersMinChars: 0
          }
        },
        {
          name: "colon",
          type: "switch",
          text: "冒号"
        },
        {
          name: "border",
          type: "switch",
          text: "内边框"
        },
        {
          name: "required",
          type: "switch",
          text: "必填星号"
        },
        {
          name: "center",
          type: "switch",
          text: "垂直居中"
        }
      ]
    },
    {
      type: "table",
      name: "options",
      items: [
        {
          name: "label",
          label: "选项文本"
        },
        {
          name: "name",
          label: "标识符"
        },
        {
          name: "disabled",
          label: "禁用",
          defaultValue: false,
          type: "switch"
        },
        {
          name: "shape",
          label: "形状",
          type: "select",
          defaultValue: "round",
          options: [
            {
              text: "方形",
              value: "square"
            },
            {
              text: "圆形",
              value: "round"
            }
          ]
        }
      ]
    }
  ];

  const qr_code = [
    {
      text: "内容",
      name: "text",
      type: "data-source-input"
    }
  ];

  const sms = [
    {
      name: "vantProps",
      labelWidth: "80px",
      items: [
        {
          name: "size",
          type: "select",
          text: "尺寸",
          options: [
            {
              text: "默认",
              value: ""
            },
            {
              text: "大号",
              value: "large"
            }
          ]
        },
        {
          name: "type",
          type: "data-source-input",
          text: "类型"
        },
        {
          name: "label",
          type: "data-source-input",
          text: "左侧文本"
        },
        {
          name: "labelWidth",
          type: "data-source-input",
          text: "左侧宽度"
        },
        {
          name: "placeholder",
          type: "data-source-input",
          text: "占位文字"
        },
        {
          name: "maxlength",
          type: "data-source-input",
          text: "最大长度"
        },
        {
          name: "name",
          type: "data-source-input",
          text: "表单标识"
        },
        {
          name: "rules",
          type: "vs-code",
          text: "校验规则",
          height: "200px",
          language: "javascript",
          parse: true,
          options: {
            theme: "vs-light",
            fixedOverflowWidgets: true,
            automaticLayout: true,
            glyphMargin: false,
            folding: false,
            tabSize: 2,
            lineDecorationsWidth: 6,
            lineNumbersMinChars: 0
          }
        },
        {
          name: "colon",
          type: "switch",
          text: "冒号"
        },
        {
          name: "border",
          type: "switch",
          text: "内边框"
        },
        {
          name: "required",
          type: "switch",
          text: "必填星号"
        },
        {
          name: "center",
          type: "switch",
          text: "垂直居中"
        },
        {
          name: "clearable",
          type: "switch",
          text: "清除控件"
        }
      ]
    }
  ];

  const swiper = [
    {
      name: "current",
      type: "data-source-input",
      text: "激活索引"
    }
  ];

  const swiper_slide = [];

  const music = [
    {
      text: "音乐链接",
      name: "src",
      type: "data-source-input"
    },
    {
      text: "自动播放",
      name: "loadAutoPlay",
      type: "switch"
    }
  ];

  const configs = {
    "page": page,
    "text": text,
    "img": img,
    "container": container,
    "overlay": overlay,
    "button": button,
    "field": field,
    "form": form,
    "check_box": check_box,
    "radio": radio,
    "qr_code": qr_code,
    "sms": sms,
    "swiper": swiper,
    "swiper_slide": swiper_slide,
    "music": music
  };

  return configs;

}));
//# sourceMappingURL=index.umd.js.map
