import {AppLanguages} from 'app-utils';

export interface LanguageOptions {
  title: string;
  langCode: string;
  isSelected: boolean;
}

export const languageOptions: LanguageOptions[] = [
  {
    isSelected: true,
    langCode: AppLanguages.En,
    title: 'English',
  },
  {
    isSelected: false,
    langCode: AppLanguages.Es,
    title: 'Spanish',
  },
  {
    isSelected: false,
    langCode: AppLanguages.Fr,
    title: 'French',
  },
];
