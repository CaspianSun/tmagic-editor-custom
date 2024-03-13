import { toCSS, toJSON } from "ts-cssjson"

interface StyleData {
  [key: string]: string | number | boolean
}

/**
 * 将驼峰写法改成xx-xx的css命名写法
 * @param styleKey
 */
export function toLine(styleKey: string) {
  return styleKey.replace(/([A-Z])/g, "-$1").toLowerCase()
}

export function toHump(name: String) {
  return name.replace(/\\-(\w)/g, (all, letter) => {
    return letter.toUpperCase()
  })
}

export function parseToCssCode(styleData: StyleData) {
  const parseStyleData: any = {}
  for (const styleKey in styleData) {
    parseStyleData[toLine(styleKey)] = styleData[styleKey]
  }

  const cssJson = {
    children: {
      "#main": {
        children: {},
        attributes: parseStyleData
      }
    },
    attributes: {}
  }

  return toCSS(cssJson)
}

export function parseToStyleData(cssCode: string) {
  const styleData = {} as StyleData
  try {
    const cssJson = toJSON(cssCode)
    const cssJsonData = cssJson?.children?.["#main"]?.attributes
    for (const key in cssJsonData) {
      styleData[toHump(key)] = cssJsonData[key]
    }
    // 转化key
  } catch (e: any) {
    console.error(e.message)
  }

  return styleData
}
