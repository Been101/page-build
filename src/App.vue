<template>
  <div id="app">
    <div class="components-wrap">
      <ComponentsWrap />
    </div>
    <div class="main-wrap">
      <MainWrap />
    </div>
    <div class="config-wrap">
      <ConfigWrap />
    </div>
  </div>
</template>

<script>
import ComponentsWrap from "@/section/componentsWrap/ComponentsWrap";
import ConfigWrap from "@/section/configWrap/ConfigWrap";
import MainWrap from "@/section/mainWrap/MainWrap";

export default {
  name: "App",
  components: { ComponentsWrap, ConfigWrap, MainWrap },
};
</script>

<style lang = 'less'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

#app {
  display: flex;
  .components-wrap,
  .config-wrap {
    flex: 1;
  }
  .main-wrap {
    flex: 3;
  }
}
</style>