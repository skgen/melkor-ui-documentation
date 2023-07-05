import { createApp } from 'vue';

import mkui from '@/plugins/melkor';
import App from '@/App.vue';
import '@style/main.scss';

const app = createApp(App);

app.use(mkui);

app.mount('#app');
