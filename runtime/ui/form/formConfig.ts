export default [
  {
    type: "form-field",
    name: "fields",
    field: [
      {
        name: "name",
        label: "字段名",
        type: "display"
      },
      {
        name: "type",
        label: "字段类型",
        type: "hidden"
      },
      {
        name: "fieldCode",
        label: "字段标识",
        type: "hidden"
      },
      {
        name: "isSearch",
        label: "是否参与搜索",
        type: "hidden"
      },
      {
        name: "isRequired",
        label: "是否必填",
        type: "hidden"
      },
      {
        name: "disabled",
        label: "是否禁用",
        type: "hidden"
      },
      {
        name: "isShow",
        label: "是否显示",
        type: "hidden"
      },
      {
        name: "placeholder",
        label: "占位提示",
        type: "hidden"
      },
      {
        name: "remark",
        label: "备注",
        type: "hidden"
      }
    ]
  }
]
