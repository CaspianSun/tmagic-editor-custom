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
    layout: "absolute",
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
    vantProps: {
      label: "输入框",
      labelWidth: "50px",
      name: "input",
      type: "text",
      size: "",
      placeholder: "请输入文字",
      maxlength: "",
      rule: "[]",
      border: true,
      colon: false,
      required: false,
      center: false,
      clearable: false
    }
  };

  const form = {
    layout: "absolute",
    style: {
      width: 300,
      height: 100
    },
    items: [],
    vantProps: {
      labelWidth: "50px",
      labelAlign: "left",
      inputAlign: "left",
      colon: false,
      required: false
    }
  };

  const check_box = {
    style: {
      width: 300
    },
    options: [
      {
        label: "选项1",
        name: "1",
        disabled: false,
        shape: "square"
      }
    ],
    vantProps: {
      label: "复选框",
      labelWidth: "50px",
      name: "checkbox",
      size: "",
      rule: "[]",
      border: true,
      colon: false,
      required: false,
      center: false
    }
  };

  const radio = {
    style: {
      width: 300
    },
    options: [
      {
        label: "选项1",
        name: "1",
        disabled: false
      }
    ],
    vantProps: {
      label: "单选框",
      labelWidth: "50px",
      name: "radio",
      size: "",
      rule: "[]",
      border: true,
      colon: false,
      required: false,
      center: false
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
    "form": form,
    "check_box": check_box,
    "radio": radio
  };

  return values;

}));
//# sourceMappingURL=index.umd.js.map
