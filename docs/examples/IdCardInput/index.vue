<template>
  <van-space direction="vertical" alignment="start" :size="10">
    <IdCardInput v-model="value" ref="idCardRef" />
    <div>v-model: {{ value }}</div>
    <div>result: {{ refResult }}</div>
    <van-button size="small" :type="btnType" @click="handleNextStep">{{
      btnText
    }}</van-button>
  </van-space>
</template>

<script setup>
  import { defineComponent, ref, defineProps, onMounted, reactive } from "vue";

  const value = ref("");
  const refResult = ref("");
  const idCardRef = ref(null);
  const btnType = ref("primary");
  const btnText = ref("下一步");

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