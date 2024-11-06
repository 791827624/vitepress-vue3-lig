<template>
  <el-space direction="vertical" alignment="start" :size="30">
    <MobileInput v-model="value" ref="mobileInputRef" />
    <el-button :type="btnType" @click="handleNextStep">{{ btnText }}</el-button>
  </el-space>
</template>

<script setup>
  import { defineComponent, ref, defineProps, onMounted, reactive } from "vue";

  const value = ref("");
  const mobileInputRef = ref(null);
  const validate = ref(() => {});
  const btnType = ref("primary");
  const btnText = ref("下一步");

  const handleNextStep = async () => {
    const result = await mobileInputRef.value.submitForm();

    btnText.value = result ? "校验成功" : "下一步";
    btnType.value = result ? "success" : "primary";

    ElMessage({
      message: result ? "校验成功" : "校验失败",
      type: result ? "success" : "error",
    });
  };
</script>