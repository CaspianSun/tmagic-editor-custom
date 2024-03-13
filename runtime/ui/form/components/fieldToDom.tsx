import { defineComponent, ref, type PropType } from "vue"
import { Field, CheckboxGroup, Checkbox, RadioGroup, Radio, Switch, Uploader } from "vant"
import Picker from "./Picker.vue"
import DatePicker from "./DatePicker.vue"
import TimePicker from "./TimePicker.vue"
import Upload from "./Upload.vue"
import AreaPicker from "./AreaPicker.vue"

export enum FieldType {
  "输入框" = 1,
  "数字输入框",
  "选择框",
  "日期选择器",
  "时间选择器",
  "复选框",
  "单选框",
  "开关",
  "图片上传",
  "日期时间选择器", //
  "地区选择",
  "颜色" //
}

export const renderLabel = (field: defs.h5.Field) => {
  return <div>{field.name}</div>
}

const renderContent = (field: defs.h5.Field, form: Record<string, any>) => {
  const label = () => renderLabel(field)
  switch (field.type) {
    case FieldType.输入框:
      return (
        <Field v-model={[form[field.fieldCode]]} placeholder='请输入'>
          {{ label }}
        </Field>
      )
    case FieldType.数字输入框:
      return (
        <Field v-model={[form[field.fieldCode]]} placeholder='请输入' type='number'>
          {{ label }}
        </Field>
      )
    case FieldType.选择框:
      return (
        <Picker v-model={[form[field.fieldCode]]} placeholder='请选择' field={field}>
          {{ label }}
        </Picker>
      )
    case FieldType.日期选择器:
      return (
        <DatePicker v-model={[form[field.fieldCode]]} placeholder='请选择' field={field}>
          {{ label }}
        </DatePicker>
      )
    case FieldType.时间选择器:
      return (
        <TimePicker v-model={[form[field.fieldCode]]} placeholder='请选择' field={field}>
          {{ label }}
        </TimePicker>
      )
    case FieldType.复选框:
      return (
        <Field name='checkboxGroup'>
          {{
            label,
            input: () => (
              <CheckboxGroup v-model={[form[field.fieldCode]]} direction='horizontal' shape='square'>
                {field.dictionary.map((option) => (
                  <div class={"pb-10px"}>
                    <Checkbox name={option.name} key={option.key}>
                      {option.name}
                    </Checkbox>
                  </div>
                ))}
              </CheckboxGroup>
            )
          }}
        </Field>
      )
    case FieldType.单选框:
      return (
        <Field name='radio'>
          {{
            label,
            input: () => (
              <RadioGroup v-model={[form[field.fieldCode]]} direction='horizontal'>
                {field.dictionary.map((option) => (
                  <div class={"pb-10px"}>
                    <Radio name={option.name} key={option.key}>
                      {option.name}
                    </Radio>
                  </div>
                ))}
              </RadioGroup>
            )
          }}
        </Field>
      )
    case FieldType.开关:
      return <Field>{{ label, input: () => <Switch v-model={[form[field.fieldCode]]} size='24' /> }}</Field>
    case FieldType.图片上传:
      return <Upload v-model={[form[field.fieldCode]]}>{{ label }}</Upload>
    case FieldType.地区选择:
      return (
        <AreaPicker v-model={[form[field.fieldCode]]} placeholder='请选择'>
          {{ label }}
        </AreaPicker>
      )
    default:
      return <div></div>
  }
}

export const FieldToDom = defineComponent({
  props: {
    fields: {
      type: Object as PropType<defs.h5.Field[]>,
      required: true
    },
    form: {
      type: Object as PropType<Record<string, any>>,
      required: true
    }
  },
  setup(props) {
    return () => (
      <div class={"w-full"}>
        {props.fields.map((field) => {
          return renderContent(field, props.form)
        })}
      </div>
    )
  }
})
