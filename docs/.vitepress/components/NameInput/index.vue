<script lang="ts" setup>
  import { ref, reactive, defineEmits, computed, defineExpose } from "vue";
  import { useSubmitFormMobile } from "../../hooks/useSubmitForm";
  //props
  const {
    modelValue: name,
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
        { required: true, message: "姓名不能为空", trigger: ["onSubmit"] },
        {
          pattern: /^([\u2E80-\uFE4F]{2,6})$/,
          message: "请输入正确的姓名",
          trigger: ["onSubmit"],
        },
      ],
    },
  });

  //state
  const form = reactive<{ name: string }>({
    name,
  });

  const formRef = ref<any>(null);

  //event
  const emit = defineEmits(["update:modelValue"]);

  //methods
  const updateModel = (e) => {
    let value = e.target.value.trim();

    form.name = value;

    // 通过$emit触发一个update:modelValue事件，并传递新的值
    emit("update:modelValue", value);
  };

  const { submitForm } = useSubmitFormMobile(formRef);

  defineExpose({ submitForm });
</script>

<template>
  <van-form @submit="onSubmit" ref="formRef">
    <van-field
      v-model.trim="form.name"
      name="name"
      label="姓名"
      placeholder="请输入姓名"
      :required="rules.find((x) => x.required)"
      :rules="rules"
      @input="updateModel"
      @blur="submitForm"
    />
  </van-form>
</template>
