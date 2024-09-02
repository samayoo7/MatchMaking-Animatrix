import { Dimensions } from 'react-native';

export const _DEVICE_WIDTH = Dimensions.get('window').width;
export const _DEVICE_HEIGHT = Dimensions.get('window').height;

export const _iPHONE_10_WIDTH = 375;
export const _iPHONE_10_HEIGHT = 812;

export const scaleHeight = (value: number) => {
	return (_DEVICE_HEIGHT * value) / _iPHONE_10_HEIGHT
};

export const scaleWidth = (value: number) => {
	return (_DEVICE_WIDTH * value) / _iPHONE_10_WIDTH
};