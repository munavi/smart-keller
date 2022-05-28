import {createApp} from 'vue';
import App from './App.vue';
import {createVuestic} from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'
import router from "@/router";

const app = createApp(App),
      init = async () => {
        app.use(createVuestic())
            .use(router)
            .mount('#app');
    }
init();