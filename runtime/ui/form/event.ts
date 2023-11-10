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
