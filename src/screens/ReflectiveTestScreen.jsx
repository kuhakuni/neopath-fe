import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
	Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Chips from "../components/Chips.component";
import ButtonPrimary from "../components/Button.component";
import Colors from "../styles/Colors";

const TestCard = ({ title, description, img, score, to }) => {
	return (
		<View style={styles.cardTest}>
			<Image
				source={img}
				style={{
					resizeMode: "contain",
					width: "100%",
					height: 100,
				}}
			/>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{description}</Text>
			<Text style={styles.score}>Score: {score || "-"} / 100</Text>
			<ButtonPrimary
				title={"Take the test"}
				fontSize={14}
				isBorder
				onPress={to}
			/>
		</View>
	);
};
export default ReflectiveTestScreen = () => {
	const navigation = useNavigation();
	return (
		<View
			style={{
				backgroundColor: Colors.white,
				flex: 1,
			}}
		>
			<View
				style={[
					{
						backgroundColor: "#3D55D4",
						paddingBottom: 20,
						borderBottomRightRadius: 30,
						borderBottomLeftRadius: 30,
					},
				]}
			>
				<View
					style={{
						backgroundColor: Colors.primary,
						paddingTop: StatusBar.currentHeight + 30,
						paddingBottom: 25,
						paddingHorizontal: 25,
						borderBottomRightRadius: 30,
						borderBottomLeftRadius: 30,
					}}
				>
					<TouchableOpacity
						style={styles.arrowContainer}
						onPress={() => navigation.goBack()}
					>
						<AntDesign
							name="arrowleft"
							size={30}
							color={Colors.primary}
						/>
					</TouchableOpacity>
					<Text
						style={{
							color: Colors.white,
							fontSize: 24,
							fontWeight: "600",
							marginBottom: 10,
						}}
					>
						Reflection Test
					</Text>
					<Text
						style={{
							color: Colors.white,
							fontSize: 18,
							fontWeight: "500",
						}}
					>
						Get confidence with your skills and career right here!
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "flex-start",
						paddingHorizontal: 30,
						marginTop: 15,
						borderBottomRightRadius: 30,
						borderBottomLeftRadius: 30,
					}}
				>
					<View
						style={{
							backgroundColor: Colors.white,
							padding: 10,
							borderRadius: 50,
							marginRight: 10,
						}}
					>
						<Image
							style={{
								width: 24,
								height: 24,
							}}
							resizeMode="contain"
							source={require("../assets/learn.png")}
						/>
					</View>
					<Text
						style={{
							color: Colors.white,
							fontSize: 16,
							paddingRight: 35,
						}}
					>
						You have to pass all the test before continuing to the
						next level!
					</Text>
				</View>
			</View>
			<View
				style={{
					paddingHorizontal: 30,
					marginTop: 20,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 10,
					}}
				>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "500",
							marginRight: 10,
						}}
					>
						Current Level :
					</Text>
					<Chips
						title={"Novice"}
						bgColor={Colors.secondary}
						textColor={Colors.white}
					/>
				</View>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "500",
					}}
				>
					Test Categories
				</Text>
				<View style={styles.cardContainer}>
					<TestCard
						title={"Suitability"}
						description={"Am I a good fit for a UX designer?"}
						img={require("../assets/suitability-img.png")}
						to={() => navigation.navigate("SuitabilityTestScreen")}
					/>
					<TestCard
						title={"Cognitive Ability"}
						description={"Know your cognitive ability"}
						img={require("../assets/cognitive-img.png")}
						score={9.3}
						to={() => navigation.navigate("CognitiveTestScreen")}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	arrowContainer: {
		backgroundColor: "#F1F7FF",
		borderRadius: 10,
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 15,
	},
	cardContainer: {
		backgroundColor: Colors.white,
		borderRadius: 10,
		marginTop: 20,
		flexDirection: "row",
		gap: 5,
		justifyContent: "center",
	},
	cardTest: {
		maxWidth: "50%",
		backgroundColor: Colors.white,
		borderRadius: 10,
		marginRight: 5,
		padding: 5,
		// borderWidth: 1,
		// borderColor: Colors.primary,
	},
	title: {
		fontSize: 20,
		fontWeight: "500",
		marginVertical: 5,
	},
	description: {
		fontSize: 14,
		color: "#838383",
	},
	score: {
		fontSize: 14,
		marginTop: 5,
		marginBottom: 15,
	},
});
