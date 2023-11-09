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
      label: '提交成功后',
      value: 'form:submit:succeed'
    },
    {
      label: '提交失败后',
      value: 'form:submit:failed'
    }
  ]
}
