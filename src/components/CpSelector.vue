<template>
  <el-form-item :label="config_json.label">
    <el-select v-model="config_json.defaultValue" placeholder="">
      <el-option
        v-for="item in options"
        :key="item.cpNum"
        :label="item.name"
        :value="item.cpNum"
      >
      </el-option>
    </el-select>
  </el-form-item>
</template>
  
<script>
export default {
  name: "CpSelector",
  props: {
    config_json: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      options: [
        { name: "小店1", cpNum: 1 },
        { name: "小店2", cpNum: 2 },
        { name: "小店3", cpNum: 3 },
      ],
      model: "",
    };
  },
};
</script>
  
<style scoped>
</style>
  