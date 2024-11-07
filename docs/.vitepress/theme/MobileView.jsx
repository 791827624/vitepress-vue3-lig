import { useData, useRoute, useRouter } from "vitepress";
import { get } from "lodash";
import {
  computed,
  defineAsyncComponent,
  defineComponent,
  ref,
  Suspense,
  toRef,
  watch,
} from "vue";

export default defineComponent({
  setup() {
    const route = useRoute();
    const title = ref(get(useData(), "page").value.title);
    const reactComponent = ref(
      defineAsyncComponent(
        () => import(/* @vite-ignore */ `${route.path}index.vue`)
      )
    );

    watch(
      () => route,
      (route) => {
        const path = route.path.replace(".html", "/");
        title.value = route.data.title;
        reactComponent.value = defineAsyncComponent(
          () => import(/* @vite-ignore */ `${path}index.vue`)
        );
      },
      {
        immediate: true,
        deep: true,
      }
    );

    const onClickLeft = (e) => {
      console.log(get(useData(), "page").value);
    };

    return () => (
      <Suspense>
        <div>
          <van-nav-bar title={title.value} onClickLeft={onClickLeft} />
          <div class="demo-container">
            <reactComponent.value />
          </div>
        </div>
      </Suspense>
    );
  },
});
