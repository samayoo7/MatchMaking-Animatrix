import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/splash';
import MatchSuccess from '../screens/match-success';
import Profile from '../screens/profile';

const Stack = createNativeStackNavigator();

const Router: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	if (isLoading) {
		return <Splash />;
	};

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'MatchSuccess'} screenOptions={{
				headerShown: false,
				gestureEnabled: true,
			}}>
				<Stack.Screen
					name='MatchSuccess'
					component={MatchSuccess}
				/>
				<Stack.Screen
					name='Profile'
					component={Profile}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Router;