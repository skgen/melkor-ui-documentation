import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages';
import { getPersistedLocale } from '@patriarche/melkor';
import merge from 'lodash/merge';

const computedMessages = {
  ...messages,
  fr: merge({}, messages.en, messages.fr),
};

const i18n = createI18n({
  legacy: false,
  locale: getPersistedLocale(Object.keys(messages)) ?? import.meta.env.VITE_APP_DEFAULT_LOCALE,
  messages: computedMessages,
});

export default i18n;
