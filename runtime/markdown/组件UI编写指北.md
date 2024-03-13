## 组件UI编写指北

配合[文档](https://tencent.github.io/tmagic-editor/docs/index.html)一食用

### 1. 组件结构

例: form组件

```text
form
├── event.ts
├── formConfig.ts
├── index.ts
├── index.vue
└── initValue.ts
```

每个文件都有自己的作用,下面一一介绍

### 2. index.ts

```typescript
import Index from './index.vue'

export { default as config } from './formConfig'
export { default as value } from './initValue'
export { default as event } from './event'

export default Index
```

懂?
<br/>
<span style="background: #000;color:#000">
这个文件主要是为了让 @tmagic/cli 自动生成代码时,进行识别.
</span>

### 3. index.vue

#### 3.1 template

```html
<div>
  <form
    @submit="submit"
    @failed="failed"
    ref="form"
    v-model="props.config.model"
    v-bind="vantProps"
  >
    <UiContainer
      :config="{
          items: config.items
        }"
    >
      <slot></slot>
    </UiContainer>
  </form>
</div>
```

这个也没啥好说的,就是一个普通的vue组件,主要的是 **UiContainer** 这个组件,这个组件是用来渲染子组件的,是编写容器组件需要的.

容器组件的意思大概就是可以将其他组件放进去的组件,这样就可以实现组件的嵌套.

#### 3.2 script

```typescript
import type { MComponent } from '@tmagic/schema'
import useApp from '@ui/utils/useApp'
import { Form } from 'vant'
import type { FormInstance } from 'vant'
import { computed, ref } from 'vue'
import UiContainer from '@ui/container/index.vue'

const form = ref<FormInstance>()

const props = withDefaults(
  defineProps<{
    config: MComponent
    model?: any
  }>(),
  {
    model: () => ({})
  }
)

// const app = inject<Core>('app')
// const node = app?.page?.getNode(props.config.id)

// const submit = (values: Record<string, any>) => {
//   if (app) {
//     app.emit('form:submit', node, values)
//   }
// }
// const failed = (errorInfo: { values: Record<string, any>; errors: Record<string, any>[] }) => {
//   if (app) {
//     app.emit('form:submit:failed', node, errorInfo)
//   }
// }

// const formSubmit = () => {
//   form.value?.submit()
// }
// const formValidate = () => {
//   form.value?.validate()
// }

const vantProps = computed(() => {
  return props.config.vantProps ?? {}
})
const app = useApp(props.config, {
  methods: {
    // formSubmit,
    // formValidate
  }
})
```

props 中的 **config** 这个是用来渲染组件的配置,这个配置是在 formConfig.ts 中定义的.
props 中的 **model** 是在 编辑器中进行定义的,也就是一般用不到

方法的定义会在后面介绍,这里主要是用到了 **useApp** 这个函数,这个函数是用来获取 app 的,app 是一个事件总线,可以用来进行组件间的通信.<br>
必须调用 **useApp** 这个函数来初始化组件.

### 4. formConfig.ts

```typescript
export default [
  {
    name: 'layout',
    text: '容器布局',
    type: 'select',
    defaultValue: 'absolute',
    options: [
      { value: 'absolute', text: '绝对定位' },
      { value: 'relative', text: '流式布局' }
    ],
    onChange: (formState: any, v: string, { model }: any) => {
      if (!model.style) return v
      if (v === 'relative') {
        model.style.height = 'auto'
      } else {
        const el = formState.stage?.renderer?.contentWindow.document.getElementById(model.id)
        if (el) {
          model.style.height = el.getBoundingClientRect().height
        }
      }
    }
  },
  {
    name: 'vantProps',
    labelWidth: '80px',
    items: [
      {
        name: 'labelWidth',
        type: 'data-source-input',
        text: '左侧宽度'
      },
      {
        name: 'labelAlign',
        type: 'select',
        text: '左侧对齐',
        options: [
          {
            text: '左对齐',
            value: 'left'
          },
          {
            text: '居中',
            value: 'center'
          },
          {
            text: '右对齐',
            value: 'right'
          },
          {
            text: '上对齐',
            value: 'top'
          }
        ]
      },
      {
        name: 'inputAlign',
        type: 'select',
        text: '输入对齐',
        options: [
          {
            text: '左对齐',
            value: 'left'
          },
          {
            text: '居中',
            value: 'center'
          },
          {
            text: '右对齐',
            value: 'right'
          }
        ]
      },
      {
        name: 'colon',
        type: 'switch',
        text: '冒号'
      },
      {
        name: 'required',
        type: 'switch',
        text: '必填星号'
      }
    ]
  }
]
```

#### 4.1 name

**name** 是用来定义form中key,这个key会在 **initValue.ts** 中进行初始化,这个key是用来存储form中的值的.

**type** 是用来定义组件的类型的.组件的类型可以去看[表单配置](https://tencent.github.io/tmagic-editor/docs/form-config/fields/text.html)

**text** 是用来定义组件的名称的,这个名称会在编辑器中显示出来.

**layout** 这个是用来定义组件的布局的,一般是容器组件需要,不要改直接复制就行了.

### 5. initValue.ts

```typescript
export default {
  layout: 'absolute',
  style: {
    width: 300,
    height: 100
  },
  items: [], //定义容器时初始化 items
  vantProps: {
    labelWidth: '60px',
    labelAlign: 'left',
    inputAlign: 'left',
    colon: false,
    required: false
  }
}
```

懂?

### 6. event.ts

```typescript
export default {
  methods: [
    {
      label: '提交表单',
      value: 'formSubmit'
    },
    {
      label: '表单验证',
      value: 'formValidate'
    }
  ],
  events: [
    {
      label: '提交表单方法',
      value: 'form:submit'
    },
    {
      label: '提交失败',
      value: 'form:submit:failed'
    }
  ]
}

const app = inject<Core>('app')
const node = app?.page?.getNode(props.config.id)

const submit = (values: Record<string, any>) => {
  if (app) {
    app.emit('form:submit', node, values) //事件名, node, params
  }
}
const failed = (errorInfo: { values: Record<string, any>; errors: Record<string, any>[] }) => {
  if (app) {
    app.emit('form:submit:failed', node, errorInfo)
  }
}

const formSubmit = () => {
  form.value?.submit()
}
const formValidate = () => {
  form.value?.validate()
}

useApp(props.config, {
  methods: {
    formSubmit,
    formValidate
  }
})
```

**methods** 是用来定义组件的方法的,在其他组件中配置动作
![Alt text](<CleanShot 2023-11-13 at 10.38.59@2x.png>)

**events** 是用来定义组件的事件的,选中组件在事件选项卡中进行配置
![图](<CleanShot 2023-11-13 at 10.36.54@2x.png>)

### 7. ui/index.ts

将开发好的组件引入 **ui/index.ts** 中,键就是组件的 **type**
将组件写入 **editor/src/config/componentGroupList.ts** 中 **type** 就是上面的键

## 编写完组件 运行 package.json 中 script下的 build:libs 命令进行打包,传递到编辑器
