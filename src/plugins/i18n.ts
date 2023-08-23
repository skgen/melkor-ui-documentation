import { createI18n } from 'vue-i18n';
import { getPersistedLocale } from '@patriarche/melkor';
import merge from 'lodash/merge';

import melkorEn from '@patriarche/melkor/i18n/en';
import melkorFr from '@patriarche/melkor/i18n/fr';
import en from '@i18n/en.json';
import fr from '@i18n/fr.json';

const docFr = merge({}, en, fr);

const messages = {
  en: merge({}, melkorEn, en),
  fr: merge({}, melkorFr, docFr),
};

const i18n = createI18n({
  legacy: false,
  locale: getPersistedLocale(Object.keys(messages)) ?? import.meta.env.VITE_APP_DEFAULT_LOCALE,
  messages,
});

export default i18n;
