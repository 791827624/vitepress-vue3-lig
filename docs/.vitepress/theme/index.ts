// https://vitepress.dev/guide/custom-theme
import { defineAsyncComponent, h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import ElementPlus from "element-plus";
import Vant from "vant";
import 'vant/lib/index.css';
import "element-plus/theme-chalk/index.css";
import 'vitepress-plugin-sandpack/dist/style.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import MyLayout from './MyLayout';
import { ConfigProvider } from 'vant';



export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, ConfigProvider, {
      'aside-outline-before': (e) => {
        return h(MyLayout)
      }
    })
  },
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    const { app } = ctx
    // 全局注册基础组件
    app.use(ElementPlus as any)
    app.use(Vant as any)

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }

    useComponents(app)
  },

} satisfies Theme

