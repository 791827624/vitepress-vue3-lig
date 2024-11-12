import { useData, useRoute, useRouter } from "vitepress";
import {
  computed,
  defineAsyncComponent,
  defineComponent,
  h,
  ref,
  Suspense,
  toRef,
  watch,
} from "vue";
import DsyButtonDemo from "/example/DsyButton/demo.vue";
import DsyFormDemo from "/example/DsyForm/demo.vue";
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";

export default defineComponent({
  setup() {
    const route = useRoute();
    const title = ref(useData().page.value.title);
    const routePath = ref(route.path);
    const reactComponent = ref(
      defineAsyncComponent(
        () => import(/* @vite-ignore */ `${route.path}demo.vue`)
      )
    );

    watch(
      () => route,
      (route) => {
        const path = route.path.replace(".html", "/");
        title.value = route.data.title;
        routePath.value = path;
        reactComponent.value = defineAsyncComponent(
          () => import(/* @vite-ignore */ `${path}demo.vue`)
        );
      },
      {
        immediate: true,
        deep: true,
      }
    );

    console.log(useData(), route);

    const renderer = () => {
      const component = routePath.value.split("/").filter(Boolean).pop();
      switch (component) {
        case "DsyButton":
          return <DsyButtonDemo />;

        case "DsyForm":
          return <DsyFormDemo />;

        default:
          return <div />;
      }
    };

    return () => (
      <Suspense>
        <div>
          <van-nav-bar title={title.value} />
          <van-space
            class="demo-container"
            direction="vertical"
            alignment="start"
            size={20}
            fill
          >
            <van-tag type="primary" plain size="large">
              组件示例
            </van-tag>
            <DemoBlock>{renderer()}</DemoBlock>
          </van-space>
        </div>
      </Suspense>
    );
  },
});
