import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "my components lib",
  description: "我的组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '快速开始', link: '/quik-start' }
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
          { text: 'Button 按钮', link: '/example/Button/index.md' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
