<template>
  <div>
    组件列表
    <div @click="add">商户下拉框</div>
  </div>
</template>

<script>
export default {
  name: "ComponentsWrap",
  data() {
    return {};
  },
  methods: {
    add() {
      this.$store.commit("ADD_COMP", {
        tag: "CpSelector",
        config_json: {
          label: "商户",
          defaultValue: 2,
        },
      });
    },
  },
};
</script>

<style scoped>
</style>