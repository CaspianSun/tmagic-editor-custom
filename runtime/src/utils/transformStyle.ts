export const style2Obj = (style: string) => {
  if (typeof style !== "string") {
    return style
  }

  const obj: Record<string, any> = {}
  style.split(";").forEach((element) => {
    if (!element) {
      return
    }

    const items = element.split(":")

    let key = items.shift()
    let value = items.join(":")

    if (!key) return

    key = key.replace(/^\s*/, "").replace(/\s*$/, "")
    value = value.replace(/^\s*/, "").replace(/\s*$/, "")

    key = key
      .split("-")
      .map((v, i) => (i > 0 ? `${v[0].toUpperCase()}${v.substr(1)}` : v))
      .join("")

    obj[key] = value
  })
  return obj
}

export const fillBackgroundImage = (value: string) => {
  if (value && !/^url/.test(value) && !/^linear-gradient/.test(value)) {
    return `url(${value})`
  }
  return value
}

export const isNumber = (value: string) => /^(-?\d+)(\.\d+)?$/.test(value)

export function getTransform(value: Record<string, string>) {
  if (!value) return []

  const transform = Object.entries(value).map(([transformKey, transformValue]) => {
    if (!transformValue.trim()) return ""
    if (transformKey === "rotate" && isNumber(transformValue)) {
      transformValue = `${transformValue}deg`
    }

    return `${transformKey}(${transformValue})`
  })

  const values = transform.join(" ")
  return !values.trim() ? "none" : values
}

export function transformStyle(style: Record<string, any> | string) {
  if (!style) {
    return {}
  }

  let styleObj: Record<string, any> = {}
  const results: Record<string, any> = {}

  if (typeof style === "string") {
    styleObj = style2Obj(style)
  } else {
    styleObj = { ...style }
  }

  const whiteList = ["zIndex", "z-index", "opacity", "fontWeight", "font-weight"]
  Object.entries(styleObj).forEach(([key, value]) => {
    if (key === "backgroundImage") {
      value && (results[key] = fillBackgroundImage(value))
    } else if (key === "transform" && typeof value !== "string") {
      results[key] = getTransform(value)
    } else if (!whiteList.includes(key) && value && /^[-]?[0-9]*[.]?[0-9]*$/.test(value)) {
      results[key] = `${value / 100}rem`
    } else {
      results[key] = value
    }
  })

  return results
}
