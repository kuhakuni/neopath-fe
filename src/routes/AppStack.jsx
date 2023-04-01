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
import ProfileScreen from "../screens/ProfileScreen";
import PathScreen from "../screens/PathScreen";
import CourseDetailScreen from "../screens/CourseDetailScreen";
import ReflectiveTestScreen from "../screens/ReflectiveTestScreen";
import CognitiveTestScreen from "../screens/CognitiveTestScreen";
import SuitabilityTestScreen from "../screens/SuitabilityTestScreen";
import ReflectionResultScreen from "../screens/ReflectionResultScreen";
import LiveEventScreen from "../screens/LiveEventScreen";
import ELearningScreen from "../screens/ELearningScreen";
import MentorScreen from "../screens/MentorScreen";
import NavDashboard3 from "../components/NavDashboard3.component";
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
								backgroundColor: "#f1F7FF",

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
			<Tab.Screen name="DashboardScreen" component={DashboardScreen} />
			<Tab.Screen name="PathScreen" component={PathScreen} />
			<Tab.Screen name="ProfileScreen" component={ProfileScreen} />
			<Tab.Screen name="LiveEventScreen" component={LiveEventScreen} />
			<Tab.Screen name="ELearningScreen" component={ELearningScreen} />
			<Tab.Screen name="MentorScreen" component={MentorScreen} />
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
			<Stack.Screen
				name="CourseDetailScreen"
				component={CourseDetailScreen}
			/>
			<Stack.Screen
				name="ReflectiveTestScreen"
				component={ReflectiveTestScreen}
			/>
			<Stack.Screen
				name="SuitabilityTestScreen"
				component={SuitabilityTestScreen}
			/>
			<Stack.Screen
				name="CognitiveTestScreen"
				component={CognitiveTestScreen}
			/>
			<Stack.Screen
				name="ReflectionResultScreen"
				component={ReflectionResultScreen}
			/>
		</Stack.Navigator>
	);
};
