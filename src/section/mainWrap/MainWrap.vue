<template>
  <div class="page-main">
    <el-button type="primary" @click="viewPage">view page</el-button>
    <el-button type="primary" @click="buildVue">生成 vue 页面</el-button>
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
import { mapGetters } from "vuex";
import { beautifierConf } from "@/constant/beautifierConstant";
import { vueTemplate, makeUpHtml } from "@/generator/html.js";
import beautifier from "js-beautify";
export default {
  name: "MainWrap",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["page"]),
  },
  mounted() {},
  methods: {
    onActiveComp(comp) {
      console.log(comp);
      this.$store.commit("ACTIVE_COMP", comp);
    },
    viewPage() {
      console.log(this.page);
    },
    buildVue() {
      console.log(this.page);
      //  const script = vueScript(makeUpJs(this.formData, type))
      const html = vueTemplate(makeUpHtml(this.page, "file"));
      // const css = cssStyle(makeUpCss(this.formData))
      const vuePage = beautifier.html(html, beautifierConf.html);
      console.log(vuePage);
      return vuePage;
      // return beautifier.html(html + script + css, beautifierConf.html)
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
