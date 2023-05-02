export interface Source {
  id?: null | string | number;
  name: string;
}

export interface NewsReqParams {
  country: (typeof Country)[keyof typeof Country];
  pageSize: number;
}

export interface NewsResult {
  source?: Source;
  author: string;
  title: string;
  description: string;
  url?: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
}

export enum Country {
  Argentina = 'ar',
  Australia = 'au',
  Austria = 'at',
  Belgium = 'be',
  Brazil = 'br',
  Bulgaria = 'bg',
  Canada = 'ca',
  China = 'cn',
  Colombia = 'co',
  Cuba = 'cu',
  CzechRepublic = 'cz',
  Egypt = 'eg',
  France = 'fr',
  Germany = 'de',
  Greece = 'gr',
  HongKong = 'hk',
  Hungary = 'hu',
  India = 'in',
  Indonesia = 'id',
  Ireland = 'ie',
  Israel = 'il',
  Italy = 'it',
  Japan = 'jp',
  Latvia = 'lv',
  Lithuania = 'lt',
  Malaysia = 'my',
  Mexico = 'mx',
  Morocco = 'ma',
  Netherlands = 'nl',
  NewZealand = 'nz',
  Nigeria = 'ng',
  Norway = 'no',
  Philippines = 'ph',
  Poland = 'pl',
  Portugal = 'pt',
  Romania = 'ro',
  Russia = 'ru',
  SaudiArabia = 'sa',
  Serbia = 'rs',
  Singapore = 'sg',
  Slovakia = 'sk',
  Slovenia = 'si',
  SouthAfrica = 'za',
  SouthKorea = 'kr',
  Sweden = 'se',
  Switzerland = 'ch',
  Taiwan = 'tw',
  Thailand = 'th',
  Turkey = 'tr',
  UAE = 'ae',
  Ukraine = 'ua',
  UnitedKingdom = 'gb',
  UnitedStates = 'us',
  Venuzuela = 've',
}
