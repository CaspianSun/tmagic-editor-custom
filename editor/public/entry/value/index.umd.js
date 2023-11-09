(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.magicPresetValues = factory());
})(this, (function () { 'use strict';

  const page = {
    items: [],
    style: { width: "100%", height: "100%", backgroundColor: "#eff2f5" }
  };

  const text = {
    text: "请输入文本内容",
    multiple: true,
    style: {}
  };

  const img = {
    src: "https://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg",
    url: "",
    fit: "contain",
    style: {
      width: 176
    }
  };

  const container = {
    items: [],
    style: { position: "relative", width: "100%", height: "100px" }
  };

  const overlay = {
    style: { position: "fixed", top: 0, left: 0 },
    items: []
  };

  const button = {
    style: {},
    vantProps: {
      text: "按钮",
      type: "primary",
      size: "small",
      plain: false,
      hairline: false,
      round: false
    }
  };

  const field = {
    style: {
      width: 300
    },
    model: "",
    vantProps: {
      label: "输入框",
      labelWidth: "50px",
      name: "input",
      type: "text",
      size: "",
      placeholder: "请输入文字",
      maxlength: "",
      border: true,
      colon: false,
      required: false,
      center: false,
      clearable: false
    }
  };

  const form = {
    style: {
      width: 300,
      height: 100
    },
    layout: "form",
    items: [],
    vantProps: {
      labelWidth: "50px",
      labelAlign: "left",
      inputAlign: "left",
      colon: false,
      required: false
    }
  };

  const values = {
    "page": page,
    "text": text,
    "img": img,
    "container": container,
    "overlay": overlay,
    "button": button,
    "field": field,
    "form": form
  };

  return values;

}));
//# sourceMappingURL=index.umd.js.map
