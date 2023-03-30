import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import SplashScreen from "../screens/SplashScreen";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();

export default AuthStack = () => {
	const [isLoading, setLoading] = useState(true);
	const [isFirstTime, setFirstTime] = useState(true);

	// useEffect(() => {
	// 	(async () => {
	// 		const isFirstTime = await AsyncStorage.getItem("isFirstTime");
	// 		if (isFirstTime === null) {
	// 			await AsyncStorage.setItem("isFirstTime", "false");
	// 		} else {
	// 			setFirstTime(false);
	// 		}
	// 		setLoading(false);
	// 	})();
	// }, []);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	if (isLoading) {
		return <SplashScreen />;
	}
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				gestureEnabled: true,
				gestureDirection: "horizontal",
			}}
		>
			{isFirstTime && (
				<>
					<Stack.Screen
						name="FirstOnBoard"
						component={OnBoardingScreen}
						initialParams={{
							isActive: 1,
							heading: "Unlock Your True Potential",
							paragraph:
								"Take a journey of self-discovery to unlock your full potential and achieve your goals.",
							img: require("../assets/onboard-1.png"),
						}}
					/>
					<Stack.Screen
						name="SecondOnBoard"
						component={OnBoardingScreen}
						initialParams={{
							isActive: 2,
							heading: "Navigate Your Best Career Path",
							paragraph:
								"Find your best career path based on your unique strengths and interests.",
							img: require("../assets/onboard-2.png"),
						}}
					/>
					<Stack.Screen
						name="ThirdOnBoard"
						component={OnBoardingScreen}
						initialParams={{
							isActive: 3,
							heading: "Start your career journey now!",
							paragraph:
								"Access a variety of learning resources to enhance your skills and knowledge.",
							img: require("../assets/onboard-3.png"),
						}}
					/>
				</>
			)}
			<Stack.Screen name="LoginScreen" component={LoginScreen} />
		</Stack.Navigator>
	);
};
