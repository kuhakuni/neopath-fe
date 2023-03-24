import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import ButtonPrimary from "../components/ButtonPrimary";

const { height } = Dimensions.get("window");
const AfterLoginScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Welcome to{" "}
				<Text
					style={{
						fontWeight: "bold",
						color: "#3E71F3",
					}}
				>
					NeoPath
				</Text>
				!
			</Text>
			<View
				style={{
					alignItems: "center",
					marginTop: 35,
				}}
			>
				<Text
					style={{
						fontSize: 24,
					}}
				>
					Aptitude Recognition Test
				</Text>
				<Text
					style={{
						fontSize: 14,
						fontStyle: "italic",
					}}
				>
					Uncover your hidden talents
				</Text>
			</View>
			<Text
				style={{
					marginTop: 20,
				}}
			>
				15 - 20 minutes
			</Text>
			<Image
				style={styles.img}
				source={require("../../assets/afterLogin.png")}
			/>
			<View
				style={{
					marginTop: 25,
					alignItems: "center",
				}}
			>
				<ButtonPrimary
					title="Take a Test"
					fontSize={18}
					onPress={() => navigation.navigate("TestScreen")}
				/>
				<Text
					style={{
						marginTop: 20,
						fontSize: 16,
						color: "#838383",
					}}
				>
					Skip for now
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingTop: 50,
		backgroundColor: "#ffffff",
		maxHeight: height,
	},
	title: {
		marginTop: 20,
		fontSize: 24,
		fontWeight: "500",
	},
	img: {
		marginTop: 50,
		width: 300,
		height: 300,
		resizeMode: "contain",
	},
});

export default AfterLoginScreen;
