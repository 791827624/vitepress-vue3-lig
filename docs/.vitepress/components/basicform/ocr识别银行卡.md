# ocr识别银行卡

## 介绍
```
ocr识别银行卡号
```

## 引入
```
<script>

// 导入组件

import OcrBankCardInfo from './components/OcrBankCardInfo.vue';

export default { name: 'App', components: { OcrBankCardInfo } };

</script> 
```
## 代码演示
```
<OcrBankCardInfo :ocr-url="ocrUrl" />
```
## API 
### Props
| 参数	| 说明	| 类型	| 默认值 | 
| --- | --- | --- | --- |
| ocr-url | ocr识别地址 | string |  |
| show-thumbnail | 控制是否显示缩略图 | boolean |  true |    
### Method
| 方法名	| 说明	| 参数	| 返回值 | 
| --- | --- | --- | --- |