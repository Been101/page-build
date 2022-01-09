// const requireComponent = require.context(
//   // 其组件目录的相对路径
//   "@/components",
//   // 是否查询其子目录
//   false,
//   // 匹配基础组件文件名的正则表达式
//   /\.(vue)$/
// );

// export default requireComponent.keys().map((fileName) => {
//   // 获取组件配置
//   const comp = requireComponent(fileName);
//   const component = comp.default || comp;
//   return component.name;
// });

export default [
  {
    groupName: "基础组件",
    compList: [
      {
        name: "商户",
        icon: "",
      },
    ],
  },
];
