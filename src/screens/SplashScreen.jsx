import { View, StyleSheet, Image } from "react-native";

export default function SplashScreen() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../../assets/logo.png")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		width: 150,
		height: 150,
		resizeMode: "contain",
	},
});
