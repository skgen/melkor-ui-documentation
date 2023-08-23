import { createI18n } from 'vue-i18n';
import merge from 'lodash/merge';

import { getPersistedLocale } from '@patriarche/melkor';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import melkorEn from '@patriarche/melkor/i18n/en';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import melkorFr from '@patriarche/melkor/i18n/fr';
import fr from '@i18n/fr.json';
import en from '@i18n/en.json';

const messages = {
  en: merge({}, melkorEn, en),
  fr: merge({}, melkorFr, fr),
};

const locales = Object.keys(messages);

const i18n = createI18n({
  legacy: false,
  locale: getPersistedLocale(locales) ?? import.meta.env.VITE_APP_DEFAULT_LANG,
  messages,
});

export default i18n;
