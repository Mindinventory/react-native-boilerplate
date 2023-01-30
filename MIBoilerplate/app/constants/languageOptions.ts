import {AppLanguages} from 'app-utils';

export interface LanguageOptions {
  title: string;
  langCode: string;
  isSelected: boolean;
}

export const languageOptions: LanguageOptions[] = [
  {
    title: 'English',
    langCode: AppLanguages.En,
    isSelected: true,
  },
  {
    title: 'Spanish',
    langCode: AppLanguages.Es,
    isSelected: false,
  },
  {
    title: 'French',
    langCode: AppLanguages.Fr,
    isSelected: false,
  },
];
