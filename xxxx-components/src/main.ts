import {createApp} from 'vue'
import router from "./router/index";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'

import App from './App.vue'
import {toLine} from "./utils";

const app = createApp(App);
//要先使用router，再mount
app.use(router);
app.use(ElementPlus);
for (let i in Icons) {
    app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}


app.mount('#app');
