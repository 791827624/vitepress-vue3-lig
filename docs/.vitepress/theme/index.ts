// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MobileView from './MobileView.jsx'
import './style.css'
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import MyGitalk from './MyGitalk.jsx'



export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'aside-outline-before': () => h(MobileView),
      'doc-footer-before': () => h(MyGitalk)

    })
  },
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    const { app } = ctx
    // 全局注册基础组件
    app.use(ElementPlus as any)
    useComponents(ctx.app)

  }
} satisfies Theme
