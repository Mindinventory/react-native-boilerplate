import {TextStyle, ViewStyle} from 'react-native';
// import {palette} from 'app-constants';

const BASE_VIEW: TextStyle = {
  width: '100%',
  height: 44,
  borderWidth: 1,
  borderColor: '#000',
  paddingHorizontal: 8,
  borderRadius: 8,
};

const WITH_ICON_BASE_VIEW: TextStyle = {
  width: '100%',
  height: 44,
  borderWidth: 1,
  borderColor: '#000',
  borderRadius: 8,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  overflow: 'hidden',
};

export const inputPresets = {
  primary: {
    ...BASE_VIEW,
  } as TextStyle,
  rounded: {
    ...BASE_VIEW,
    borderRadius: 44,
  } as TextStyle,
};

export const inputWithIconPresets = {
  primary: {
    ...WITH_ICON_BASE_VIEW,
  } as TextStyle,
  rounded: {
    ...WITH_ICON_BASE_VIEW,
    borderRadius: 44,
  } as TextStyle,
};

export const iconContainer = {
  width: '12%',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
} as ViewStyle;

export const inputStyle = {
  paddingHorizontal: 8,
} as TextStyle;

export type InputPresets = keyof typeof inputPresets;
export type InputWithIconPresets = keyof typeof inputWithIconPresets;
