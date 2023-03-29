import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AfterLoginScreen from "../screens/AfterLoginScreen";
import PersonalFormScreen from "../screens/PersonalFormScreen";
import TestScreen from "../screens/TestScreen";
import ResultsScreen from "../screens/ResultsScreen";

const Stack = createNativeStackNavigator();

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
		</Stack.Navigator>
	);
};
