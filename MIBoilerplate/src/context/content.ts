import { TranslateOptions } from 'i18n-js';

import i18n from '../i18n';
import type en from '../i18n/locales/en.json';

export type DefaultContentType = keyof typeof en;

export enum ContentLanguage {
  English = 'en',
  Hindi = 'hi',
}

export type TxKeyPath = RecursiveKeyOf<typeof en>;

// via: https://stackoverflow.com/a/65333050
type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `['${TKey}']` | `.${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<
  TValue,
  Text extends string
> = TValue extends any[]
  ? Text
  : TValue extends object
  ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
  : Text;

/**
 * Translates text.
 *
 * @param key The i18n key.
 * @param options The i18n options.
 * @returns The translated text.
 *
 * @example
 * Translations:
 *
 * ```en.json
 * {
 *  "hello": "Hello, {{name}}!"
 * }
 * ```
 *
 * Usage:
 * ```ts
 * import { contents } from '@src/context';
 *
 * contents("common.hello", { name: "world" })
 * => "Hello world!"
 * ```
 */
export const contents = (key: TxKeyPath, options?: TranslateOptions) => {
  return i18n.t(key, options);
};
