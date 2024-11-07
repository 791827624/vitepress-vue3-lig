// docs/.vitepress/config.mts
import { defineConfig } from "file:///C:/Users/DELL/Desktop/vue3-components-lib-master-a3605bcd0e20ac9c5257ed5d7edf94cef638f0b7/node_modules/vitepress/dist/node/index.js";
import AutoImport from "file:///C:/Users/DELL/Desktop/vue3-components-lib-master-a3605bcd0e20ac9c5257ed5d7edf94cef638f0b7/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/DELL/Desktop/vue3-components-lib-master-a3605bcd0e20ac9c5257ed5d7edf94cef638f0b7/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///C:/Users/DELL/Desktop/vue3-components-lib-master-a3605bcd0e20ac9c5257ed5d7edf94cef638f0b7/node_modules/unplugin-vue-components/dist/resolvers.js";
import { demoBlockPlugin, demoblockVitePlugin } from "file:///C:/Users/DELL/Desktop/vue3-components-lib-master-a3605bcd0e20ac9c5257ed5d7edf94cef638f0b7/node_modules/vitepress-theme-demoblock/dist/node/index.mjs";
import vueJsxPlugin from "file:///C:/Users/DELL/Desktop/vue3-components-lib-master-a3605bcd0e20ac9c5257ed5d7edf94cef638f0b7/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { resolve } from "path";
import requireTransform from "file:///C:/Users/DELL/Desktop/vue3-components-lib-master-a3605bcd0e20ac9c5257ed5d7edf94cef638f0b7/node_modules/vite-plugin-require-transform/dist/index.mjs";

// docs/.vitepress/componentsConfig.js
var BASIC = [
  {
    text: "Name Input \u59D3\u540D\u8F93\u5165\u6846",
    link: "/examples/NameInput",
    name: "NameInput"
  },
  {
    text: "Id Card Input \u8EAB\u4EFD\u8BC1\u53F7\u8F93\u5165\u6846",
    link: "/examples/IdCardInput",
    name: "IdCardInput"
  },
  {
    text: "Mobile Input \u624B\u673A\u53F7\u8F93\u5165\u6846",
    link: "/examples/MobileInput",
    name: "MobileInput"
  }
];
var BUSINESS = [
  { text: "Base Form \u52A8\u6001\u8868\u5355", link: "/examples/BaseForm", name: "BaseForm" }
];

