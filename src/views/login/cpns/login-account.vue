<template>
  <div>
    <el-form :model="account" ref="formRef" :rules="rules">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import localCache from '../../../utils/cache'
import { useStore } from 'vuex'

import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const store = useStore()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        // 判断是否通过表单验证
        if (valid) {
          // 判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存保存密码
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            // 没选择记住密码则删除
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }

          // 开始进行登录验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
