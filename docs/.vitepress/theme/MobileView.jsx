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

export default defineComponent({
  setup() {
    const route = useRoute();
    console.log("🚀 ~ setup ~ route:", route);
    const title = ref(useData().page.value.title);
    const routePath = ref(route.path);
    const reactComponent = ref(
      defineAsyncComponent(
        () => import(/* @vite-ignore */ `${route.path}demo.vue`)
      )
    );
    const isButton = computed(() => routePath.value.includes("DsyButton"));
    const isForm = computed(() => routePath.value.includes("DsyForm"));

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
            <DemoBlock>
              {isButton.value && <DsyButtonDemo></DsyButtonDemo>}
              {isForm.value && <DsyFormDemo></DsyFormDemo>}
            </DemoBlock>
          </van-space>
        </div>
      </Suspense>
    );
  },
});
