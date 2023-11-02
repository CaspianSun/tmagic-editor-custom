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

  const qsText = {
    type: "qs-text",
    text: "请输入文本内容",
    multiple: true,
    style: {
      width: "100",
      height: "auto"
    }
  };

  const values = {
    "page": page,
    "qs-text": qsText
  };

  return values;

}));
//# sourceMappingURL=index.umd.js.map
