import { I18n } from 'i18n-js';

import * as RNLocalize from 'react-native-localize';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';

console.log('en >>> ', en);

// export const DEFAULT_LANGUAGE = 'en';

export const translationGetters = {
  en,
  es,
  fr,
};
const i18n = new I18n();

const locales = RNLocalize.getLocales();
console.log('locales >>> ', locales);

if (Array.isArray(locales)) {
  i18n.locale = locales[0].languageTag;
}
i18n.enableFallback = true;

i18n.translations = {
  en,
  es,
  fr,
};

export default i18n;
