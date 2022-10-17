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

// window.random = () => {
//   let all: HTMLElement[] = [...document.querySelectorAll('*')];
//   const forbid = ['mk-TheApp', 'pux-AppDocLayout', 'mk-AppTableRow'];
//   all = all.filter((item) => {
//     const cl = [...item.classList].join(' ');
//     for (const f of forbid) {
//       if (cl.indexOf(f) !== -1) {
//         return false;
//       }
//     }
//     return cl.indexOf('mk-') !== -1;
//   });
//   console.log(all);
//   for (const item of all) {
//     item.style.transition = 'transform 500ms';
//     // item.style.display = 'block';
//     item.addEventListener('mousemove', (e) => {
//       const rect = item.getBoundingClientRect();
//       item.style.transform = `translate(${e.clientX - rect.left}px, ${e.clientY - rect.top}px)`;
//     });
//   }
//   console.log(all.length);
// };

// setTimeout(() => {
//   window.random();
// }, 2000);
