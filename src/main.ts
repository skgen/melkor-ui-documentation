import { createApp } from 'vue';
import { createMelkorUi } from '@patriarche/melkor';
import '@patriarche/melkor/style';
import '@style/main.scss';

import { createPinia } from 'pinia';
import router from '@/plugins/router';
import i18n from '@/plugins/i18n';
import App from '@/App.vue';

const app = createApp(App);

app.use(createPinia());

app.use(createMelkorUi({
  router,
  i18n,
  debug: false,
}));

app.mount('#app');
