import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { scaleHeight, scaleWidth } from '../utils/dimensions';
import { colors, fonts } from '../utils/theme';

type Props = {
	icon?: ReactNode,
	title: string,
	style?: StyleProp<ViewStyle>,
	titleStyle?: TextStyle
};

const AttributeCard: React.FC<Props> = (props) => {
	const { icon, title, style, titleStyle } = props;

	return (
		<View style={[styles.container, style]}>
			{icon && icon}
			<Text style={[styles.title, icon ? styles.leftMargin : {}, titleStyle]}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 17,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.white,
		paddingVertical: scaleHeight(7),
		paddingHorizontal: scaleWidth(11)
	},
	title: {
		fontSize: 12,
		fontWeight: '600',
		color: colors.white,
		fontFamily: fonts.poppins.medium
	},
	leftMargin: {
		marginLeft: scaleWidth(7)
	}
})

export { AttributeCard };