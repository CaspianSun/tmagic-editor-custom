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
        height: '800'
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
            left: 133,
            right: '',
            bottom: '',
            borderWidth: '0',
            borderColor: '',
            borderStyle: 'none',
            backgroundImage: '',
            backgroundColor: '',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            color: '',
            fontSize: '',
            fontWeight: '',
            transform: {
              rotate: '',
              scale: ''
            }
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
          id: 'img_31bdd7fe',
          type: 'img',
          style: {
            position: 'absolute',
            left: 93,
            width: '176',
            height: 'auto',
            top: 306,
            right: '',
            bottom: '',
            borderWidth: '0',
            borderColor: '',
            borderStyle: 'none',
            backgroundImage: '',
            backgroundColor: '',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            color: '',
            fontSize: '',
            fontWeight: '',
            transform: {
              rotate: '',
              scale: ''
            }
          },
          name: '图片',
          src: 'https://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg',
          url: '',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '向左进入',
              value: 'fadeInLeft',
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
  codeBlocks: {},
  dataSources: []
}
