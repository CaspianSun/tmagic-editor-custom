export default {
  type: 'app',
  id: '1',
  items: [
    {
      type: 'page',
      id: '2',
      name: 'index',
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
            right: ''
          },
          name: '文本',
          text: '请输入文本内容',
          multiple: true,
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '渐显',
              value: 'fadeIn',
              duration: 5,
              delay: 0,
              loopCount: 1,
              loop: false
            }
          ]
        },
        {
          id: 'img_3fe8061f',
          type: 'img',
          style: {
            position: 'absolute',
            left: 99.5,
            width: '176',
            height: 'auto',
            top: 295,
            right: ''
          },
          name: '图片',
          src: 'https://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg',
          url: '',
          fit: 'contain',
          animation: [
            {
              label: '向左进入',
              value: 'fadeInLeft',
              duration: 1,
              delay: 0,
              loopCount: 1,
              loop: false
            }
          ],
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
        },
        {
          id: 'button_62cecca4',
          type: 'button',
          style: {
            position: 'absolute',
            top: 462,
            left: 135,
            width: 107,
            height: 30,
            right: ''
          },
          name: '按钮',
          vantProps: {
            text: '按钮',
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
          displayConds: [],
          animation: [
            {
              label: '向右进入',
              value: 'fadeInRight',
              duration: 1,
              delay: 0,
              loopCount: 1,
              loop: false
            }
          ]
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
                display: 'inline-block',
                right: ''
              },
              name: '组',
              items: [],
              events: '',
              created: '',
              mounted: '',
              displayConds: [],
              animation: ''
            },
            {
              id: 'text_87986849',
              type: 'text',
              style: {
                width: '100',
                height: 'auto',
                position: 'absolute',
                top: 326,
                left: 137.5,
                color: '#000000',
                right: ''
              },
              name: '文字',
              text: '请输入文本内容',
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
              displayConds: [],
              animation: '',
              visible: true
            },
            {
              id: 'button_e77ec6a2',
              type: 'button',
              style: {
                position: 'absolute',
                top: 406,
                left: 155.5,
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
                  name: 'magic:common:events:click:capture',
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
              displayConds: [],
              animation: ''
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
          displayConds: [],
          animation: ''
        },
        {
          id: 'field_eea3f47a',
          type: 'field',
          style: {
            width: 300,
            position: 'absolute',
            top: 201,
            left: 38,
            right: '',
            'border-radius': 10,
            overflow: 'hidden'
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
            clearable: false
          },
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '渐显',
              value: 'fadeIn',
              duration: 1,
              delay: 0,
              loopCount: 1,
              loop: false
            }
          ]
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
