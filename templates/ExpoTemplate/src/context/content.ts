import { TranslateOptions } from 'i18n-js';

import i18n, { TxKeyPath } from '../i18n';

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
