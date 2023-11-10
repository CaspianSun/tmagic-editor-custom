export default {
  type: 'app',
  id: '1',
  items: [
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
        backgroundColor: '#eff2f5'
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
            hairline: false,
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
                backgroundColor: '#fff',
                borderRadius: '10px',
                display: 'block',
                right: '',
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
                    hairline: false,
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
          events: [
            {
              name: 'overlay:open',
              actions: [
                {
                  actionType: 'code',
                  to: '',
                  method: '',
                  codeId: 'code_4408',
                  dataSourceMethod: '',
                  params: {}
                }
              ]
            }
          ],
          created: '',
          mounted: '',
          animation: ''
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
            borderRadius: 0,
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
                borderRadio: 10,
                overflow: 'hidden',
                overflo: 'hidden',
                right: '',
                borderRadios: 10,
                borderRadius: 10
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
                    label: '输入框',
                    labelWidth: '50px',
                    name: 'input',
                    type: 'text',
                    size: '',
                    placeholder: '请输入文字',
                    maxlength: '',
                    border: true,
                    colon: false,
                    required: false,
                    center: false,
                    clearable: false,
                    rule: '[{ "required": true, "message": "请输入文字" }]'
                  },
                  events: '',
                  created: '',
                  mounted: '',
                  animation: [],
                  displayConds: []
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
                    labelWidth: '50px',
                    name: 'checkbox',
                    size: '',
                    rule: '[]',
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
                    labelWidth: '50px',
                    name: 'radio',
                    size: '',
                    rule: '[]',
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
                hairline: false,
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
                  codeId: 'code_4408',
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
                  codeId: 'code_4408',
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
      name: '控制台输出1',
      desc: '控制台输出1',
      timing: '',
      params: [],
      content: () => {
        console.log(1)
      }
    }
  },
  dataSources: []
}
