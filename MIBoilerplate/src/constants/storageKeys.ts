export const StorageKeys = {
  FIRST_LAUNCH: 'FIRST_LAUNCH',
  PROFILE_DATA: 'PROFILE_DATA',
};

export type STORAGES_KEY = (typeof StorageKeys)[keyof typeof StorageKeys];
