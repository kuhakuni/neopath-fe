import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { Styles } from "../styles/Styles";
import Colors from "../styles/Colors";
import { useEffect } from "react";
export default AfterTestScreen = () => {
	const navigation = useNavigation();
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate("HomeStack");
		}, 2000);
	}, []);
	return (
		<View
			style={[
				Styles.container,
				{
					paddingTop: 0,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: Colors.white,
				},
			]}
		>
			<Image
				source={require("../assets/congrats.png")}
				style={{ width: "100%", height: 250, resizeMode: "contain" }}
			/>
			<Text
				style={{
					fontSize: 24,
					fontWeight: "bold",
					marginTop: 20,
					color: Colors.primary,
				}}
			>
				Yeay, Congrats!
			</Text>
			<Text
				style={{
					fontSize: 20,
					marginTop: 10,
					textAlign: "center",
				}}
			>
				Let's start your journey as UX Designer with us
			</Text>
		</View>
	);
};
