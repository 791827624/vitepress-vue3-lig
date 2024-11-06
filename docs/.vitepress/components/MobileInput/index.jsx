import {
  ref,
  reactive,
  defineEmits,
  defineComponent,
  watch,
  computed,
} from "vue";
import { MobileRegex } from "../../utils/pattern";
import { useSubmitFormMobile } from "../../hooks/useSubmitForm";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    inputOptions: {
      type: Object,
      default: {},
    },
    rules: {
      type: Array,
      default: [
        { required: true, message: "手机号码不能为空", trigger: ["onSubmit"] },
        {
          pattern: /^1[3-9]\d{9}$/,
          message: "请输入正确的手机号码",
          trigger: ["onSubmit"],
        },
      ],
    },
  },

  setup(props, { expose, emit }) {
    const { modelValue: phoneNumber } = props;

    //state
    const form = reactive({
      phoneNumber,
    });

    const formRef = ref(null);

    watch(
      () => props.rules,
      (v) => console.log(v),
      {
        deep: true,
      }
    );

    //methods
    const updateModel = (e) => {
      let value = e.target.value.trim().replace(/[^\d]/g, "");
      form.phoneNumber = value;
      // 通过$emit触发一个update:modelValue事件，并传递新的值
      emit("update:modelValue", value);
      props.inputOptions?.onInput?.(value);
    };

    const { submitForm } = useSubmitFormMobile(formRef);

    const inputProps = computed(() => ({
      type: "tel",
      maxlength: "11",
      label: "手机号",
      name: "phoneNumber",
      required: props.rules.find((x) => x.required),
      placeholder: props.inputOptions?.placeholder ?? "请输入手机号",
      clearable: props.inputOptions?.clearable,
      rules: props.rules,
      onBlur: (e) => {
        submitForm();
        props.inputOptions?.onBlur?.(e);
      },
      onInput: (e) => {
        updateModel(e);
      },
    }));

    const onSubmit = () => {};

    expose({ submitForm });

    return () => (
      <div>
        <van-form onSubmit={onSubmit} ref={formRef}>
          <van-field v-model={form.phoneNumber} {...inputProps.value} />
        </van-form>
      </div>
    );
  },
});
