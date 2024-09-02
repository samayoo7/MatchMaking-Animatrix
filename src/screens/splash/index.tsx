import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StatusBar, View } from 'react-native';
import { styles } from './styles';
import { Star, Star1 } from '../../assets/svgs';
import { images } from '../../assets/images';
import { scaleHeight, scaleWidth } from '../../utils/dimensions';

const Splash: React.FC = () => {
	const rotateValue = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		const startRotation = () => {
			rotateValue.setValue(0);
			Animated.timing(rotateValue, {
				toValue: 1,
				duration: 6000,
				useNativeDriver: true,
				easing: Easing.linear,
			}).start(() => startRotation());
		};

		startRotation();
	}, [rotateValue]);

	const rotateInterpolate = rotateValue.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
	});

	const animatedStyle = {
		transform: [{ rotate: rotateInterpolate }],
	};

	return (
		<>
			<StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
			<View style={styles.container}>
				<Animated.Image style={[styles.logo, animatedStyle]} source={images.logo} />

				<View style={styles.bottomContainer}>
					<Star />
					<Star
						style={styles.smallStar}
						width={scaleWidth(18.32)}
						height={scaleHeight(18.32)}
					/>
					<Star1 style={styles.star1} />
				</View>
			</View>
		</>
	);
};

export default Splash;