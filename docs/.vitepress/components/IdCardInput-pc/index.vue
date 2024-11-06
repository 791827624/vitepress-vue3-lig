<script lang="ts" setup>
  import { ref, reactive, defineEmits, computed, defineExpose } from "vue";
  import { useSubmitForm } from "../../hooks/useSubmitForm";

  //props
  const { modelValue: idCard } = defineProps(["modelValue"]);

  //state
  const form = reactive<{ idCard: string }>({
    idCard,
  });

  const validateIdCard = (
    rule: any,
    value: string,
    callback: (arg0?: Error | undefined) => any
  ) => {
    const reg =
      /^[1-9]\d{5}(18|19|20|21|22)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|[Xx])$/;
    if (!value) {
      return callback(new Error("身份证不能为空"));
    }
    if (!reg.test(value)) {
      return callback(new Error("请输入正确的身份证信息"));
    }
    return callback();
  };

  const rules = reactive({
    idCard: [{ validator: validateIdCard, trigger: "blur" }],
  });

  const formRef = ref<any>(null);

  //event
  const emit = defineEmits(["update:modelValue"]);

  //methods
  const updateModel = (e: string) => {
    e = e.trim();

    form.idCard = e;

    // 通过$emit触发一个update:modelValue事件，并传递新的值
    emit("update:modelValue", e);
  };

  const { submitForm } = useSubmitForm(formRef);

  defineExpose({ submitForm });
</script>

<template>
  <div>
    <ElForm :model="form" :rules="rules" ref="formRef">
      <ElFormItem prop="idCard" label="身份证:">
        <ElInput
          v-model.trim="form.idCard"
          placeholder="请输入身份证号"
          @blur="submitForm"
          @input="updateModel"
        />
      </ElFormItem>
    </ElForm>
  </div>
</template>
