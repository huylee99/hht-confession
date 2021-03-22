import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/reset.css';
import './assets/css/settings.css';
import { adminAuth } from './firebase/config';
import { VueClipboard } from '@soerenmartius/vue3-clipboard';

let app;

adminAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .use(VueClipboard)
      .mount('#app');
  }
});
