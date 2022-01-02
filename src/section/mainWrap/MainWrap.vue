<template>
  <div class="page-main">
    <el-form ref="form" label-width="80px" :inline="true">
      <div
        class="comp-wrap"
        v-for="(comp, i) in page"
        @click="onActiveComp(comp)"
        :key="i"
      >
        <component :is="comp.tag" :config_json="comp.config_json" />
      </div>
    </el-form>
  </div>
</template>

<script>
import CpSelector from "@/components/CpSelector";
import { mapGetters } from "vuex";
export default {
  name: "MainWrap",
  components: { CpSelector },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["page"]),
  },
  methods: {
    onActiveComp(comp) {
      console.log(comp);
      this.$store.commit("ACTIVE_COMP", comp);
    },
  },
};
</script>

<style scoped lang = 'less'>
.page-main {
  height: 100%;
  border: 1px solid red;
  .comp-wrap {
    display: inline-block;
    padding: 10px;
    &:hover {
      border: 2px dotted royalblue;
    }
  }
}
</style>
