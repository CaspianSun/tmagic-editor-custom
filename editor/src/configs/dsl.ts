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
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          },
          name: '滑动容器',
          layout: 'relative',
          current: '0',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: '',
          pageFragments: [
            {
              id: 'page-fragment_8d81ff88'
            },
            {
              id: 'page-fragment_fe02721c'
            },
            {
              id: 'page-fragment_dfa20b38'
            },
            {
              id: 'page-fragment_892963cb'
            }
          ]
        },
        {
          id: 'music_8382ccd5',
          type: 'music',
          style: {
            position: 'absolute',
            left: 'auto',
            top: '58',
            right: '28'
          },
          name: '音乐',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/5c89d6779fab955439.mp3',
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
      id: 'page-fragment_8d81ff88',
      type: 'page-fragment',
      name: 'Swiper第一页',
      layout: 'absolute',
      style: {
        position: 'relative',
        height: '100vh',
        width: '100%',
        top: 0,
        left: 0
      },
      items: [
        {
          id: 'img_670ec3f9',
          type: 'img',
          style: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
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
        },
        {
          id: 'img_33be6e1a',
          type: 'img',
          style: {
            width: '50',
            height: '42',
            position: 'absolute',
            left: '28',
            top: '58'
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/logo@2x.png',
          url: '',
          fit: 'contain',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '渐显',
              value: 'fadeIn',
              duration: 1500,
              delay: 0,
              loop: 1
            }
          ]
        },
        {
          id: 'img_1fea662c',
          type: 'img',
          style: {
            width: '333',
            height: '253',
            position: 'absolute',
            left: '21',
            top: '174',
            right: 'auto'
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/1-2.png',
          url: '',
          fit: 'contain',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '向左进入',
              value: 'fadeInLeft',
              duration: 1500,
              delay: 0,
              loop: 1
            },
            {
              label: '渐显',
              value: 'fadeIn',
              duration: 1500,
              delay: 0,
              loop: 1
            },
            {
              label: '弹入',
              value: 'bounceIn',
              duration: 1500,
              delay: 0,
              loop: 1
            }
          ]
        }
      ]
    },
    {
      id: 'page-fragment_fe02721c',
      type: 'page-fragment',
      name: 'Swiper第二页',
      layout: 'absolute',
      style: {
        position: 'relative',
        height: '100vh',
        width: '100%',
        top: 0,
        left: 0
      },
      items: [
        {
          id: 'img_f70e54b7',
          type: 'img',
          style: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            'z-index': -10
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/2-bg@2x.png',
          url: '',
          fit: 'cover',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: '',
          visible: true
        },
        {
          id: 'img_7901c0fe',
          type: 'img',
          style: {
            width: '333',
            height: 'auto',
            position: 'absolute',
            left: '50%',
            top: '50%',
            right: 'auto',
            transform: 'translateY(-50%) translateX(-50%)',
            'z-index': '10'
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/2-1@2x.png',
          url: '',
          fit: 'cover',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '渐显',
              value: 'fadeIn',
              duration: 1500,
              delay: 0,
              loop: 1
            }
          ],
          visible: true
        },
        {
          id: 'img_6129ca5e',
          type: 'img',
          style: {
            width: '48',
            height: '48px',
            position: 'absolute',
            left: 'auto',
            top: '196',
            right: '29',
            'z-index': '-10'
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/2-2@2x.png',
          url: '',
          fit: 'cover',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '上下晃动',
              value: 'shakeY',
              duration: 2000,
              delay: 0,
              loop: true
            }
          ],
          visible: true
        },
        {
          id: 'img_d0bc682d',
          type: 'img',
          style: {
            width: '98',
            height: '127',
            position: 'absolute',
            left: '0',
            top: '255',
            'z-index': '-10'
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/2-3@2x.png',
          url: '',
          fit: 'cover',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '上下晃动',
              value: 'shakeY',
              duration: 1500,
              delay: 0,
              loop: true
            }
          ],
          visible: true
        }
      ],
      visible: true
    },
    {
      id: 'page-fragment_dfa20b38',
      type: 'page-fragment',
      name: 'Swiper第三页',
      layout: 'absolute',
      style: {
        position: 'relative',
        height: '100vh',
        width: '100%',
        top: '0',
        left: '0',
        background: 'linear-gradient(to top, #230169, #4100d7)'
      },
      items: [
        {
          id: 'img_8a603e68',
          type: 'img',
          style: {
            width: '100%',
            height: '243px',
            position: 'absolute',
            left: '0',
            top: '20'
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/3-1@2x.png',
          url: '',
          fit: 'cover',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '渐显',
              value: 'fadeIn',
              duration: 1500,
              delay: 0,
              loop: 1
            }
          ]
        },
        {
          id: 'img_e0c19b3d',
          type: 'img',
          style: {
            width: '100%',
            height: '54',
            position: 'absolute',
            left: '0',
            top: '188'
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/3-title@2x.png',
          url: '',
          fit: 'contain',
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
          animation: [
            {
              label: '渐显',
              value: 'fadeIn',
              duration: 1500,
              delay: 200,
              loop: 1
            }
          ]
        },
        {
          id: 'img_15453319',
          type: 'img',
          style: {
            width: '224',
            height: 'auto',
            position: 'absolute',
            left: 75.5,
            top: 285,
            right: ''
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/3-2@2x.png',
          url: '',
          fit: 'contain',
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
          animation: [
            {
              label: '弹入',
              value: 'bounceIn',
              duration: 1500,
              delay: 300,
              loop: 1
            }
          ]
        },
        {
          id: 'img_2456daf9',
          type: 'img',
          style: {
            width: '224',
            height: 'auto',
            position: 'absolute',
            left: 76,
            top: 348,
            right: ''
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/3-3@2x.png',
          url: '',
          fit: 'contain',
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
          animation: [
            {
              label: '弹入',
              value: 'bounceIn',
              duration: 1500,
              delay: 400,
              loop: 1
            }
          ]
        },
        {
          id: 'img_fd7464ab',
          type: 'img',
          style: {
            width: '316',
            height: 'auto',
            position: 'absolute',
            left: 29.5,
            top: 431,
            right: ''
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/3-4@2x.png',
          url: '',
          fit: 'contain',
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
          animation: [
            {
              label: '渐显',
              value: 'fadeIn',
              duration: 1500,
              delay: 600,
              loop: 1
            }
          ]
        },
        {
          id: 'img_187cdf7d',
          type: 'img',
          style: {
            width: '244',
            height: 'auto',
            position: 'absolute',
            left: 65.5,
            top: 585,
            right: ''
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/3-5@2x.png',
          url: '',
          fit: 'contain',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '向上进入',
              value: 'fadeInUp',
              duration: 1500,
              delay: 400,
              loop: 1
            }
          ]
        }
      ],
      events: '',
      created: '',
      mounted: '',
      displayConds: [],
      animation: ''
    },
    {
      id: 'page-fragment_892963cb',
      type: 'page-fragment',
      name: 'Swiper第四页',
      layout: 'absolute',
      style: {
        position: 'relative',
        height: '100vh',
        width: '100%',
        top: '0',
        left: '0',
        background: 'linear-gradient(to top, #230169, #4100d7)'
      },
      items: [
        {
          id: 'img_596db8a3',
          type: 'img',
          style: {
            width: '315',
            height: 'auto',
            position: 'absolute',
            left: '30',
            top: '80',
            right: ''
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/4-1@2x.png',
          url: '',
          fit: 'contain',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '渐显',
              value: 'fadeIn',
              duration: 1500,
              delay: 0,
              loop: 1
            }
          ]
        },
        {
          id: 'img_160c0e2c',
          type: 'img',
          style: {
            width: '325',
            height: 'auto',
            position: 'absolute',
            left: 25,
            top: 219,
            right: ''
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/4-2@2x.png',
          url: '',
          fit: 'contain',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '向左进入',
              value: 'fadeInLeft',
              duration: 1500,
              delay: 100,
              loop: 1
            }
          ]
        },
        {
          id: 'img_9f43bf49',
          type: 'img',
          style: {
            width: '325',
            height: 'auto',
            position: 'absolute',
            left: 25,
            top: 341
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/4-3@2x.png',
          url: '',
          fit: 'contain',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '向右进入',
              value: 'fadeInRight',
              duration: 1500,
              delay: 200,
              loop: 1
            }
          ]
        },
        {
          id: 'img_a16953e0',
          type: 'img',
          style: {
            width: '325',
            height: 'auto',
            position: 'absolute',
            left: 25,
            top: 463
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/4-4@2x.png',
          url: '',
          fit: 'contain',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '向左进入',
              value: 'fadeInLeft',
              duration: 1500,
              delay: 300,
              loop: 1
            }
          ]
        },
        {
          id: 'img_72de1478',
          type: 'img',
          style: {
            width: '267',
            height: 'auto',
            position: 'absolute',
            left: 54,
            top: 585,
            right: ''
          },
          name: '图片',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/4-5@2x.png',
          url: '',
          fit: 'contain',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '向上进入',
              value: 'fadeInUp',
              duration: 1500,
              delay: 400,
              loop: 1
            }
          ]
        },
        {
          id: 'img_4e0f52fb',
          type: 'img',
          style: {
            width: '34',
            height: '34',
            position: 'absolute',
            left: 'auto',
            top: '199',
            right: '24'
          },
          name: '背景球1',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/4-6@2x.png',
          url: '',
          fit: 'contain',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '上下晃动',
              value: 'shakeY',
              duration: 1600,
              delay: 0,
              loop: true
            }
          ]
        },
        {
          id: 'img_7820aa61',
          type: 'img',
          style: {
            width: '34',
            height: '34',
            position: 'absolute',
            left: '11',
            top: '327',
            right: 'auto'
          },
          name: '背景球2',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/4-6@2x.png',
          url: '',
          fit: 'contain',
          events: '',
          created: '',
          mounted: '',
          displayConds: [],
          animation: [
            {
              label: '上下晃动',
              value: 'shakeY',
              duration: 2200,
              delay: 0,
              loop: true
            }
          ]
        },
        {
          id: 'img_404146e2',
          type: 'img',
          style: {
            width: '34',
            height: '34',
            position: 'absolute',
            left: 'auto',
            top: '452',
            right: '18'
          },
          name: '背景球3',
          src: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/4-6@2x.png',
          url: '',
          fit: 'contain',
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
          animation: [
            {
              label: '上下晃动',
              value: 'shakeY',
              duration: 1800,
              delay: 0,
              loop: true
            }
          ]
        }
      ],
      events: '',
      created: '',
      mounted: '',
      displayConds: [],
      animation: ''
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
