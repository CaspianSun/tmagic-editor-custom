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

  const music = {
    methods: [],
    events: []
  };

  const form = {
    methods: [],
    events: []
  };

  const events = {
    "page": page,
    "img": img,
    "container": container,
    "overlay": overlay,
    "button": button,
    "swiper": swiper,
    "music": music,
    "form": form
  };

  return events;

}));
//# sourceMappingURL=index.umd.js.map
