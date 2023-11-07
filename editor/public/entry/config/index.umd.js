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

  const configs = {
    "page": page,
    "text": text,
    "img": img,
    "container": container,
    "overlay": overlay
  };

  return configs;

}));
//# sourceMappingURL=index.umd.js.map
