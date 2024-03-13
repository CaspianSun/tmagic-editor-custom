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

  const qr_code = [
    {
      text: "内容",
      name: "text",
      type: "data-source-input"
    }
  ];

  const swiper = [
    {
      name: "current",
      type: "data-source-input",
      text: "激活索引"
    },
    {
      type: "table",
      name: "fragments",
      items: [
        {
          type: "page-fragment-select",
          name: "pageFragmentId",
          label: "Swiper页面片"
        }
      ]
    }
  ];

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

  const pageFragment = [
    {
      text: "页面片标识",
      name: "name",
      disabled: true
    },
    {
      text: "页面片标题",
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

  const pageFragmentContainer = [
    {
      name: "pageFragmentId",
      text: "Swiper页面片ID",
      type: "page-fragment-select"
    }
  ];

  const form = [
    {
      type: "form-field",
      name: "fields",
      field: [
        {
          name: "name",
          label: "字段名",
          type: "display"
        },
        {
          name: "type",
          label: "字段类型",
          type: "hidden"
        },
        {
          name: "fieldCode",
          label: "字段标识",
          type: "hidden"
        },
        {
          name: "isSearch",
          label: "是否参与搜索",
          type: "hidden"
        },
        {
          name: "isRequired",
          label: "是否必填",
          type: "hidden"
        },
        {
          name: "disabled",
          label: "是否禁用",
          type: "hidden"
        },
        {
          name: "isShow",
          label: "是否显示",
          type: "hidden"
        },
        {
          name: "placeholder",
          label: "占位提示",
          type: "hidden"
        },
        {
          name: "remark",
          label: "备注",
          type: "hidden"
        }
      ]
    }
  ];

  const configs = {
    "page": page,
    "text": text,
    "img": img,
    "container": container,
    "overlay": overlay,
    "button": button,
    "qr_code": qr_code,
    "swiper": swiper,
    "music": music,
    "page-fragment": pageFragment,
    "page-fragment-container": pageFragmentContainer,
    "form": form
  };

  return configs;

}));
//# sourceMappingURL=index.umd.js.map
