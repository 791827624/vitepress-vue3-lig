<script lang="ts" setup>
  import {
    ref,
    reactive,
    watch,
    defineEmits,
    defineExpose,
    defineProps,
  } from "vue";
  import { useSubmitFormMobile } from "../../hooks/useSubmitForm";
  import "./style.scss";

  //props
  const {
    modelValue: idCard,
    onSubmit = () => {},
    rules,
  } = defineProps({
    modelValue: {
      type: String,
      default: "",
    },
    onSubmit: {
      type: Function,
      default: () => {},
    },
    rules: {
      default: [
        { required: true, message: "身份证不能为空", trigger: ["onSubmit"] },
        {
          pattern:
            /^[1-9]\d{5}(18|19|20|21|22)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|[Xx])$/,
          message: "请输入正确的身份证信息",
          trigger: ["onSubmit"],
        },
      ],
    },
  });

  //state
  const form = reactive<{ idCard: string }>({
    idCard,
  });

  const formRef = ref<any>(null);

  //event
  const emit = defineEmits(["update:modelValue"]);

  //methods
  const updateModel = (e: any) => {
    let value = e.target.value.trim();

    form.idCard = value;

    // 通过$emit触发一个update:modelValue事件，并传递新的值
    emit("update:modelValue", value);
  };

  const { submitForm } = useSubmitFormMobile(formRef);

  defineExpose({ submitForm });
</script>

<template>
  <van-form @submit="onSubmit" ref="formRef">
    <van-field
      v-model.trim="form.idCard"
      name="idCard"
      label="身份证"
      placeholder="请输入身份证号"
      :required="rules.find((x) => x.required)"
      :rules="rules"
      @input="updateModel"
      @blur="submitForm"
    />
  </van-form>
</template>
