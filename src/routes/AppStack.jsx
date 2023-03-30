import { View, SafeAreaView, Pressable } from "react-native";
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AfterLoginScreen from "../screens/AfterLoginScreen";
import PersonalFormScreen from "../screens/PersonalFormScreen";
import TestScreen from "../screens/TestScreen";
import ResultsScreen from "../screens/ResultsScreen";
import AfterTestScreen from "../screens/AfterTestScreen";
import DashboardScreen from "../screens/DashboardScreen";
import NavDashboard3 from "../components/NavDashboard3.component";
// src\components\NavDashboard3.component.jsx
import NavDashboard2 from "../components/NavDashboard2.component";
import NavDashboard1 from "../components/NavDashboard1.component";
import NavDashboard from "../components/NavDashboard.component";
import NavProfile1 from "../components/NavProfile1.component";
import NavProfile from "../components/NavProfile.component";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
	const [bottomTabItemsNormal] = useState([
		<NavDashboard2 />,
		<NavDashboard />,
		<NavProfile />,
	]);
	const [bottomTabItemsActive] = useState([
		<NavDashboard3 />,
		<NavDashboard1 />,
		<NavProfile1 />,
	]);
	return (
		<Tab.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName="Dashboard"
			tabBar={({ state, descriptors, navigation }) => {
				const activeIndex = state.index;
				return (
					<SafeAreaView>
						<View
							style={{
								alignItems: "center",
								flexDirection: "row",
								justifyContent: "space-around",
								backgroundColor: "#fff",

								elevation: 5,
							}}
						>
							{bottomTabItemsNormal.map((item, index) => {
								const isFocused = state.index === index;
								return (
									<Pressable
										key={index}
										onPress={() => {
											navigation.navigate({
												name: state.routes[index].name,
												merge: true,
											});
										}}
									>
										{activeIndex === index
											? bottomTabItemsActive[index] ||
											  item
											: item}
									</Pressable>
								);
							})}
						</View>
					</SafeAreaView>
				);
			}}
		>
			<Tab.Screen
				name="DashboardScreen"
				component={DashboardScreen}
				options={{ headerShown: false }}
			/>
			{/* <Tab.Screen
				name="Profile"
				component={Profile}
				options={{ headerShown: false }}
			/> */}
		</Tab.Navigator>
	);
};

export default AppStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				gestureEnabled: true,
				gestureDirection: "horizontal",
			}}
		>
			<Stack.Screen
				name="AfterLoginScreen"
				component={AfterLoginScreen}
			/>
			<Stack.Screen
				name="PersonalFormScreen"
				component={PersonalFormScreen}
			/>
			<Stack.Screen name="TestScreen" component={TestScreen} />
			<Stack.Screen name="ResultsScreen" component={ResultsScreen} />
			<Stack.Screen name="AfterTestScreen" component={AfterTestScreen} />
			<Stack.Screen name="HomeStack" component={HomeStack} />
		</Stack.Navigator>
	);
};
