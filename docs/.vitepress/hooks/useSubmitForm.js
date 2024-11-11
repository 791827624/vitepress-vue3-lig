import { reactive, toRefs } from "vue";

export const useSubmitForm = (ref) => {
  const submitForm = () => {
    return ref.value?.validate((valid) => valid);
  };

  return { submitForm };
};

export const useSubmitFormMobile = (ref) => {
  const submitForm = async () => {
    const { submit, validate, getValues } = ref.value;

    submit();

    //结果成功返回表单值，失败返回false
    const result = await validate()
      .then(getValues)
      .catch((e) => {
        console.log(Error(e));
        return false;
      });
    return result;
  };

  return { submitForm };
};
