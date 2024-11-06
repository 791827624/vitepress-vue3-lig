import {
  defineComponent,
  reactive,
  onBeforeMount,
  ref,
  computed,
  toRefs,
  watch,
} from "vue";
import MobileInput from "../MobileInput";
import "./style.scss";
import { BASIC } from "../../componentsConfig";
import { useSubmitForm } from "../../hooks/useSubmitForm";

const $prefix = "base-form";

const BZC = BASIC.map((item) => item.name);

export default defineComponent({
  props: {
    formList: {
      type: Array,
      required: true,
      default: [],
    },
    cols: {
      type: Number,
      required: false,
      default: 2,
    },
  },
  setup(props, { expose }) {
    const formData = reactive({});
    const rules = reactive({});
    const formRef = ref(null);
    const $refs = ref({});

    watch(
      props.formList,
      (formList) => {
        //创建formData 依据FormList中的prop <=> value字段
        formList.forEach((element) => {
          const { value, prop, rule = [], type } = element;
          formData[prop] = value;
          rules[prop] = rule;

          if (BZC.includes(type)) {
            $refs.value[prop] = prop;
          }
        });
      },
      {
        immediate: true,
        deep: true,
      }
    );

    const refList = computed(() => {
      const refs = [];
      for (const key in $refs.value) {
        if ($refs.value[key]) {
          refs.push($refs.value[key]);
        }
      }
      return refs;
    });

    function getFromData() {
      return formData;
    }

    const { submitForm } = useSubmitForm(formRef);

    const onSubmit = async () => {
      const syncData = await Promise.all([
        submitForm(),
        ...refList.value.map((ref) => ref.submitForm()),
      ]);
      const result = syncData.every((v) => v === true);

      return [result, getFromData()];
    };

    expose({ getFromData, onSubmit, $refs });

    function onChange(cb, formItem, value) {
      const { prop } = formItem;
      formData[prop] = value;
      props.formList.find((item) => item.prop === prop).value = value;
      cb?.(formItem);
    }

    function INPUT(formItem) {
      const {
        onChange: onItemChange,
        value,
        label,
        placeholder = "请输入" + label,
        clearable,
        prop,
      } = formItem;
      return (
        <el-input
          placeholder={placeholder}
          clearable={clearable}
          defaultValue={value}
          v-model={formData[prop]}
          onInput={(e) => {
            onChange(onItemChange, formItem, e);
          }}
          onChange={(e) => {
            onChange(onItemChange, formItem, e);
          }}
        />
      );
    }
    function SELECT(formItem) {
      const {
        onChange: onItemChange,
        value,
        label,
        placeholder = "请输入" + label,
        clearable,
        prop,
        options = [],
      } = formItem;
      return (
        <el-select
          placeholder={placeholder}
          clearable={clearable}
          defaultValue={value}
          v-model={formData[prop]}
          onInput={(e) => {
            onChange(onItemChange, formItem, e);
          }}
          style={{
            width: 300,
          }}
          onChange={(e) => {
            onChange(onItemChange, formItem, e);
          }}
        >
          {options.map((item) => {
            return (
              <el-option
                value={item.value}
                label={item.label}
                key={item.value}
              ></el-option>
            );
          })}
        </el-select>
      );
    }
    function MOBILEINPUT(formItem) {
      const {
        onChange: onItemChange,
        placeholder,
        clearable,
        prop,
        label,
      } = formItem;

      return (
        <MobileInput
          ref={(e) => ($refs.value[prop] = e)}
          v-model={formData[prop]}
          inputOptions={{
            placeholder,
            clearable,
            label: "",
            onInput: (e) => {
              onChange(onItemChange, formItem, e);
            },
            onChange: (e) => {
              onChange(onItemChange, formItem, e);
            },
          }}
        />
      );
    }
    function handleClassName(cls) {
      return `${$prefix}-${cls}`;
    }

    const renderMethods = {
      INPUT,
      SELECT,
      MOBILEINPUT,
    };

    function formItemRender() {
      const span = Number(24 / props.cols);

      return props.formList?.map((formItem) => {
        const {
          type,
          render: cusRender,
          prop,
          label = prop,
          description,
        } = formItem;

        const normalRender = (
          <div class={handleClassName("normal-wrapper")}>
            <div class={handleClassName("description")}>{description}</div>
            {renderMethods[type](formItem)}
          </div>
        );

        return cusRender ? (
          cusRender(formItem)
        ) : (
          <el-col span={span} key={prop}>
            <el-form-item prop={prop} label={label}>
              {normalRender}
            </el-form-item>
          </el-col>
        );
      });
    }
    function formRender() {
      return (
        <el-form
          model={formData}
          ref={formRef}
          class="base-form-wrapper"
          rules={rules}
        >
          <el-row gutter={10} type="flex">
            {formItemRender()}
          </el-row>
        </el-form>
      );
    }
    return () => formRender();
  },
});
