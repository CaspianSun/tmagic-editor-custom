(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.magicPresetValues = factory());
})(this, (function () { 'use strict';

  const page = {
    items: [],
    style: { height: "auto", "min-height": "100%", "background-color": "#eff2f5" }
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
      width: 176,
      height: "auto"
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
      round: false
    }
  };

  const field = {
    style: {
      width: 300
    },
    vantProps: {
      label: "输入框",
      labelWidth: "60px",
      name: "input",
      type: "text",
      size: "",
      placeholder: "请输入文字",
      maxlength: "",
      rules: [],
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
      labelWidth: "60px",
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
      labelWidth: "60px",
      name: "checkbox",
      size: "",
      rule: [],
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
      labelWidth: "60px",
      name: "radio",
      size: "",
      rules: [],
      border: true,
      colon: false,
      required: false,
      center: false
    }
  };

  const qr_code = {
    text: "text",
    style: {
      position: "absolute",
      left: "57",
      width: "176",
      height: "176"
    }
  };

  const sms = {
    style: {
      width: 300
    },
    vantProps: {
      label: "手机号",
      labelWidth: "60px",
      name: "phone",
      type: "text",
      size: "",
      placeholder: "请输入手机号",
      maxlength: "11",
      rules: [
        { required: true, message: "请填写您的手机号码！" },
        { pattern: /^1[3456789]d{9}$/, message: "手机号码格式错误！" }
      ],
      border: true,
      colon: false,
      required: false,
      center: true,
      clearable: false
    }
  };

  const swiper = {
    layout: "absolute",
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      bottom: "0",
      right: "0"
    },
    current: "0",
    items: [],
    pageFragments: []
  };

  const music = {
    src: "https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/5c89d6779fab955439.mp3",
    style: {
      position: "fixed",
      right: "20px",
      top: "20px"
    }
  };

  const pageFragment = {
    items: [],
    style: {
      width: "375",
      height: "817"
    }
  };

  const pageFragmentContainer = {
    style: {
      width: "",
      height: ""
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
    "radio": radio,
    "qr_code": qr_code,
    "sms": sms,
    "swiper": swiper,
    "music": music,
    "page-fragment": pageFragment,
    "page-fragment-container": pageFragmentContainer
  };

  return values;

}));
//# sourceMappingURL=index.umd.js.map
