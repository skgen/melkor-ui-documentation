import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createMelkorUi } from '@patriarche/melkor';

import '@patriarche/melkor/style';
import '@/assets/scss/main.scss';

import i18n from '@/plugins/i18n';
import router from '@/plugins/router';
import App from '@/App.vue';

const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.use(router);

app.use(createMelkorUi());

app.mount('#app');
