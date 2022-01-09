<template>
  <div>
    组件配置
    <component :is="configName" :configJson="config_json" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ConfigWrap",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["page", "activeComp"]),
    configName() {
      if (this.activeComp.tag) {
        return `${this.activeComp.tag}Config`;
      } else {
        return "";
      }
    },
    config_json() {
      return this.activeComp.config_json;
    },
  },
};
</script>

<style scoped>
</style>