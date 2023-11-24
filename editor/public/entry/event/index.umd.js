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
        label: "提交表单方法",
        value: "form:submit"
      },
      {
        label: "提交失败",
        value: "form:submit:failed"
      }
    ]
  };

  const check_box = {
    methods: [],
    events: []
  };

  const radio = {
    methods: [],
    events: []
  };

  const sms = {
    methods: [],
    events: [
      {
        label: "发送短信",
        value: "sms:send"
      }
    ]
  };

  const swiper = {
    methods: [
      {
        label: "跳转到指定页面",
        value: "slideTo",
        params: [
          {
            label: "指定页面",
            field: "index",
            type: "number",
            value: 0
          },
          {
            label: "切换速度",
            field: "speed",
            type: "number",
            value: 300
          },
          {
            label: "是否启用动画",
            field: "runCallbacks",
            type: "boolean",
            value: true
          }
        ]
      },
      {
        label: "跳转到下一个页面",
        value: "slideNext"
      },
      {
        label: "跳转到上一个页面",
        value: "slidePrev"
      }
    ],
    events: []
  };

  const swiper_slide = {
    methods: [],
    events: []
  };

  const music = {
    methods: [],
    events: []
  };

  const events = {
    "page": page,
    "img": img,
    "container": container,
    "overlay": overlay,
    "button": button,
    "field": field,
    "form": form,
    "check_box": check_box,
    "radio": radio,
    "sms": sms,
    "swiper": swiper,
    "swiper_slide": swiper_slide,
    "music": music
  };

  return events;

}));
//# sourceMappingURL=index.umd.js.map
