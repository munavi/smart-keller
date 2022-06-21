import {createApp} from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import {createVuestic} from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'
import Router from "./router";
import getJson from "./service/getJson";

const
    pinia  = createPinia(),
    app    = createApp(App),
      init = async () =>
      {
          const
              config = await getJson('json/config.json');

          app
              .use(createVuestic())
              .use(pinia)
              .use(Router())
              .mount('#app');
    }
init();