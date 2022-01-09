<template>
  <div>
    组件列表
    <el-collapse>
      <el-collapse-item
        v-for="(group, i) in COMP_LIST"
        :title="group.groupName"
        name="1"
        :key="i"
      >
        <div v-for="(comp, ind) in group.compList" :key="ind" @click="add">
          {{ comp.name }}
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import COMP_LIST from "@/constant/compConstant.js";
export default {
  name: "ComponentsWrap",
  data() {
    return {
      COMP_LIST,
    };
  },
  methods: {
    add() {
      const comp = {
        tag: "CpSelector",
        config_json: {
          label: "商户",
          defaultValue: 2,
          "v-model": "cpNum",
        },
      };
      this.$store.commit("ADD_COMP", comp);
      this.$store.commit("ACTIVE_COMP", comp);
    },
  },
};
</script>

<style scoped>
</style>