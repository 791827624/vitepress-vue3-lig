import { ref, reactive, defineEmits, defineComponent } from "vue";
import { MobileRegex } from "../../utils/pattern";
import { useSubmitForm } from "../../hooks/useSubmitForm";

export default defineComponent({
  props: ["modelValue", "inputOptions"],
  setup(props, { expose, emit }) {
    const { modelValue: phoneNumber } = props;

    //state
    const form = reactive({
      phoneNumber,
    });

    const validatePhone = (rule, value, callback) => {
      const reg = /^1[3-9]\d{9}$/;

      if (!value) {
        return callback(new Error("手机号码不能为空"));
      }
      if (!MobileRegex.test(value)) {
        return callback(new Error("请输入正确的手机号码"));
      }
      return callback();
    };

    const rules = reactive({
      phoneNumber: [{ validator: validatePhone, trigger: "blur" }],
    });

    const formRef = ref(null);

    //event
    // const emit = defineEmits(["update:modelValue"]);

    //methods
    const updateModel = (e) => {
      e = e.trim().replace(/[^\d]/g, "");

      form.phoneNumber = e;

      console.log("🚀 ~ updateModel ~ e:", e);
      // 通过$emit触发一个update:modelValue事件，并传递新的值
      emit("update:modelValue", e);
      props.inputOptions?.onInput?.(e);
    };
    const { submitForm } = useSubmitForm(formRef);

    const inputProps = {
      type: "tel",
      maxlength: "11",
      placeholder: props.inputOptions?.placeholder ?? "请输入手机号",
      clearable: props.inputOptions?.clearable,
      onBlur: (e) => {
        submitForm();
        props.inputOptions?.onBlur?.(e);
      },
      onInput: (e) => {
        updateModel(e);
      },
    };

    expose({ submitForm });

    return () => (
      <div>
        <el-form model={form} rules={rules} ref={formRef}>
          <el-form-item
            prop="phoneNumber"
            label={props.inputOptions?.label ?? "手机号:"}
          >
            <el-input v-model={form.phoneNumber} {...inputProps} />
          </el-form-item>
        </el-form>
      </div>
    );
  },
});
