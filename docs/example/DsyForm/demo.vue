<template>
  <el-space
    direction="vertical"
    alignment="start"
    :size="30"
    style="width: 100%"
    fill
  >
    <DsyForm ref="formRef" :formList="formList" :cols="2" />
    <el-button :type="btnType" @click="handleNextStep">{{ btnText }}</el-button>
  </el-space>
</template>

<script setup>
  import { defineComponent, ref, defineProps, onMounted, reactive } from "vue";
  let FORM_LIST = [
    {
      prop: "props1",
      label: "表单1",
      type: "INPUT",
      rule: {
        required: true,
      },
      value: "",
    },
    {
      prop: "props2",
      label: "表单2",
      type: "SELECT",
      value: 2,
      options: [
        {
          value: 1,
          label: "Option 1",
        },
        {
          value: 2,
          label: "Option 2",
        },
        {
          value: 3,
          label: "Option 3",
        },
      ],
    },
  ];

  const btnType = ref("primary");
  const btnText = ref("下一步");
  const formList = reactive(FORM_LIST);
  const formRef = ref(null);

  const handleNextStep = async () => {
    const [result, data] = await formRef.value.onSubmit();

    btnText.value = result ? "校验成功" : "下一步";
    btnType.value = result ? "success" : "primary";
  };
</script>
