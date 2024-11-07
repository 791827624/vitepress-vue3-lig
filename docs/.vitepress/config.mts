import { defineConfig } from "vitepress";
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import container from 'markdown-it-container';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { renderSandbox } from 'vitepress-plugin-sandpack';
import { demoBlockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
import { resolve } from 'path';
import requireTransform from 'vite-plugin-require-transform';
import { BASIC, BUSINESS } from "./componentsConfig";
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import legacy from '@vitejs/plugin-legacy';




const baseUrl = process.env.NODE_ENV === 'production'
  ? '/path/to/your/docs/'
  : '/';




// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Easy components",
  description: "Vue 组件库",
  base: baseUrl,

  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  },
  vue: {

  },
  vite: {
    plugins: [
      vueJsxPlugin(),
      legacy({
        targets: ['defaults', 'not IE 11']
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
        fileRegex: /.js$|.jsx$/  // 使用正则表达式匹配需要作用的文件
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'docs'),
        '~': resolve(__dirname, 'docs/.vitepress/components')
      },
      // extensions: [".ts", ".js", ".json", ".tsx"],
    }
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "组件", link: "/guide" },
    ],
    sidebar: [
      {
        text: "起步",
        items: [
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "基础组件",
        items: BASIC,
      },
      {
        text: "业务组件",
        items: BUSINESS,
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },

});


