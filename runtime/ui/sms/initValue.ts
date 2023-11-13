export default {
  style: {
    width: 300
  },
  vantProps: {
    label: '手机号',
    labelWidth: '60px',
    name: 'phone',
    type: 'text',
    size: '',
    placeholder: '请输入手机号',
    maxlength: '11',
    rules: [
      { required: true, message: '请填写您的手机号码！' },
      { pattern: /^1[3456789]d{9}$/, message: '手机号码格式错误！' }
    ],
    border: true,
    colon: false,
    required: false,
    center: true,
    clearable: false
  }
}
