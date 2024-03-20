export enum WritingModeEnum {
  HORIZONTAL = "水平",
  VERTICAL = "垂直"
}
export const WritingModeObject = {
  [WritingModeEnum.HORIZONTAL]: "horizontal-tb",
  [WritingModeEnum.VERTICAL]: "vertical-rl"
}

export enum FontWeightEnum {
  NORMAL = "常规",
  BOLD = "加粗"
}
export const FontWeightObject = {
  [FontWeightEnum.NORMAL]: "Normal",
  [FontWeightEnum.BOLD]: "Bold"
}

export enum TextAlignEnum {
  LEFT = "左对齐",
  CENTER = "居中",
  RIGHT = "右对齐"
}
export const TextAlignObject = {
  [TextAlignEnum.LEFT]: "left",
  [TextAlignEnum.CENTER]: "center",
  [TextAlignEnum.RIGHT]: "right"
}
