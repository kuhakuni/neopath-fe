import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useAuth } from "../config/Auth";

export default Router = () => {
	const { authData } = useAuth();

	console.log(authData);
	return (
		<NavigationContainer>
			{authData ? <AppStack /> : <AuthStack />}
		</NavigationContainer>
	);
};
