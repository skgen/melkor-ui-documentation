import { createApp } from 'vue';
import { createMelkorUi } from '@patriarche/melkor';
import '@patriarche/melkor/style';
import '@style/main.scss';

import router from '@/plugins/router';
import i18n from '@/plugins/i18n';
import App from '@/App.vue';
import { listenToScroll } from '@/features/scroll';

const app = createApp(App);

const mkui = createMelkorUi({
  router,
  i18n,
  // debug: true,
});

app.use(mkui);

app.directive('anchor', (() => {
  let stopListening: ReturnType<typeof listenToScroll> | null = null;
  return {
    mounted(el: HTMLElement) {
      function handleScroll() {
        const rect = el.getBoundingClientRect();
        const line = window.innerHeight * 0.2;
        const intersect = rect.top < line && rect.top + rect.height > line;
        if (intersect) {
          const newRoute = `${window.location.pathname}#${el.id}`;
          if (!window.location.href.includes(`#${el.id}`)) {
            window.history.replaceState(null, '', newRoute);
          }
        }
      }

      stopListening = listenToScroll(handleScroll);
    },
    beforeUnmount() {
      if (stopListening) {
        stopListening();
      }
    },
  };
})());

app.mount('#app');
