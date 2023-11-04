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
}

export const appendAnimation = (com: any) => {}
