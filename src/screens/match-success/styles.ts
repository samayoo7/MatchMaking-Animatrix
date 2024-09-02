import { Platform, StyleSheet } from "react-native";
import { colors, fonts } from "../../utils/theme";
import { scaleHeight, scaleWidth } from "../../utils/dimensions";

export const styles = StyleSheet.create({
	bgImage: {
		flex: 2,
		backgroundColor: colors.black
	},
	heart: {
		zIndex: 2,
		position: 'absolute',
		top: scaleHeight(109),
		left: Platform.OS === 'ios' ? scaleWidth(192) : scaleWidth(185)
	},
	heartLine: {
		marginTop: scaleHeight(250),
		marginLeft: scaleWidth(40)
	},
	profile: {
		zIndex: 1,
		position: 'absolute',
		left: scaleWidth(33),
		top: scaleHeight(110)
	},
	profile1: {
		zIndex: 1,
		position: 'absolute',
		top: scaleHeight(360),
		right: scaleWidth(25.79)
	},
	starsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: scaleWidth(39.19)
	},
	smallStar: {
		marginTop: scaleHeight(7)
	},
	star1: {
		position: 'absolute',
		top: scaleHeight(335),
		right: scaleWidth(47.3)
	},
	bottomContainer: {
		alignSelf: 'center',
		position: 'absolute',
		bottom: scaleHeight(0),
		alignItems: 'center',
		justifyContent: 'center'
	},
	congratsTitle: {
		fontSize: 24,
		fontWeight: '700',
		textAlign: 'center',
		color: colors.white,
		fontFamily: fonts.poppins.regular
	},
	congratsDescription: {
		fontSize: 15,
		opacity: 0.5,
		fontWeight: '400',
		textAlign: 'center',
		color: colors.white,
		marginTop: scaleHeight(5),
		fontFamily: fonts.poppins.regular
	}
});