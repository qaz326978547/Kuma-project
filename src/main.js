import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import vee-validate
import {
    Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
//lightbox
import Lightbox from 'vue-easy-lightbox'
//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
//個別載入類型icon
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


//Vueloading
import 'vue-loading-overlay/dist/css/index.css';



import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/all.scss'

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
// 設定 vee-validate 全域規則
configure({
    generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
    validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');
const app = createApp(App)

//採用全域元件
app.component('font-awesome-icon', FontAwesomeIcon)
//載入要使用的icon 名稱
library.add(faLink)
library.add(faMagnifyingGlassPlus)
library.add(faBars)
library.add(faX)
library.add(faCircleUp)
library.add(faArrowRight)
library.add(faArrowLeft)








app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(createPinia())
app.use(router)
app.use(Lightbox)
app.mount('#app')
