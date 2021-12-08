<template>
  <div>
    <el-form>
      <el-form-item label="手机">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="phone.code" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })

    return {
      phone
    }
  }
})
</script>

<style scoped></style>
