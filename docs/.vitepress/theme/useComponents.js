// Don't remove this file, because it registers the demo components.
import DsyButton from "../components/DsyButton/index.jsx";
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";

export function useComponents(app) {
  app.component("DsyButton", DsyButton);
  app.component("Demo", Demo);
  app.component("DemoBlock", DemoBlock);
}
