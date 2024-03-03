import { createApp } from 'vue'
import './lib/index.scss'
import './style.css'
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'
import Demo from './components/Demo.vue'
import Switch from './lib/Switch.vue'
import Button from './lib/Button.vue'
import Dialog from './lib/Dialog.vue'
import Tabs from './lib/tabs/Tabs.vue'
import Tab from './lib/tabs/Tab.vue'

const app = createApp(App)
app.use(router)

app.component('Demo', Demo)

app.component('Switch', Switch)
app.component('Button', Button)
app.component('Dialog', Dialog)
app.component('Tabs', Tabs)
app.component('Tab', Tab)

app.mount('#app')
