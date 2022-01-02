<template>
  <div>
    组件配置
    <component :is="configName" :configJson="config_json" />
  </div>
</template>

<script>
import CpSelectorConfig from "@/compConfig/CpSelectorConfig";
import { mapGetters } from "vuex";
export default {
  name: "ConfigWrap",
  components: {
    CpSelectorConfig,
  },
  data() {
    return {
      configName: "CpSelectorConfig",
    };
  },
  computed: {
    ...mapGetters(["page", "activeComp"]),
    config_json() {
      return this.activeComp.config_json;
    },
  },
};
</script>

<style scoped>
</style>