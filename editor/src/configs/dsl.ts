//@ts-nocheck
export default {
  type: 'app',
  id: '1',
  items: [
    {
      id: 'page_0a1736ad',
      type: 'page',
      layout: 'absolute',
      style: {
        height: 'auto',
        'min-height': '100%',
        'background-color': '#eff2f5',
        position: 'relative',
        top: 0,
        left: 0
      },
      name: 'swiper页',
      items: [
        {
          id: 'swiper_219b3e75',
          type: 'swiper',
          style: {
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          },
          name: '滑动容器',
          layout: 'relative',
          items: [
            {
              id: 'swiper_slide_bf9951a9',
              type: 'swiper_slide',
              style: {
                position: 'relative',
                height: '100vh',
                width: '100%',
                top: 0,
                left: 0
              },
              name: '滑动盒子',
              layout: 'absolute',
              items: [
                {
                  id: 'img_670ec3f9',
                  type: 'img',
                  style: {
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    'z-index': '-10'
                  },
                  name: '图片',
                  src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/1-bg.png',
                  url: '',
                  fit: 'cover',
                  events: '',
                  created: '',
                  mounted: '',
                  displayConds: [],
                  animation: ''
                }
              ]
            },
            {
              id: 'swiper_slide_fe02721c',
              type: 'swiper_slide',
              style: {
                position: 'relative',
                height: '100vh',
                width: '100%',
                top: 0,
                left: 0
              },
              name: '滑动盒子',
              layout: 'absolute',
              items: []
            }
          ],
          current: '0',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: ''
        }
      ],
      title: '',
      events: '',
      created: '',
      mounted: '',
      displayConds: [],
      animation: ''
    },
    {
      type: 'page',
      id: '2',
      name: '首页',
      title: '',
      layout: 'absolute',
      style: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        'background-color': '#eff2f5'
      },
      items: [
        {
          id: 'text_fdbbc093',
          type: 'text',
          style: {
            width: '100',
            height: 'auto',
            position: 'absolute',
            top: 131,
            left: 137.5,
            right: '',
            textAlign: 'center'
          },
          name: '文本',
          text: '演示',
          multiple: true,
          events: '',
          created: '',
          mounted: '',
          animation: [
            {
              label: '渐显',
              value: 'fadeIn',
              duration: 5,
              delay: 0,
              loopCount: 1,
              loop: false
            }
          ],
          displayConds: []
        },
        {
          id: 'button_62cecca4',
          type: 'button',
          style: {
            position: 'absolute',
            top: 656,
            left: 135,
            width: 107,
            height: 30,
            right: ''
          },
          name: '按钮',
          vantProps: {
            text: '打开遮罩',
            type: 'primary',
            size: 'small',
            plain: true,
            hairline: true,
            round: false
          },
          events: [
            {
              name: 'magic:common:events:click',
              actions: [
                {
                  actionType: 'comp',
                  to: 'overlay_c4147a13',
                  method: 'openOverlay',
                  codeId: '',
                  dataSourceMethod: ''
                }
              ]
            }
          ],
          created: '',
          mounted: '',
          animation: [
            {
              label: '向上进入',
              value: 'fadeInUp',
              duration: 1,
              delay: 0,
              loopCount: 1,
              loop: false
            }
          ],
          displayConds: []
        },
        {
          id: 'overlay_c4147a13',
          type: 'overlay',
          style: {
            position: 'absolute',
            top: 0,
            left: 0
          },
          name: '遮罩',
          items: [
            {
              id: 'container_c1cce01e',
              type: 'container',
              layout: 'absolute',
              style: {
                width: 266,
                height: 282,
                position: 'absolute',
                top: 213,
                left: 55,
                'background-color': '#fff',
                'border-radius': '10px',
                overflow: 'hidden'
              },
              name: '组',
              items: [
                {
                  id: 'text_87986849',
                  type: 'text',
                  style: {
                    width: '100',
                    height: 'auto',
                    position: 'absolute',
                    top: 170,
                    left: 83,
                    color: '#000000',
                    right: '',
                    textAlign: 'center'
                  },
                  name: '文字',
                  text: '这里是弹窗',
                  multiple: true,
                  events: '',
                  created: {
                    hookType: 'code',
                    hookData: []
                  },
                  mounted: {
                    hookType: 'code',
                    hookData: []
                  },
                  animation: '',
                  visible: true,
                  displayConds: []
                },
                {
                  id: 'button_e77ec6a2',
                  type: 'button',
                  style: {
                    position: 'absolute',
                    top: 224,
                    left: 101,
                    right: ''
                  },
                  name: '按钮',
                  vantProps: {
                    text: '关闭弹窗',
                    type: 'warning',
                    size: 'small',
                    plain: true,
                    hairline: true,
                    round: false
                  },
                  events: [
                    {
                      name: 'magic:common:events:click',
                      actions: [
                        {
                          actionType: 'comp',
                          to: 'overlay_c4147a13',
                          method: 'closeOverlay',
                          codeId: '',
                          dataSourceMethod: ''
                        }
                      ]
                    }
                  ],
                  created: {
                    hookType: 'code',
                    hookData: []
                  },
                  mounted: {
                    hookType: 'code',
                    hookData: []
                  },
                  animation: ''
                },
                {
                  id: 'img_3fe8061f',
                  type: 'img',
                  style: {
                    position: 'absolute',
                    left: 0,
                    width: 266,
                    height: 136,
                    top: 0,
                    right: 0
                  },
                  name: '图片',
                  src: 'https://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg',
                  url: '',
                  fit: 'cover',
                  animation: [],
                  events: '',
                  created: {
                    hookType: 'code',
                    hookData: []
                  },
                  mounted: {
                    hookType: 'code',
                    hookData: []
                  },
                  displayConds: []
                }
              ],
              events: '',
              created: '',
              mounted: '',
              animation: '',
              displayConds: []
            }
          ],
          visible: true,
          events: [],
          created: '',
          mounted: '',
          animation: '',
          displayConds: []
        },
        {
          id: 'form_24b69e11',
          type: 'form',
          layout: 'absolute',
          style: {
            width: 300,
            height: 382,
            position: 'absolute',
            top: 213,
            left: 37.5,
            right: '',
            'border-radius': 0,
            overflow: 'auto'
          },
          name: '表单容器',
          items: [
            {
              id: 'container_7ddba02b',
              type: 'container',
              layout: 'relative',
              style: {
                position: 'absolute',
                width: 300,
                height: 'auto',
                top: 0,
                left: 0,
                overflow: 'hidden',
                right: '',
                'border-radius': 10
              },
              name: '组',
              items: [
                {
                  id: 'field_eea3f47a',
                  type: 'field',
                  style: {
                    width: 300,
                    position: 'relative',
                    top: 0,
                    left: 0,
                    right: 'auto',
                    overflow: 'hidden',
                    bottom: 'auto'
                  },
                  name: '输入框',
                  model: '',
                  vantProps: {
                    label: '用户名',
                    labelWidth: '60px',
                    name: 'username',
                    type: 'text',
                    size: '',
                    placeholder: '请输入用户名',
                    maxlength: '',
                    border: true,
                    colon: false,
                    required: true,
                    center: false,
                    clearable: false,
                    rules: [
                      {
                        required: true,
                        message: '请输入用户名'
                      }
                    ]
                  },
                  events: '',
                  created: '',
                  mounted: '',
                  animation: [],
                  displayConds: []
                },
                {
                  id: 'field_1dbde502',
                  type: 'field',
                  style: {
                    width: 300,
                    position: 'relative',
                    top: 0,
                    left: 0
                  },
                  name: '输入框',
                  vantProps: {
                    label: '密码',
                    labelWidth: '60px',
                    name: 'password',
                    type: 'password',
                    size: '',
                    placeholder: '请输入密码',
                    maxlength: '',
                    rules: [
                      {
                        required: true,
                        message: '请输入密码'
                      }
                    ],
                    border: true,
                    colon: false,
                    required: true,
                    center: false,
                    clearable: false
                  },
                  events: '',
                  created: '',
                  mounted: '',
                  displayConds: [],
                  animation: ''
                },
                {
                  id: 'sms_45c56035',
                  type: 'sms',
                  style: {
                    width: 300,
                    position: 'relative',
                    top: 0,
                    left: 0
                  },
                  name: '验证码',
                  vantProps: {
                    label: '手机号',
                    labelWidth: '60px',
                    name: 'phone',
                    type: 'text',
                    size: '',
                    placeholder: '请输入手机号',
                    maxlength: '11',
                    rules: [
                      {
                        required: true,
                        message: '请填写您的手机号码！'
                      },
                      {
                        pattern: new RegExp('^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\\d{8}$', ''),
                        message: '手机号码格式错误！'
                      }
                    ],
                    border: true,
                    colon: false,
                    required: false,
                    center: true,
                    clearable: false
                  },
                  events: '',
                  created: '',
                  mounted: '',
                  displayConds: [],
                  animation: ''
                },
                {
                  id: 'check_box_ac51b0ea',
                  type: 'check_box',
                  style: {
                    width: 300,
                    position: 'relative',
                    top: 0,
                    left: 0,
                    right: 'auto',
                    bottom: 'auto'
                  },
                  name: '复选框',
                  options: [
                    {
                      label: '选项1',
                      name: '1',
                      disabled: false,
                      shape: 'square'
                    },
                    {
                      label: '选项2',
                      name: '2',
                      disabled: true,
                      shape: 'square'
                    }
                  ],
                  vantProps: {
                    label: '复选框',
                    labelWidth: '60px',
                    name: 'checkbox',
                    size: '',
                    rules: [],
                    border: true,
                    colon: false,
                    required: false,
                    center: false
                  },
                  events: '',
                  created: '',
                  mounted: '',
                  displayConds: [],
                  animation: ''
                },
                {
                  id: 'radio_846b11c5',
                  type: 'radio',
                  style: {
                    width: 300,
                    position: 'relative',
                    top: 0,
                    left: 0,
                    height: 'auto',
                    right: 'auto',
                    bottom: 'auto'
                  },
                  name: '单选框',
                  options: [
                    {
                      label: '选项1',
                      name: '1',
                      disabled: false,
                      shape: 'round'
                    },
                    {
                      label: '选项2',
                      name: '2',
                      disabled: false,
                      shape: 'round'
                    }
                  ],
                  vantProps: {
                    label: '单选框',
                    labelWidth: '60px',
                    name: 'radio',
                    size: '',
                    rules: [],
                    border: true,
                    colon: false,
                    required: false,
                    center: false
                  },
                  events: '',
                  created: '',
                  mounted: '',
                  displayConds: [],
                  animation: ''
                }
              ],
              events: '',
              created: '',
              mounted: '',
              displayConds: [],
              animation: ''
            },
            {
              id: 'button_bbdb0b8b',
              type: 'button',
              style: {
                position: 'absolute',
                top: 300,
                left: 76,
                right: '',
                width: '150'
              },
              name: '按钮',
              vantProps: {
                text: '提交',
                type: 'primary',
                size: 'small',
                plain: false,
                hairline: true,
                round: false
              },
              events: [
                {
                  name: 'magic:common:events:click',
                  actions: [
                    {
                      actionType: 'comp',
                      to: 'form_24b69e11',
                      method: 'formSubmit',
                      codeId: '',
                      dataSourceMethod: ''
                    }
                  ]
                }
              ],
              created: {
                hookType: 'code',
                hookData: []
              },
              mounted: {
                hookType: 'code',
                hookData: []
              },
              animation: '',
              displayConds: []
            }
          ],
          vantProps: {
            labelWidth: '50px',
            labelAlign: 'left',
            inputAlign: 'left',
            colon: false,
            required: false
          },
          events: [
            {
              name: 'form:submit',
              actions: [
                {
                  actionType: 'code',
                  to: '',
                  method: '',
                  codeId: 'code_6793',
                  dataSourceMethod: '',
                  params: {}
                }
              ]
            },
            {
              name: 'form:submit:failed',
              actions: [
                {
                  actionType: 'code',
                  to: '',
                  method: '',
                  codeId: 'code_6793',
                  dataSourceMethod: '',
                  params: {}
                }
              ]
            }
          ],
          created: '',
          mounted: '',
          animation: [
            {
              label: '渐显',
              value: 'fadeIn',
              duration: 1,
              delay: 0,
              loopCount: 1,
              loop: false
            }
          ],
          displayConds: []
        }
      ]
    }
  ],
  codeBlocks: {
    code_4408: {
      name: 'axios测试',
      desc: 'axios测试',
      timing: '',
      params: [],
      content: () => {
        axios({
          method: 'get',
          url: 'https://dog.ceo/api/breeds/image/random'
        })
          .then((response) => {
            console.log(response, 'success')
          })
          .catch((error) => console.log(error, 'error'))
      }
    },
    code_6793: {
      name: '提交表单',
      desc: '',
      timing: '',
      params: [],
      content: (e) => {
        console.log(e)
      }
    },
    code_4833: {
      name: '跳转首页',
      desc: '',
      timing: '',
      params: [],
      content: ({ app, params }) => {
        const url = window.location.href
        const newUrl = url.replace(/(page=)[^&]+/, '$12')
        window.location.href = newUrl
      }
    }
  },
  dataSources: []
}
