import anime from 'animejs/lib/anime.es.js'
import effect from './effect'

export const handleAnimation = (
  element: HTMLElement | null,
  config: (anime.AnimeAnimParams & {
    value: string
  })[]
) => {
  var tl = anime.timeline()
  for (let item of config) {
    const animeAnimParams = effect[item.value as keyof typeof effect]?.(element, item)
    if (animeAnimParams) tl.add(animeAnimParams)
  }
}
