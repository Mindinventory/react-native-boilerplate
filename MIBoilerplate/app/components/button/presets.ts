import {ViewStyle, TextStyle} from 'react-native';
import {palette} from 'app-constants';

const BASE_VIEW: ViewStyle = {
  padding: 6,
  borderRadius: 4,
  justifyContent: 'center',
  alignItems: 'center',
};

const BASE_TEXT: TextStyle = {
  fontSize: 14,
};

export const viewPresets = {
  primary: {
    ...BASE_VIEW,
    backgroundColor: palette.primaryBlue,
  } as ViewStyle,
  secondary: {
    ...BASE_VIEW,
    backgroundColor: palette.transparent,
    borderWidth: 1.4,
    borderColor: palette.primaryBlue,
  } as ViewStyle,
  primaryDisabled: {
    ...BASE_VIEW,
    backgroundColor: palette.disablePrimaryBlue,
  },
  disabled: {
    ...BASE_VIEW,
    backgroundColor: palette.transparent,
    borderWidth: 1,
    borderColor: palette.alto,
  },
};

export const textPresets = {
  primary: {...BASE_TEXT, color: palette.white} as TextStyle,
  secondary: {...BASE_TEXT, color: palette.primaryBlue} as TextStyle,
  primaryDisabled: {...BASE_TEXT, color: palette.white} as TextStyle,
  disabled: {...BASE_TEXT, color: palette.grayChateau} as TextStyle,
};

export type ButtonPresets = keyof typeof viewPresets;
