(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.magicPresetValues = factory());
})(this, (function () { 'use strict';

  const page = {
    items: [],
    style: {
      width: "100%",
      height: "100%"
    }
  };

  const text = {
    text: "请输入文本内容",
    multiple: true,
    style: {
      width: "100",
      height: "auto"
    }
  };

  const img = {
    src: "https://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg",
    url: "",
    fit: "contain",
    style: {
      position: "absolute",
      left: "57",
      width: "176",
      height: "auto"
    }
  };

  const container = {
    items: [],
    style: {
      width: "375",
      height: "100"
    }
  };

  const overlay = {
    style: {
      position: "fixed",
      top: 0,
      left: 0
    },
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

  const values = {
    "page": page,
    "text": text,
    "img": img,
    "container": container,
    "overlay": overlay,
    "button": button
  };

  return values;

}));
//# sourceMappingURL=index.umd.js.map
