import { View, Text, StyleSheet, Image } from "react-native";
import ButtonPrimary from "../components/Button.component";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../styles/Colors";
import { Pressable } from "react-native";

const AfterLoginScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Welcome to{" "}
				<Text
					style={{
						fontWeight: "bold",
						color: Colors.primary,
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
			<View
				style={{
					marginTop: 20,
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<MaterialCommunityIcons
					name="clock-time-three-outline"
					size={24}
					color="black"
				/>
				<Text
					style={{
						marginStart: 5,
					}}
				>
					15 - 20 minutes
				</Text>
			</View>
			<Image
				style={styles.img}
				source={require("../assets/afterLogin.png")}
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
					onPress={() => navigation.navigate("PersonalFormScreen")}
				/>
				<Pressable
					style={{
						marginTop: 15,
					}}
					onPress={() => {}}
				>
					<Text
						style={{
							fontSize: 16,
							color: "#838383",
						}}
					>
						Skip for now
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingTop: 50,
		backgroundColor: Colors.white,
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
