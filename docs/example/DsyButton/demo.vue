<template>
  <el-space direction="vertical" alignment="start" :size="20">
    <DsyButton :btnProps="btnProps.primary"></DsyButton>
    <DsyButton :btnProps="btnProps.success"></DsyButton>
    <DsyButton :btnProps="btnProps.warning"></DsyButton>
    <DsyButton :btnProps="btnProps.danger"></DsyButton>
    <DsyButton :btnProps="btnProps.info"></DsyButton>
  </el-space>
</template>

<script setup>
  import {
    defineComponent,
    ref,
    defineProps,
    onMounted,
    reactive,
    toRaw,
  } from "vue";

  //'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' (deprecated)
  const btnProps = ref({
    primary: {
      type: "primary",
    },
    success: {
      type: "success",
    },
    warning: {
      type: "warning",
    },
    danger: {
      type: "danger",
    },
    info: {
      type: "info",
    },
  });
</script>
