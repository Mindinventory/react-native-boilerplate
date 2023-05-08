import i18n from '../i18n';
import type en from '../i18n/locales/en.json';

export type DefaultContentType = keyof typeof en;

export enum ContentLanguage {
  English = 'en',
  Hindi = 'hi',
}

export const defaultContent = <
  T extends DefaultContentType,
  Key extends keyof (typeof en)[T]
>(
  obj: T,
  key: Key
) => {
  return i18n.t(`${obj}.${String(key)}`);
};
