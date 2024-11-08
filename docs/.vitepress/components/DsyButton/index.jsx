import { defineComponent, ref } from "vue";

const Hero = defineComponent({
  setup() {
    const account = ref(1);

    setInterval(() => {
      account.value = account.value + 1;
    }, 1000);

    return () => (
      <>
        <div>数值{account.value}</div>
      </>
    );
  },
});

export default Hero;
