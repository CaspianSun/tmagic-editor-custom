(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.magicPresetEvents = factory());
})(this, (function () { 'use strict';

  const page = {
    methods: [
      {
        label: "刷新页面",
        value: "refresh"
      }
    ]
  };

  const img = {
    methods: [],
    events: []
  };

  const container = {
    methods: [],
    events: []
  };

  const overlay = {
    methods: [
      {
        label: "打开遮罩",
        value: "openOverlay"
      },
      {
        label: "关闭遮罩",
        value: "closeOverlay"
      }
    ],
    events: [
      {
        label: "打开遮罩后",
        value: "overlay:open"
      },
      {
        label: "关闭遮罩后",
        value: "overlay:close"
      }
    ]
  };

  const button = {
    methods: [],
    events: []
  };

  const field = {
    methods: [],
    events: []
  };

  const form = {
    methods: [
      {
        label: "提交表单",
        value: "formSubmit"
      },
      {
        label: "表单验证",
        value: "formValidate"
      }
    ],
    events: [
      {
        label: "提交成功后",
        value: "form:submit:succeed"
      },
      {
        label: "提交失败后",
        value: "form:submit:failed"
      }
    ]
  };

  const events = {
    "page": page,
    "img": img,
    "container": container,
    "overlay": overlay,
    "button": button,
    "field": field,
    "form": form
  };

  return events;

}));
//# sourceMappingURL=index.umd.js.map
