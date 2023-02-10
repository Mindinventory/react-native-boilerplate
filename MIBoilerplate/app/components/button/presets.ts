import {TextStyle, ViewStyle} from 'react-native';

import {palette} from 'app-constants';

const BASE_VIEW: ViewStyle = {
  alignItems: 'center',
  borderRadius: 4,
  justifyContent: 'center',
  padding: 6,
};

const BASE_TEXT: TextStyle = {
  fontSize: 14,
};

export const viewPresets = {
  disabled: {
    ...BASE_VIEW,
    backgroundColor: palette.transparent,
    borderColor: palette.alto,
    borderWidth: 1,
  },
  primary: {
    ...BASE_VIEW,
    backgroundColor: palette.primaryBlue,
  } as ViewStyle,
  primaryDisabled: {
    ...BASE_VIEW,
    backgroundColor: palette.disablePrimaryBlue,
  },
  secondary: {
    ...BASE_VIEW,
    backgroundColor: palette.transparent,
    borderColor: palette.primaryBlue,
    borderWidth: 1.4,
  } as ViewStyle,
};

export const textPresets = {
  disabled: {...BASE_TEXT, color: palette.grayChateau} as TextStyle,
  primary: {...BASE_TEXT, color: palette.white} as TextStyle,
  primaryDisabled: {...BASE_TEXT, color: palette.white} as TextStyle,
  secondary: {...BASE_TEXT, color: palette.primaryBlue} as TextStyle,
};

export type ButtonPresets = keyof typeof viewPresets;
