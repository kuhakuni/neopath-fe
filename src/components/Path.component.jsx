import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Padding, Color, FontSize, Border } from "../styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../styles/Colors";

export const Path = ({ titleStep, isActive, isDone, isLocked, isTest }) => {
	const navigate = useNavigation();
	const route = !isTest ? "CourseDetailScreen" : "ReflectiveTestScreen";
	return (
		<>
			<View
				style={[
					styles.button,
					{
						marginVertical: 15,
					},
				]}
			>
				<Image
					style={[
						styles.sliderContainerIcon,
						isDone && {
							borderWidth: 1,
							borderColor: Color.royalblue_100,
							borderRadius: 50,
						},
					]}
					resizeMode="cover"
					source={require("../assets/slider-container1.png")}
				/>
				<View style={[styles.ml8]}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<TouchableOpacity
							disabled={isLocked}
							onPress={() => {
								navigate.navigate(route);
							}}
							style={[
								styles.textInput,
								styles.button1FlexBox,
								isActive && {
									backgroundColor: Color.royalblue_100,
								},
								isTest && {
									backgroundColor: "#D2D8E1",
									paddingHorizontal: 20,
									paddingVertical: 7,
								},
							]}
						>
							<Text
								style={[
									styles.learnToConduct,
									styles.microsoftFlexBox,
									isActive && {
										color: Color.white,
									},
									isTest && {
										color: "#838383",
									},
								]}
							>
								{titleStep}
							</Text>
						</TouchableOpacity>
						{isActive && (
							<Text
								style={{
									color: Colors.primary,
									fontSize: 16,
									marginLeft: 5,
									paddingVertical: 5,
									paddingHorizontal: 10,
									borderWidth: 1,
									borderColor: Colors.primary,
									borderRadius: 50,
								}}
							>
								Done
							</Text>
						)}
						{isDone && (
							<MaterialIcons
								name="verified"
								size={24}
								style={{
									marginLeft: 5,
								}}
								color={Colors.primary}
							/>
						)}
					</View>
					<View
						style={[
							styles.buttonContainer,
							styles.mt4,
							{
								display: isTest ? "none" : "flex",
							},
						]}
					>
						<View style={[styles.button1, styles.button1FlexBox]}>
							<Image
								style={styles.vectorIcon}
								resizeMode="cover"
								source={require("../assets/vector1.png")}
							/>
						</View>
						<View
							style={[
								styles.button1,
								styles.ml4,
								styles.button1FlexBox,
							]}
						>
							<Image
								style={styles.buttonIcon}
								resizeMode="cover"
								source={require("../assets/button4.png")}
							/>
							<Text
								style={[
									styles.microsoft,
									styles.ml4,
									styles.microsoftFlexBox,
								]}
							>
								Microsoft
							</Text>
						</View>
					</View>
				</View>
			</View>
		</>
	);
};
const styles = StyleSheet.create({
	ml4: {
		marginLeft: 4,
	},
	mt4: {
		marginTop: 4,
	},
	ml8: {
		marginLeft: 8,
	},
	button1FlexBox: {
		paddingVertical: Padding.p_11xs,
		alignItems: "center",
		flexDirection: "row",
	},
	microsoftFlexBox: {
		textAlign: "left",
		color: Color.black,
	},
	sliderContainerIcon: {
		width: 18,
		height: 18,
	},
	learnToConduct: {
		fontSize: FontSize.size_base,
	},
	textInput: {
		borderRadius: Border.br_xl,
		backgroundColor: Color.background,
		paddingHorizontal: Padding.p_xs,
		alignSelf: "stretch",
	},
	vectorIcon: {
		width: 57,
		height: 8,
	},
	button1: {
		borderRadius: Border.br_6xl,
		backgroundColor: Color.grey1,
		height: 24,
		paddingHorizontal: Padding.p_4xs,
	},
	buttonIcon: {
		width: 16,
		height: 16,
		overflow: "hidden",
	},
	microsoft: {
		fontSize: FontSize.size_xs,
		fontWeight: "500",
	},
	buttonContainer: {
		flexDirection: "row",
		alignSelf: "stretch",
	},
	button: {
		zIndex: 2,
		alignItems: "center",
		flexDirection: "row",
	},
});