// docs/.vitepress/config.mts
import ReactivityTransform from "file:///C:/Users/DELL/Desktop/vue3-components-lib-master-a3605bcd0e20ac9c5257ed5d7edf94cef638f0b7/node_modules/@vue-macros/reactivity-transform/dist/vite.js";
import legacy from "file:///C:/Users/DELL/Desktop/vue3-components-lib-master-a3605bcd0e20ac9c5257ed5d7edf94cef638f0b7/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import css from "file:///C:/Users/DELL/Desktop/vue3-components-lib-master-a3605bcd0e20ac9c5257ed5d7edf94cef638f0b7/node_modules/vite-plugin-css/lib/index.js";
var __vite_injected_original_dirname = "C:\\Users\\DELL\\Desktop\\vue3-components-lib-master-a3605bcd0e20ac9c5257ed5d7edf94cef638f0b7\\docs\\.vitepress";
var baseUrl = process.env.NODE_ENV === "production" ? "/path/to/your/docs/" : "/";
var config_default = defineConfig({
  title: "Easy components",
  description: "Vue \u7EC4\u4EF6\u5E93",
  base: baseUrl,
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin);
    }
  },
  vue: {},
  vite: {
    plugins: [
      css({
        name: "",
        tranfrom: (name) => {
          return name;
        }
      }),
      vueJsxPlugin(),
      legacy({
        targets: ["defaults", "not IE 11"]
      }),
      ReactivityTransform(),
      demoblockVitePlugin(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      requireTransform({
        fileRegex: /.js$|.jsx$/
        // 使用正则表达式匹配需要作用的文件
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true
        }
      }
    },
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "docs"),
        "~": resolve(__vite_injected_original_dirname, "docs/.vitepress/components")
      }
      // extensions: [".ts", ".js", ".json", ".tsx"],
    }
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "\u7EC4\u4EF6", link: "/guide" }
    ],
    sidebar: [
      {
        text: "\u8D77\u6B65",
        items: [
          { text: "Runtime API Examples", link: "/api-examples" }
        ]
      },
      {
        text: "\u57FA\u7840\u7EC4\u4EF6",
        items: BASIC
      },
      {
        text: "\u4E1A\u52A1\u7EC4\u4EF6",
        items: BUSINESS
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2NvbXBvbmVudHNDb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxERUxMXFxcXERlc2t0b3BcXFxcdnVlMy1jb21wb25lbnRzLWxpYi1tYXN0ZXItYTM2MDViY2QwZTIwYWM5YzUyNTdlZDVkN2VkZjk0Y2VmNjM4ZjBiN1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXERFTExcXFxcRGVza3RvcFxcXFx2dWUzLWNvbXBvbmVudHMtbGliLW1hc3Rlci1hMzYwNWJjZDBlMjBhYzljNTI1N2VkNWQ3ZWRmOTRjZWY2MzhmMGI3XFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9ERUxML0Rlc2t0b3AvdnVlMy1jb21wb25lbnRzLWxpYi1tYXN0ZXItYTM2MDViY2QwZTIwYWM5YzUyNTdlZDVkN2VkZjk0Y2VmNjM4ZjBiNy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlcHJlc3NcIjtcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XG5pbXBvcnQgY29udGFpbmVyIGZyb20gJ21hcmtkb3duLWl0LWNvbnRhaW5lcic7XG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuaW1wb3J0IHsgcmVuZGVyU2FuZGJveCB9IGZyb20gJ3ZpdGVwcmVzcy1wbHVnaW4tc2FuZHBhY2snO1xuaW1wb3J0IHsgZGVtb0Jsb2NrUGx1Z2luLCBkZW1vYmxvY2tWaXRlUGx1Z2luIH0gZnJvbSAndml0ZXByZXNzLXRoZW1lLWRlbW9ibG9jaydcbmltcG9ydCB2dWVKc3hQbHVnaW4gZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCByZXF1aXJlVHJhbnNmb3JtIGZyb20gJ3ZpdGUtcGx1Z2luLXJlcXVpcmUtdHJhbnNmb3JtJztcbmltcG9ydCB7IEJBU0lDLCBCVVNJTkVTUyB9IGZyb20gXCIuL2NvbXBvbmVudHNDb25maWdcIjtcbmltcG9ydCBSZWFjdGl2aXR5VHJhbnNmb3JtIGZyb20gJ0B2dWUtbWFjcm9zL3JlYWN0aXZpdHktdHJhbnNmb3JtL3ZpdGUnXG5pbXBvcnQgbGVnYWN5IGZyb20gJ0B2aXRlanMvcGx1Z2luLWxlZ2FjeSc7XG5pbXBvcnQgY3NzIGZyb20gJ3ZpdGUtcGx1Z2luLWNzcyc7XG5cblxuXG5cbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gID8gJy9wYXRoL3RvL3lvdXIvZG9jcy8nXG4gIDogJy8nO1xuXG5cblxuXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogXCJFYXN5IGNvbXBvbmVudHNcIixcbiAgZGVzY3JpcHRpb246IFwiVnVlIFx1N0VDNFx1NEVGNlx1NUU5M1wiLFxuICBiYXNlOiBiYXNlVXJsLFxuXG4gIG1hcmtkb3duOiB7XG4gICAgY29uZmlnOiAobWQpID0+IHtcbiAgICAgIG1kLnVzZShkZW1vQmxvY2tQbHVnaW4pXG4gICAgfVxuICB9LFxuICB2dWU6IHtcblxuICB9LFxuICB2aXRlOiB7XG4gICAgcGx1Z2luczogW1xuICAgICAgY3NzKHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHJhbmZyb206IChuYW1lKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5hbWVcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICB2dWVKc3hQbHVnaW4oKSxcbiAgICAgIGxlZ2FjeSh7XG4gICAgICAgIHRhcmdldHM6IFsnZGVmYXVsdHMnLCAnbm90IElFIDExJ11cbiAgICAgIH0pLFxuICAgICAgUmVhY3Rpdml0eVRyYW5zZm9ybSgpLFxuICAgICAgZGVtb2Jsb2NrVml0ZVBsdWdpbigpLFxuICAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cbiAgICAgIH0pLFxuICAgICAgQ29tcG9uZW50cyh7XG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cbiAgICAgIH0pLFxuICAgICAgcmVxdWlyZVRyYW5zZm9ybSh7XG4gICAgICAgIGZpbGVSZWdleDogLy5qcyR8LmpzeCQvICAvLyBcdTRGN0ZcdTc1MjhcdTZCNjNcdTUyMTlcdTg4NjhcdThGQkVcdTVGMEZcdTUzMzlcdTkxNERcdTk3MDBcdTg5ODFcdTRGNUNcdTc1MjhcdTc2ODRcdTY1ODdcdTRFRjZcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIHNjc3M6IHtcbiAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdkb2NzJyksXG4gICAgICAgICd+JzogcmVzb2x2ZShfX2Rpcm5hbWUsICdkb2NzLy52aXRlcHJlc3MvY29tcG9uZW50cycpXG4gICAgICB9LFxuICAgICAgLy8gZXh0ZW5zaW9uczogW1wiLnRzXCIsIFwiLmpzXCIsIFwiLmpzb25cIiwgXCIudHN4XCJdLFxuICAgIH1cbiAgfSxcbiAgdGhlbWVDb25maWc6IHtcbiAgICBuYXY6IFtcbiAgICAgIHsgdGV4dDogXCJIb21lXCIsIGxpbms6IFwiL1wiIH0sXG4gICAgICB7IHRleHQ6IFwiXHU3RUM0XHU0RUY2XCIsIGxpbms6IFwiL2d1aWRlXCIgfSxcbiAgICBdLFxuICAgIHNpZGViYXI6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdThENzdcdTZCNjVcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6IFwiUnVudGltZSBBUEkgRXhhbXBsZXNcIiwgbGluazogXCIvYXBpLWV4YW1wbGVzXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU1N0ZBXHU3ODQwXHU3RUM0XHU0RUY2XCIsXG4gICAgICAgIGl0ZW1zOiBCQVNJQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU0RTFBXHU1MkExXHU3RUM0XHU0RUY2XCIsXG4gICAgICAgIGl0ZW1zOiBCVVNJTkVTUyxcbiAgICAgIH0sXG4gICAgXSxcblxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246IFwiZ2l0aHViXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3ZpdGVwcmVzc1wiIH0sXG4gICAgXSxcbiAgfSxcblxufSk7XG5cblxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxERUxMXFxcXERlc2t0b3BcXFxcdnVlMy1jb21wb25lbnRzLWxpYi1tYXN0ZXItYTM2MDViY2QwZTIwYWM5YzUyNTdlZDVkN2VkZjk0Y2VmNjM4ZjBiN1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXERFTExcXFxcRGVza3RvcFxcXFx2dWUzLWNvbXBvbmVudHMtbGliLW1hc3Rlci1hMzYwNWJjZDBlMjBhYzljNTI1N2VkNWQ3ZWRmOTRjZWY2MzhmMGI3XFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb21wb25lbnRzQ29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9ERUxML0Rlc2t0b3AvdnVlMy1jb21wb25lbnRzLWxpYi1tYXN0ZXItYTM2MDViY2QwZTIwYWM5YzUyNTdlZDVkN2VkZjk0Y2VmNjM4ZjBiNy9kb2NzLy52aXRlcHJlc3MvY29tcG9uZW50c0NvbmZpZy5qc1wiO2V4cG9ydCBjb25zdCBCQVNJQyA9IFtcbiAge1xuICAgIHRleHQ6IFwiTmFtZSBJbnB1dCBcdTU5RDNcdTU0MERcdThGOTNcdTUxNjVcdTY4NDZcIixcbiAgICBsaW5rOiBcIi9leGFtcGxlcy9OYW1lSW5wdXRcIixcbiAgICBuYW1lOiBcIk5hbWVJbnB1dFwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJJZCBDYXJkIElucHV0IFx1OEVBQlx1NEVGRFx1OEJDMVx1NTNGN1x1OEY5M1x1NTE2NVx1Njg0NlwiLFxuICAgIGxpbms6IFwiL2V4YW1wbGVzL0lkQ2FyZElucHV0XCIsXG4gICAgbmFtZTogXCJJZENhcmRJbnB1dFwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJNb2JpbGUgSW5wdXQgXHU2MjRCXHU2NzNBXHU1M0Y3XHU4RjkzXHU1MTY1XHU2ODQ2XCIsXG4gICAgbGluazogXCIvZXhhbXBsZXMvTW9iaWxlSW5wdXRcIixcbiAgICBuYW1lOiBcIk1vYmlsZUlucHV0XCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgQlVTSU5FU1MgPSBbXG4gIHsgdGV4dDogXCJCYXNlIEZvcm0gXHU1MkE4XHU2MDAxXHU4ODY4XHU1MzU1XCIsIGxpbms6IFwiL2V4YW1wbGVzL0Jhc2VGb3Jt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
