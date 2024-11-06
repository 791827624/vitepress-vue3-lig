# ocr识别身份证信息

## 介绍
```
ocr识别身份证信息（姓名,身份证号,性别,民族,出生日期,住址,签发机关,有效期）,识别的信息可以设置是否展示
```

## 引入
```
<script>

// 导入组件

import OcrIdCardInfo from './components/OcrIdCardInfo.vue';

export default { name: 'App', components: { OcrIdCardInfo } };

</script> 
```
## 代码演示
```
<OcrIdCardInfo :ocr-url="ocrUrl" :show-thumbnail="true" :show-name="true" :show-id-card="true" :show-gender="false" />
```
## API 
### Props
| 参数	| 说明	| 类型	| 默认值 | 
| --- | --- | --- | --- |
| ocr-url | ocr识别地址 | string |  |
| show-thumbnail | 控制是否显示缩略图 | boolean |  true |    
|showName            |是否展示姓名     | boolean | true |
|showIdCard          |是否展示身份证号 | boolean | true |
|showGender          |是否展示性别     | boolean | true |
|showNationality     |是否展示民族     | boolean | true |
|showBirthday        |是否展示出生日期 | boolean | true |
|showAddress         |是否展示住址     | boolean | true |
|showIssuingAuthority|是否展示签发机关 | boolean | true |
|showValidityDate    |是否展示有效期   | boolean | true | 
### Method
| 方法名	| 说明	| 参数	| 返回值 | 
| --- | --- | --- | --- |