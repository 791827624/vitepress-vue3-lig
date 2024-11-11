import { defineComponent } from "vue";

const DsyButton = defineComponent({
  props: {
    btnProps: {
      type: Object,
    },
  },
  setup(props) {
    console.log("🚀 ~ setup ~ props:", props);
    return () => (
      <div>
        <el-button {...props.btnProps}>我是一个按钮</el-button>
      </div>
    );
  },
});

export default DsyButton;
