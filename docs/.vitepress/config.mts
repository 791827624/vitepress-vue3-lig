import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "my components lib",
  description: "我的组件库",
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    }
  },
  vite: {
    plugins: [demoblockVitePlugin(), vueJsxPlugin()],
    optimizeDeps: {
      include: ['pdf'], // 将pdf文件添加到include数组中
      exclude: [], // 排除其他不需要优化的文件类型
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '快速开始', link: '/quik-start' },
      { text: '个人简历', link: '/my-resume' }
    ],

    sidebar: [
      {
        text: '起步',
        items: [
          { text: '总览', link: '/overall' },

        ]
      },
      {
        text: '基础组件',
        items: [
          { text: 'Button 按钮', link: '/example/DsyButton/index.md' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
