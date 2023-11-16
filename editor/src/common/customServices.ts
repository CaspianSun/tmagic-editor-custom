import { propsService, editorService } from '@tmagic/editor'
import type { MContainer, MNode } from '@tmagic/schema'
export const useCustomService = () => {
  editorService.usePlugin({
    beforeDoAdd: (config: MNode, parent?: MContainer | null) => {
      switch (config.type) {
        case 'overlay':
          config.style = {
            ...config.style,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }
          break
        case 'swiper':
          if (parent?.type === 'swiper') return false
          config.style = {
            ...config.style,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }
          break
        case 'swiper_slide':
          if (parent?.type !== 'swiper') return false
          config.style = {
            ...config.style,
            position: 'relative',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh'
          }
          break
      }

      return [config, parent]
    },
    beforeDragTo(config: MNode, targetParent: MContainer, targetIndex: number) {
      if (targetParent.items.findIndex((item) => item.id === config.id) > -1) {
        return [config, targetParent, targetIndex]
      }
      switch (config.type) {
        case 'overlay':
        case 'swiper':
          return [config, targetParent, targetIndex]
      }
      if (targetParent.layout == 'relative') {
        config.style = {
          ...config.style,
          position: 'relative',
          left: 0,
          top: 0
        }
      } else {
        config.style = {
          ...config.style,
          position: 'absolute',
          left: 0,
          top: 0
        }
      }
      return [config, targetParent, targetIndex]
    }
  })
  propsService.usePlugin({
    afterFillConfig(result: string) {
      return result
    },
    afterGetPropsConfig(result: any) {
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

export default useCustomService
