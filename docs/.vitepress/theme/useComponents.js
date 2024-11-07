// Don't remove this file, because it registers the demo components.
import BaseForm from '../components/BaseForm/index.jsx'
import IdCardInput from '../components/IdCardInput/index.vue'
import IdCardInputPc from '../components/IdCardInput-pc/index.vue'
import MobileInput from '../components/MobileInput/index.jsx'
import MobileInputPc from '../components/MobileInput-pc/index.jsx'
import NameInput from '../components/NameInput/index.vue'
import NameInputPc from '../components/NameInput-pc/index.vue'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export function useComponents(app) {
  app.component('BaseForm', BaseForm)
  app.component('IdCardInput', IdCardInput)
  app.component('IdCardInputPc', IdCardInputPc)
  app.component('MobileInput', MobileInput)
  app.component('MobileInputPc', MobileInputPc)
  app.component('NameInput', NameInput)
  app.component('NameInputPc', NameInputPc)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
