import {Dimensions, Platform} from 'react-native';

const {width: DEVICE_WIDTH, height: DEVICE_HEIGHT} = Dimensions.get('window');
const IS_ANDROID = Platform.OS === 'android';
const IS_IOS = Platform.OS === 'ios';
const BASE_URL = 'https://registry.npmjs.com/-/v1/';

export default {BASE_URL, DEVICE_HEIGHT, DEVICE_WIDTH, IS_ANDROID, IS_IOS};
