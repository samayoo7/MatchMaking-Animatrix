import { Platform, StyleSheet } from 'react-native';
import { colors, fonts } from '../../utils/theme';
import { _DEVICE_WIDTH, scaleHeight, scaleWidth } from '../../utils/dimensions';

export const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: colors.white
	},
	container: {
		backgroundColor: colors.white,
		paddingBottom: Platform.OS === 'ios' ? scaleHeight(26) : scaleHeight(65)
	},
	paginationContainer: {
		zIndex: 1,
		alignSelf: 'center',
		position: 'absolute',
		flexDirection: 'row',
		top: Platform.OS === 'ios' ? scaleHeight(20) : scaleHeight(60)
	},
	dot: {
		borderRadius: 4,
		width: scaleWidth(68),
		height: scaleHeight(4),
		marginHorizontal: scaleWidth(7)
	},
	activeDot: {
		backgroundColor: colors.white
	},
	inactiveDot: {
		opacity: 0.45,
		backgroundColor: colors.white
	},
	carouselContainer: {
		marginTop: Platform.OS === 'android' ? scaleHeight(40) : 0
	},
	imageContainer: {
		flex: 1
	},
	image: {
		flex: 1,
		borderRadius: 22,
		alignSelf: 'center',
		width: _DEVICE_WIDTH - 17
	},
	titleContainer: {
		position: 'absolute',
		top: Platform.OS === 'ios' ? scaleHeight(300) : scaleHeight(333),
		left: scaleWidth(26)
	},
	name: {
		fontSize: 26,
		fontWeight: '600',
		color: colors.white,
		fontFamily: fonts.poppins.semibold
	},
	titleAttributes: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		marginTop: scaleHeight(4)
	},
	titleAttributeView: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)'
	},
	contentCard: {
		borderRadius: 22,
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 3,
		borderWidth: 1,
		borderColor: colors.lightGrey,
		backgroundColor: colors.white,
		marginTop: scaleHeight(12),
		paddingVertical: scaleHeight(17),
		paddingHorizontal: scaleWidth(17),
		marginHorizontal: scaleWidth(8.5),
	},
	bio: {
		fontSize: 16,
		fontWeight: '500',
		color: colors.black,
		fontFamily: fonts.poppins.semibold
	},
	description: {
		fontSize: 13,
		fontWeight: '400',
		color: colors.black,
		marginTop: scaleHeight(7),
		fontFamily: fonts.poppins.regular
	},
	topMargin: {
		marginTop: scaleHeight(14)
	},
	attribute: {
		margin: scaleHeight(5),
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.15,
		shadowRadius: 3,
		elevation: 3
	},
	bioAttributeTitle: {
		fontWeight: '500',
		color: colors.black
	},
	margin: {
		marginHorizontal: scaleWidth(12)
	},
	greenBorder: {
		borderWidth: 1,
		borderColor: colors.green
	},
	sendMsgBtn: {
		left: 0,
		right: 0,
		position: 'absolute',
		bottom: scaleHeight(15)
	}
});