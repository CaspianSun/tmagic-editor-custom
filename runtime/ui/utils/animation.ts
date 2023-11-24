import { isArray } from 'lodash-es'

export type AnimationConfig = {
  delay: number
  duration: number
  loopCount: number
  loop: boolean
  value: string
}

export async function initAnimation() {}

export async function runAnimation($el: HTMLElement, animationList: AnimationConfig[]) {
  if (!animationList || animationList.length === 0) return
  const animationStr = animationList
    .map((item) => `${item.value} ${item.duration}s linear ${item.delay}s 1`)
    .join(',')
  $el.style.animation = animationStr
  $el.addEventListener('animationend', () => ($el.style.animation = ''))
}

export async function initSwiperAnimation($el: HTMLElement, animationList: AnimationConfig[]) {
  if (!isArray(animationList) || (isArray(animationList) && animationList.length == 0)) return
  const animationStr = animationList
    .map((item) => `${item.value} ${item.duration}s linear ${item.delay}s 1`)
    .join(',')
  $el.style.animation = animationStr
  $el.classList.add('swiper-animation')
  $el.setAttribute('swiper-animation', animationStr)
}

export const swiperAnimateCache = () => {
  const allBoxes: any = window.document.documentElement.querySelectorAll('.swiper-animation')
  console.log('allBoxes', allBoxes)
  for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].style.visibility = 'hidden'
    allBoxes[i].style.animation = ''
  }
}

export const swiperAnimate = (a: any) => {
  swiperAnimateCache()
  const allBoxes = a.slides[a.activeIndex]?.querySelectorAll('.swiper-animation')
  for (let i = 0; i < allBoxes.length; i++) {
    const ani = allBoxes[i].getAttribute('swiper-animation')
    allBoxes[i].style.animation = ani
    allBoxes[i].style.visibility = 'visible'
  }
}
