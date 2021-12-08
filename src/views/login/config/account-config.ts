export const rules = {
  name: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/, //5-10位字母或者数字
      message: '账号必须是5~10为字符或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/, //5-10位字母或者数字
      message: '密码必须是3位以上的字母或者数字',
      trigger: 'blur'
    }
  ]
}
