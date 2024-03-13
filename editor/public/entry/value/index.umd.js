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

  const qr_code = {
    text: "text",
    style: {
      position: "absolute",
      left: "57",
      width: "176",
      height: "176"
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
    fragments: []
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
      height: "812"
    }
  };

  const pageFragmentContainer = {
    style: {
      width: "",
      height: ""
    }
  };

  const form = {
    style: {}
  };

  const values = {
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

  return values;

}));
//# sourceMappingURL=index.umd.js.map
