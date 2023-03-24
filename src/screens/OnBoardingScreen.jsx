import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	Pressable,
	TouchableOpacity,
} from "react-native";
import ButtonPrimary from "../components/ButtonPrimary";
import onBoard2 from "../../assets/onboard-2.svg";
import { Svg, Image as ImageSvg } from "react-native-svg";

const { width, height } = Dimensions.get("window");

const Indicator = ({ isActive }) => {
	return (
		<Pressable
			style={{
				backgroundColor: isActive ? "#3E71F3" : "#D9D9D9",
				width: 10,
				height: 10,
				borderRadius: 5,
				marginRight: 10,
			}}
		/>
	);
};

export default OnBoardingScreen = ({ route, navigation }) => {
	const { isActive, heading, paragraph, img } = route.params;
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.skip}
				onPress={() => navigation.navigate("LoginScreen")}
			>
				<Text style={styles.skip}>{isActive === 3 ? "" : "Skip"}</Text>
			</TouchableOpacity>
			<Image source={img} style={styles.img} />
			{/* <Svg width={"300"} height={height / 2 - 50}>
				<Image href={onBoard2} width={"300"} height={height / 2 - 50} />
			</Svg> */}
			<View style={styles.containerText}>
				<Text style={styles.heading}>{heading}</Text>
				<Text style={styles.paragraph}>{paragraph}</Text>
				<View
					style={{
						flex: 1,
						justifyContent: "flex-end",
						flexDirection: "row",
						alignItems: "center",
						paddingHorizontal: 20,
					}}
				>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							{Array(3)
								.fill()
								.map((_, i) => (
									<Indicator
										isActive={isActive === i + 1}
										key={i}
									/>
								))}
						</View>

						{isActive === 3 && (
							<View
								style={{
									flex: 1,
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "flex-end",
								}}
							>
								<TouchableOpacity
									onPress={() => {
										navigation.goBack();
									}}
								>
									<Text
										style={{
											marginRight: 30,
											fontSize: 18,
											fontWeight: 500,
											display:
												isActive === 1
													? "none"
													: "flex",
										}}
									>
										Back
									</Text>
								</TouchableOpacity>
								<ButtonPrimary
									title="Login"
									style={styles.loginBtn}
									onPress={() =>
										navigation.navigate("LoginScreen")
									}
								/>
							</View>
						)}
						<View
							style={{
								flex: 1,
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "flex-end",
								display: isActive === 3 ? "none" : "flex",
							}}
						>
							<TouchableOpacity
								onPress={() => {
									navigation.goBack();
								}}
							>
								<Text
									style={{
										marginRight: 30,
										fontSize: 18,
										fontWeight: 500,
										display:
											isActive === 1 ? "none" : "flex",
									}}
								>
									Back
								</Text>
							</TouchableOpacity>
							<ButtonPrimary
								title="Next"
								onPress={() =>
									isActive === 1
										? navigation.navigate("SecondOnBoard")
										: navigation.navigate("ThirdOnBoard")
								}
							/>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#F1F7FF",
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		paddingVertical: 50,
		paddingHorizontal: 30,
	},
	containerText: {
		paddingVertical: 50,
		paddingHorizontal: 20,
		zIndex: 1,
		backgroundColor: "white",
		bottom: 0,
		width: width,
		height: height / 2,
		borderTopEndRadius: 30,
		borderTopStartRadius: 30,
	},
	img: {
		width: 300,
		height: height / 2 - 50,
	},
	skip: {
		alignSelf: "flex-end",
		marginBottom: 10,
		fontSize: 20,
		fontWeight: "bold",
	},
	heading: {
		fontSize: 30,
		fontWeight: "500",
		marginBottom: 20,
	},
	paragraph: {
		fontSize: 18,
		color: "#595959",
	},
	loginBtn: {
		flex: 1,
	},
});
