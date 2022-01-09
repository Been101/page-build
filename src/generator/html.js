// 渲染每一个组件
/**
 * const comp = {
        tag: "CpSelector",
        config_json: {
          label: "商户",
          defaultValue: 2,
          "v-model": "cpNum",
        },
      };
 * <CpSelector v-model = 'cpNum' label='商户'></CpSelector>
 */
function buildComp(comp) {
  return `<${comp.tag} ${buildCompAttr(comp.config_json)}></${comp.tag}>`;
}

function buildCompAttr(configJson) {
  return Object.keys(configJson)
    .map((key) => {
      if (typeof configJson[key] === "string") {
        return `${key} = '${configJson[key]}'`;
      } else {
        return `:${key} = '${configJson[key]}'`;
      }
    })
    .join(" ");
}

function buildFormTemplate(scheme, child) {
  let str = `<el-form>
      ${child}
      ${buildFromBtns()}
    </el-form>`;
  return str;
}

function buildFromBtns() {
  return `<el-form-item >
  <el-button type="primary" @click="submitForm">提交</el-button>
  <el-button @click="resetForm">重置</el-button>
</el-form-item>`;
}
export function vueTemplate(str) {
  return `<template>
    <div>
      ${str}
    </div>
  </template>`;
}
export function makeUpHtml(formConfig, type) {
  const htmlList = [];
  // 遍历渲染每个组件成html
  formConfig.forEach((comp) => {
    htmlList.push(buildComp(comp));
  });
  const htmlStr = htmlList.join("\n");
  // 将组件代码放进form标签
  let temp = buildFormTemplate(formConfig, htmlStr, type);
  return temp;
}
