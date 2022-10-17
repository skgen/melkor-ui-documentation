import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages';
import { getPersistedLocale } from '@patriarche/melkor';

const i18n = createI18n({
  legacy: false,
  locale: getPersistedLocale(Object.keys(messages)) ?? import.meta.env.VITE_APP_DEFAULT_LANG,
  messages,
});

export default i18n;
