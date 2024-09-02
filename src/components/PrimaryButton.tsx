import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { colors, fonts } from '../utils/theme';
import { scaleHeight, scaleWidth } from '../utils/dimensions';

type Props = {
	title: string,
	onPress: () => void,
	style?: StyleProp<ViewStyle>
}

const PrimaryButton: React.FC<Props> = (props) => {
	const { title, onPress, style } = props;

	return (
		<TouchableOpacity onPress={onPress} style={[styles.container, style]}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	)
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.purple,
		marginHorizontal: scaleWidth(57),
		paddingVertical: scaleHeight(13),
		paddingHorizontal: scaleWidth(50),
		marginTop: scaleHeight(44)
	},
	title: {
		fontSize: 16,
		fontWeight: '600',
		color: colors.white,
		fontFamily: fonts.poppins.medium
	}
})

export { PrimaryButton };