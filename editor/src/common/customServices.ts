import { propsService, editorService } from '@tmagic/editor'
import type { MContainer, MNode } from '@tmagic/schema'
export const useCustomService = () => {
  editorService.usePlugin({
    beforeDoAdd: (config: MNode, parent?: MContainer | null) => {
      if (config.type === 'overlay') {
        config.style = {
          ...config.style,
          left: 0,
          top: 0
        }

        return [config, editorService.get('page')]
      }

      return [config, parent]
    },
    beforeDragTo(config: MNode, targetParent: MContainer, targetIndex: number) {
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
