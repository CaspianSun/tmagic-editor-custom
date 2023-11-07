import { propsService } from '@tmagic/editor'

export const useCustomProps = () => {
  propsService.usePlugin({
    afterFillConfig(result: string, config: any) {
      return result
    },
    afterGetPropsConfig(result: any, config: any) {
      const props = result[0].items
      const animation = {
        title: '动画',
        items: [
          {
            src: 'component',
            name: 'animation',
            type: 'animation'
          }
        ]
      }
      props.push(animation)
      const styleIndex = props.findIndex((item: any) => item.title === '样式')
      if (styleIndex > 0) {
        props[styleIndex] = {
          title: '样式',
          items: [
            {
              src: 'component',
              name: 'style',
              type: 'style'
            }
          ]
        }
      }

      return result
    }
  })
}

export default useCustomProps
