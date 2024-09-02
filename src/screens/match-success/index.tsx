import React, { useEffect, useRef } from 'react';
import { Animated, Easing, ImageBackground, ScrollView, StatusBar, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PrimaryButton } from '../../components';
import { styles } from './styles';
import { images } from '../../assets/images';
import { Heart, Star, Star1 } from '../../assets/svgs';
import { scaleHeight, scaleWidth } from '../../utils/dimensions';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

type RootStackParamList = {
	Profile: undefined
};
type MatchSuccessNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

const MatchSuccess: React.FC = () => {
	const navigation = useNavigation<MatchSuccessNavigationProp>();

	// For rotation and scale of profile images
	const scaleAnim = useRef(new Animated.Value(0)).current;
	const rotateAnim = useRef(new Animated.Value(0)).current;

	// For opacity and scale of purple heart image
	const opacityAnim = useRef(new Animated.Value(0)).current;
	const scaleHeart = useRef(new Animated.Value(0)).current;

	// For rotation of stars
	const rotateValue = useRef(new Animated.Value(0)).current;

	// For draw path of heart-shape line 
	const animationValue = useRef(new Animated.Value(0)).current;

	// To Animate the draw effect
	useEffect(() => {
		Animated.timing(animationValue, {
			toValue: 1,
			duration: 3000,
			useNativeDriver: true,
		}).start();
	}, [animationValue]);

	const pathLength = 1000;
	const animatedStrokeDashoffset = animationValue.interpolate({
		inputRange: [0, 1],
		outputRange: [pathLength, 0],
	});

	// To Animate the stars
	useEffect(() => {
		const startRotation = () => {
			rotateValue.setValue(0);
			Animated.timing(rotateValue, {
				toValue: 1,
				duration: 9000,
				useNativeDriver: true,
				easing: Easing.linear,
			}).start(() => startRotation()); // Start rotation again
		};

		startRotation();
	}, [rotateValue]);
	const rotateStars = rotateValue.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
	});
	const animatedStars = {
		transform: [{ rotate: rotateStars }],
	};

	useEffect(() => {
		Animated.parallel([
			// To scale animation from small to large
			Animated.timing(scaleAnim, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}),
			// To rotate the profile image
			Animated.timing(rotateAnim, {
				toValue: 1,
				duration: 1000,
				easing: Easing.linear,
				useNativeDriver: true,
			}),
		]).start(() => {
			// To animate opacity of heart
			Animated.timing(opacityAnim, {
				toValue: 1,
				duration: 2000,
				useNativeDriver: true,
			}).start(() => {
				Animated.sequence([
					Animated.timing(scaleHeart, {
						toValue: 1.1, // Scale up slightly
						duration: 150,
						useNativeDriver: true,
					}),
					Animated.timing(scaleHeart, {
						toValue: 0.95, // Scale down slightly
						duration: 150,
						useNativeDriver: true,
					}),
					Animated.timing(scaleHeart, {
						toValue: 1, // Return to normal scale
						duration: 150,
						useNativeDriver: true,
					}),
				]).start();
			});
		});
	}, []);

	const rotateInterpolate = rotateAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
	});

	const rotateInterpolate1 = rotateAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['360deg', '0deg'],
	});

	const animatedStyle = {
		transform: [
			{ scale: scaleAnim }, // Scale the profile image
			{ rotate: rotateInterpolate }, // Rotate the profile image
		],
	};

	const animatedStyle1 = {
		transform: [
			{ scale: scaleAnim }, // Scale the second profile image
			{ rotate: rotateInterpolate1 }, // Rotate the second profile image
		],
	};

	const handleNavigation = () => {
		navigation.navigate('Profile');
	};

	return (
		<>
			<StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
			<ScrollView bounces={false} contentContainerStyle={{ flex: 1 }}>
				<ImageBackground style={styles.bgImage} source={images.matchSuccess}>

					{/* ******** Purple Heart ******** */}
					<Animated.View style={[styles.heart, { transform: [{ scale: scaleHeart }] }]}>
						<Heart />
					</Animated.View>

					{/* ******** Profile Image 1 ******** */}
					<Animated.Image style={[styles.profile, animatedStyle]} source={images.profile} />

					{/* <Animated.View style={{ opacity: opacityAnim }}>
						<HeartLine style={styles.heartLine} />
					</Animated.View> */}

					{/* ******** Draw heart shape lining ******** */}
					<Svg style={styles.heartLine} height="180" width="300" viewBox="0 40 250 200">
						<Defs>
							<LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
								<Stop offset="0%" stopColor="#736CD3" />
								<Stop offset="50%" stopColor="#3CC4B0" />
								<Stop offset="100%" stopColor="#FB8E95" />
							</LinearGradient>
						</Defs>
						<AnimatedPath
							d="M2.50226 1.0643C-4.81795 53.0701 39.057 161.961 121.282 142.641C190.48 126.381 205.5 92.5003 150.999 92.5001C144.829 81.5456 158.999 58.5003 157.722 48.4326C154.203 20.6783 54.3749 100.723 93.293 169.835C124.427 225.125 183.057 238.406 208.48 238.136" // Replace with your SVG path data
							stroke="url(#gradient)"
							strokeWidth="3"
							fill="none"
							strokeDasharray={pathLength}
							strokeDashoffset={animatedStrokeDashoffset}
						/>
					</Svg>

					{/* ******** Profile Image 2 ******** */}
					<Animated.Image style={[styles.profile1, animatedStyle1]} source={images.profile1} />

					{/* ******** Right side star ******** */}
					<Animated.View style={[styles.star1, animatedStars]}>
						<Star1 />
					</Animated.View>

					{/* ******** Left side stars ******** */}
					<Animated.View style={styles.starsContainer}>
						<Animated.View style={animatedStars}>
							<Star />
						</Animated.View>
						<Animated.View style={[styles.smallStar, animatedStars]}>
							<Star
								// style={styles.smallStar}
								width={scaleWidth(18.32)}
								height={scaleHeight(18.32)}
							/>
						</Animated.View>
					</Animated.View>

					{/* ******** Content ******** */}
					<View style={styles.bottomContainer}>
						<Text style={styles.congratsTitle}>Congratulations!</Text>
						<Text style={styles.congratsDescription}>You and nancy liked each other</Text>
					</View>
				</ImageBackground>
				<ImageBackground
					style={[styles.bgImage, { flex: 0.5 }]}
					source={images.matchSuccess1}
				>
					<PrimaryButton
						title='Go to profile'
						onPress={handleNavigation}
					/>
				</ImageBackground>
			</ScrollView>
		</>
	);
};

export default MatchSuccess;
