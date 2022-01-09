<template>
  <div>
    <el-form ref="form" :model="configJson" label-width="80px">
      <el-form-item label="标签">
        <el-input v-model="configJson.label"></el-input>
      </el-form-item>
      <el-form-item label="v-model 绑定字段">
        <el-input v-model="configJson['v-model']"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CpSelectorConfig",
  props: {
    configJson: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      form: {},
    };
  },
};
</script>

<style scoped>
</style>
