<script lang="ts" setup>
  import { ref, reactive, defineEmits, computed, defineExpose } from "vue";
  import { useSubmitForm } from "../../hooks/useSubmitForm";
  //props
  const { modelValue: name } = defineProps(["modelValue"]);

  //state
  const form = reactive<{ name: string }>({
    name,
  });

  const validateName = (
    rule: any,
    value: string,
    callback: (arg0?: Error | undefined) => any
  ) => {
    const reg = /^([\u2E80-\uFE4F]{2,6})$/gi;
    if (!value) {
      return callback(new Error("姓名不能为空"));
    }
    if (!reg.test(value)) {
      return callback(new Error("请输入正确的姓名"));
    }
    return callback();
  };

  const rules = reactive({
    name: [{ validator: validateName, trigger: "blur" }],
  });

  const formRef = ref<any>(null);

  //event
  const emit = defineEmits(["update:modelValue"]);

  //methods
  const updateModel = (e: string) => {
    e = e.trim();

    form.name = e;

    // 通过$emit触发一个update:modelValue事件，并传递新的值
    emit("update:modelValue", e);
  };

  const { submitForm } = useSubmitForm(formRef);

  defineExpose({ submitForm });
</script>

<template>
  <div>
    <ElForm :model="form" :rules="rules" ref="formRef">
      <ElFormItem prop="name" label="手机号:">
        <ElInput
          v-model.trim="form.name"
          placeholder="请输入姓名"
          @blur="submitForm"
          @input="updateModel"
        />
      </ElFormItem>
    </ElForm>
  </div>
</template>
