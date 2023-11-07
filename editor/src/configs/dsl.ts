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
        height: '100vh'
      },
      items: [
        {
          id: 'text_fdbbc093',
          type: 'text',
          style: {
            width: '100',
            height: 'auto',
            position: 'absolute',
            top: 146,
            left: 133
          },
          name: 'Button',
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
            left: 93,
            width: '176',
            height: 'auto',
            top: 283
          },
          name: '图片',
          src: 'https://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg',
          url: '',
          fit: 'contain',
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
              id: 'text_87986849',
              type: 'text',
              style: {
                width: '100',
                height: 'auto',
                position: 'absolute',
                top: 91,
                left: 128,
                color: '#ffffff'
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
              animation: ''
            },
            {
              id: 'container_c1cce01e',
              type: 'container',
              layout: 'absolute',
              style: {
                width: 266,
                height: 282,
                position: 'absolute',
                top: 194,
                left: 54,
                backgroundColor: '#fff',
                borderRadius: '10px'
              },
              name: '组',
              items: [],
              events: '',
              created: '',
              mounted: '',
              displayConds: [],
              animation: ''
            }
          ]
        }
      ]
    }
  ],
  codeBlocks: {},
  dataSources: []
}
