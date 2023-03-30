export const logger = (prefix?: any) => {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.log(`${String(prefix)}`, prefix);
  }
};
