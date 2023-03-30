import type {ContentLanguage} from './content';

export interface SecretWorldContextType {
  styles: ReturnType<typeof defaultStyles>;
  getIcons: (image: IconsSource, props?: IconProps) => JSX.Element;
  getImages: (image: ImageSource, props?: ImageProps) => JSX.Element;
  contents: <T extends DefaultContentType, Key extends keyof (typeof en)[T]>(
    obj: T,
    key: Key
  ) => string;
  language: ContentLanguage;
  loader: React.RefObject<IndicatorRef>;
  services: SecreateWorldServices;
  setLanguageInApp: (lang: ContentLanguage) => void;
  storage: Storage;
}
