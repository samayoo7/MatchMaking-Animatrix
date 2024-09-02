import { StyleSheet } from "react-native";
import { colors } from "../../utils/theme";
import { scaleHeight, scaleWidth } from "../../utils/dimensions";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.black
	},
	logo: {
		alignSelf: 'center'
	},
	bottomContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		flexDirection: 'row',
		left: scaleWidth(38),
		bottom: scaleHeight(134.47)
	},
	smallStar: {
		marginTop: scaleHeight(7)
	},
	star1: {
		bottom: scaleHeight(5),
		marginLeft: scaleWidth(163.79)
	}
});