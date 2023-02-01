import {TextStyle, ViewStyle} from 'react-native';
// import {palette} from 'app-constants';

const BASE_VIEW: TextStyle = {
  borderColor: '#000',
  borderRadius: 8,
  borderWidth: 1,
  height: 44,
  paddingHorizontal: 8,
  width: '100%',
};

const WITH_ICON_BASE_VIEW: TextStyle = {
  alignItems: 'center',
  borderColor: '#000',
  borderRadius: 8,
  borderWidth: 1,
  flexDirection: 'row',
  height: 44,
  justifyContent: 'space-between',
  overflow: 'hidden',
  width: '100%',
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
  alignItems: 'center',
  height: '100%',
  justifyContent: 'center',
  width: '12%',
} as ViewStyle;

export const inputStyle = {
  paddingHorizontal: 8,
} as TextStyle;

export type InputPresets = keyof typeof inputPresets;
export type InputWithIconPresets = keyof typeof inputWithIconPresets;
