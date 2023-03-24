import { useEffect, useState } from "react";
import SplashScreen from "./src/screens/SplashScreen";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import AfterLoginScreen from "./src/screens/AfterLoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);
	if (isLoading) {
		return <SplashScreen />;
	}
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					gestureEnabled: true,
					gestureDirection: "horizontal",
				}}
			>
				<Stack.Screen
					name="FirstOnBoard"
					component={OnBoardingScreen}
					initialParams={{
						isActive: 1,
						heading: "Unlock Your True Potential",
						paragraph:
							"Take a journey of self-discovery to unlock your full potential and achieve your goals.",
						img: require("./assets/onboard-1.png"),
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
						img: require("./assets/onboard-2.png"),
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
						img: require("./assets/onboard-3.png"),
					}}
				/>
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
				<Stack.Screen
					name="AfterLoginScreen"
					component={AfterLoginScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
