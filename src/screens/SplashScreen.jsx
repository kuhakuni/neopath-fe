import { SafeAreaView, StyleSheet, Image } from "react-native";
import Colors from "../styles/Colors";

export default function SplashScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Image style={styles.logo} source={require("../assets/logo.png")} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white,
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		width: 150,
		height: 150,
		resizeMode: "contain",
	},
});
