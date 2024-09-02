import React, { useState } from 'react';
import { FlatList, Image, Platform, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { styles } from './styles';
import { AttributeCard, PrimaryButton } from '../../components';
import { images } from '../../assets/images';
import { BeerMugs, Cigarette, Gym, Headphone, HighVoltage, LocationPin, Notebook, Om, Taurus, Women } from '../../assets/svgs';
import { _DEVICE_WIDTH, scaleHeight, scaleWidth } from '../../utils/dimensions';
import { colors } from '../../utils/theme';

const array = [...new Array(4).keys()];

const aboutMe = [
	{
		id: '1',
		title: 'Women',
		icon: <Women />
	},
	{
		id: '2',
		title: 'Hindu',
		icon: <Om />
	},
	{
		id: '3',
		title: 'Taurus',
		icon: <Taurus />
	},
	{
		id: '4',
		title: 'Never',
		icon: <BeerMugs />
	},
	{
		id: '6',
		title: 'Sometimes',
		icon: <Cigarette />
	}
];

const Profile: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<>
			<StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
			<SafeAreaView style={styles.safeArea}>
				<ScrollView contentContainerStyle={styles.container}>

					{/* ******************** Carousel Card ******************** */}
					<View style={styles.paginationContainer}>
						{array.map((_, index) => (
							<View
								key={index}
								style={[
									styles.dot,
									index === activeIndex ? styles.activeDot : styles.inactiveDot,
								]}
							/>
						))}
					</View>

					<Carousel
						loop={false}
						data={array}
						width={_DEVICE_WIDTH}
						height={scaleHeight(382)}
						pagingEnabled={true}
						snapEnabled={true}
						style={styles.carouselContainer}
						onSnapToItem={(index) => setActiveIndex(index)}
						renderItem={() => (
							<View style={styles.imageContainer}>
								<Image
									resizeMode='cover'
									style={styles.image}
									source={images.profileImage}
								/>
							</View>
						)}
					/>

					<View style={styles.titleContainer}>
						<Text style={styles.name}>Alisha Singh</Text>
						<View style={styles.titleAttributes}>
							<AttributeCard
								icon={<LocationPin />}
								title={'2 km away'}
								style={styles.titleAttributeView}
							/>
							<AttributeCard
								icon={<HighVoltage />}
								title={'Level 3'}
								style={[styles.titleAttributeView, { marginHorizontal: scaleWidth(9) }]}
							/>
							<AttributeCard
								title={'Long-Term'}
								style={styles.titleAttributeView}
							/>
						</View>
					</View>

					{/* ******************** Bio Card ******************** */}
					<View style={styles.contentCard}>
						<Text style={styles.bio}>Bio</Text>
						<Text style={styles.description}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form. Lorem ipsum is a placeholder text used to demonstrate the visual form</Text>
						<Text style={[styles.bio, styles.topMargin]}>About Me</Text>
						<View style={styles.titleAttributes}>
							<FlatList
								data={aboutMe}
								numColumns={3}
								scrollEnabled={false}
								keyExtractor={(item) => item.id}
								renderItem={({ item }) => <AttributeCard
									title={item.title}
									icon={item.icon}
									style={styles.attribute}
									titleStyle={styles.bioAttributeTitle}
								/>}
							/>
						</View>
					</View>

					{/* ******************** Common Interests ******************** */}
					<View style={[styles.contentCard, { marginTop: scaleHeight(9) }]}>
						<Text style={styles.bio}>Common Interests</Text>
						<View style={styles.titleAttributes}>
							<AttributeCard
								title={'Music'}
								icon={<Headphone />}
								style={[styles.attribute, styles.greenBorder]}
								titleStyle={styles.bioAttributeTitle}
							/>
							<AttributeCard
								title={'Books'}
								icon={<Notebook />}
								style={[styles.attribute, styles.greenBorder]}
								titleStyle={styles.bioAttributeTitle}
							/>
							<AttributeCard
								title={'Gym'}
								icon={<Gym />}
								style={[styles.attribute, styles.greenBorder]}
								titleStyle={styles.bioAttributeTitle}
							/>
						</View>
					</View>
				</ScrollView>
				<PrimaryButton
					title='Send Message'
					onPress={() => { }}
					style={styles.sendMsgBtn}
				/>
			</SafeAreaView>
		</>
	);
};

export default Profile;