import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router/index.js'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')


// axios.interceptors.response.use(
//     response => {
//         return response
//     },
//     error => {
//         if (error.response.status === 401) {
//             Vue.prototype.$msgBox.showMsgBox({
//                 title: "错误提示",
//                 content: "登录已过期，请重新登录",
//                 isShowCancelbtn: false
//             }).then((val) => {
//                 router.push('/');
//             }).catch(() => {
//                 console.log("cancel")
//             })
//         } else {
//             Vue.prototype.$message.showMessage({
//                 type: "error",
//                 content: "系统错误"
//             })
//         }
//         return Promise.reject(error)
//     }

// )

