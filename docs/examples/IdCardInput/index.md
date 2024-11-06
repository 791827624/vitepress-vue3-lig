---
outline: deep
---

# Id Card Input 身份证号输入框

---

# 介绍

身份证号输入框表单。包含基本的非空、长度、内容格式校验。

---

# 基础用法

<script setup>
</script>

:::demo

```vue
<template>
  <van-space direction="vertical" alignment="start" :size="10" fill>
    <IdCardInput v-model="value" ref="idCardRef" :rules="rules" />
    <div>v-model: {{ value }}</div>
    <div>result: {{ refResult }}</div>
    <van-button size="small" :type="btnType" @click="handleNextStep">{{
      btnText
    }}</van-button>

    <van-button size="small" @click="cancel">取消校验</van-button>
  </van-space>
</template>

<script setup>
  import {
    defineComponent,
    ref,
    defineProps,
    onMounted,
    reactive,
    watch,
  } from "vue";

  const value = ref("");
  const refResult = ref("");
  const idCardRef = ref(null);
  const btnType = ref("primary");
  const btnText = ref("下一步");
  const rules = ref(undefined);

  const cancel = () => {
    rules.value = [];
  };

  const handleNextStep = async () => {
    const result = await idCardRef.value.submitForm();
    refResult.value = result;
    btnText.value = result ? "校验成功" : "下一步";
    btnType.value = result ? "success" : "primary";

    ElMessage({
      message: result ? "校验成功" : "校验失败",
      type: result ? "success" : "error",
    });
  };
</script>
```
