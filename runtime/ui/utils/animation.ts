export type AnimationConfig = {
  delay: number
  duration: number
  loopCount: number
  loop: boolean
  value: string
}
export async function runAnimation(
  $el: HTMLElement,
  animationList: AnimationConfig[] = [],
  isDebug: boolean
) {
  if (!animationList) return
  const animationStr = animationList
    .map((item) => {
      return `${item.value} ${item.duration}s linear ${item.delay}s ${
        isDebug ? 1 : item.loop ? 'infinite' : item.loopCount
      }`
    })
    .join(',')
  $el.style.animation = animationStr
  $el.addEventListener('animationend', () => {
    $el.style.animation = ''
  })
  // let playFn = function (animation: AnimationConfig) {
  //   return new Promise((resolve) => {
  //     $el.style.animationName = animation.value
  //     $el.style.animationDuration = `${animation.duration}s`
  //     $el.style.animationIterationCount = animation.loop
  //       ? isDebug
  //         ? '1'
  //         : 'infinite'
  //       : `${animation.loopCount}`
  //     $el.style.animationDelay = `${animation.delay}s`
  //     $el.style.animationFillMode = 'both'
  //     let resolveFn = function () {
  //       $el.removeEventListener('animationend', resolveFn, false)
  //       $el.removeEventListener('animationcancel', resolveFn, false)
  //       $el.style.animationName = ''
  //       resolve(true)
  //     }
  //     $el.addEventListener('animationend', resolveFn, false)
  //     $el.addEventListener('animationcancel', resolveFn, false)
  //   })
  // }
  // for (let i = 0, len = animationList.length; i < len; i++) {
  //   await playFn(animationList[i])
  // }
}

export const appendAnimation = (com: any) => {}
