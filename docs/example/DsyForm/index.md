---
outline: deep
---

# Base Form 动态表单

---

# 介绍

动态表单。 通过参数配置表单的展示和验证

---

# 基础用法

<script setup>
</script>

:::demo

```vue
<template>
  <el-space
    direction="vertical"
    alignment="start"
    :size="30"
    style="width:100%"
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
```

:::

---

# 动态改变表单

:::demo

```vue
<template>
  <el-space direction="vertical" alignment="start" :size="20">
    <h3>一行展示{{ cols }}个</h3>
    <DsyForm ref="formRef" :formList="formList" :cols="cols" />
    <pre>{{ pageData }}</pre>

    <el-row>
      <el-button type="primary" @click="cols = 1"> cols = 1 </el-button>
      <el-button type="primary" @click="cols = 2"> cols = 2 </el-button>
      <el-button type="primary" @click="cols = 3"> cols = 3 </el-button>
      <el-button type="primary" @click="cols = 4"> cols = 4 </el-button>
    </el-row>
    <el-button
      type="primary"
      @click="
        formList[0].rule.required
          ? (formList[0].rule = {})
          : (formList[0].rule.required = true)
      "
    >
      切换表单1的必填属性
    </el-button>

    <el-button
      type="primary"
      @click="
        () => {
          if (formList[0].type === 'SELECT') {
            formList[0].type = 'INPUT';
            formList[0].label = '输入框';
          } else {
            formList[0].type = 'SELECT';
            formList[0].label = '电话号码';
          }
        }
      "
    >
      切换表单1的类型
    </el-button>
    <el-button :type="btnType" @click="handleNextStep">{{ btnText }}</el-button>
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
    {
      prop: "props3",
      label: "电话号码1",
      type: "SELECT",
      value: "",
    },
    {
      prop: "props4",
      label: "电话号码2",
      type: "INPUT",
      value: "13621824095",
    },
  ];

  const formList = reactive(FORM_LIST);
  const pageData = ref("");

  const formRef = ref(null);
  const cols = ref(1);

  const btnType = ref("primary");
  const btnText = ref("下一步");

  const handleNextStep = async () => {
    const [result, data] = await formRef.value.onSubmit();
    pageData.value = data;
    btnText.value = result ? "校验成功" : "下一步";
    btnType.value = result ? "success" : "primary";
  };
</script>
```
