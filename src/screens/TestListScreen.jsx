import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Foundation } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { Styles } from "../styles/Styles";
import Colors from "../styles/Colors";
import { StyleSheet } from "react-native";
export default TestListScreen = () => {
	const navigation = useNavigation();
	return (
		<ScrollView>
			<View
				style={[
					Styles.container,
					{
						backgroundColor: Colors.white,
					},
				]}
			>
				<View
					style={{
						position: "relative",
					}}
				>
					<TouchableOpacity
						style={[styles.arrowContainer]}
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
							fontSize: 24,
							fontWeight: "500",
							textAlign: "center",
							marginTop: 5,
						}}
					>
						Test
					</Text>
				</View>
				<View
					style={{
						padding: 20,
						marginTop: 30,
						backgroundColor: "#F1F7FF",
						borderRadius: 10,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "flex-start",
						gap: 10,
					}}
				>
					<Progress.Circle
						size={80}
						unfilledColor="#ADCEFF"
						color={Colors.primary}
						progress={0.25}
						direction="counter-clockwise"
						thickness={7}
						formatText={() => {
							return "25%";
						}}
						showsText
						borderWidth={0}
						textStyle={{
							fontSize: 20,
							fontWeight: "500",
						}}
						strokeCap="round"
					/>
					<View>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "500",
							}}
						>
							1/4 Test is done
						</Text>
						<Text>Please complete your test</Text>
					</View>
				</View>

				<View
					style={{
						marginTop: 20,
						backgroundColor: "#FF4B4B",
						borderRadius: 10,
						padding: 30,
					}}
				>
					<Text
						style={{
							color: Colors.white,
							fontSize: 18,
							fontWeight: "500",
						}}
					>
						Aptitude Recognition Test
					</Text>
					<Text
						style={{
							color: Colors.white,
							fontSize: 14,
							fontStyle: "italic",
							marginBottom: 10,
						}}
					>
						Uncover Your Hidden Talents
					</Text>
					<View
						style={{
							flexDirection: "row",
							alignItems: "flex-end",
							justifyContent: "space-between",
						}}
					>
						<View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									gap: 10,
									marginBottom: 5,
								}}
							>
								<Foundation
									name="dollar-bill"
									size={18}
									color={Colors.white}
								/>
								<Text
									style={{
										color: Colors.white,
									}}
								>
									Free
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									gap: 10,
								}}
							>
								<AntDesign
									name="checkcircleo"
									size={18}
									color={Colors.white}
								/>
								<Text
									style={{
										color: Colors.white,
									}}
								>
									Done
								</Text>
							</View>
						</View>
						<TouchableOpacity
							onPress={() => navigation.navigate("ResultsScreen")}
							style={{
								flexDirection: "row",
								alignItems: "center",
								gap: 5,
							}}
						>
							<Text
								style={{
									color: Colors.white,
								}}
							>
								See result
							</Text>
							<AntDesign
								name="arrowright"
								size={18}
								color={Colors.white}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={{
						marginTop: 20,
						backgroundColor: "#00B63E",
						borderRadius: 10,
						padding: 30,
					}}
				>
					<Text
						style={{
							color: Colors.white,
							fontSize: 18,
							fontWeight: "500",
						}}
					>
						Personality Test
					</Text>
					<Text
						style={{
							color: Colors.white,
							fontSize: 14,
							fontStyle: "italic",
							marginBottom: 10,
						}}
					>
						Explore your uniqueness
					</Text>
					<View
						style={{
							flexDirection: "row",
							alignItems: "flex-end",
							justifyContent: "space-between",
						}}
					>
						<View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									gap: 10,
									marginBottom: 5,
								}}
							>
								<Foundation
									name="dollar-bill"
									size={18}
									color={Colors.white}
								/>
								<Text
									style={{
										color: Colors.white,
									}}
								>
									Free
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									gap: 10,
								}}
							>
								<AntDesign
									name="checkcircleo"
									size={18}
									color={Colors.white}
								/>
								<Text
									style={{
										color: Colors.white,
									}}
								>
									15 - 20 Minutes
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								gap: 5,
							}}
						>
							<Text
								style={{
									color: Colors.white,
								}}
							>
								Take the test
							</Text>
							<AntDesign
								name="arrowright"
								size={18}
								color={Colors.white}
							/>
						</View>
					</View>
				</View>
				<View
					style={{
						marginTop: 20,
						backgroundColor: Colors.primary,
						borderRadius: 10,
						padding: 30,
					}}
				>
					<Text
						style={{
							color: Colors.white,
							fontSize: 18,
							fontWeight: "500",
						}}
					>
						Intelligence Test
					</Text>
					<Text
						style={{
							color: Colors.white,
							fontSize: 14,
							fontStyle: "italic",
							marginBottom: 10,
						}}
					>
						Discover your potential
					</Text>
					<View
						style={{
							flexDirection: "row",
							alignItems: "flex-end",
							justifyContent: "space-between",
						}}
					>
						<View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									gap: 10,
									marginBottom: 5,
								}}
							>
								<Foundation
									name="dollar-bill"
									size={18}
									color={Colors.white}
								/>
								<Text
									style={{
										color: Colors.white,
									}}
								>
									10 credit
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									gap: 10,
								}}
							>
								<AntDesign
									name="checkcircleo"
									size={18}
									color={Colors.white}
								/>
								<Text
									style={{
										color: Colors.white,
									}}
								>
									15 - 20 Minutes
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								gap: 5,
							}}
						>
							<Text
								style={{
									color: Colors.white,
								}}
							>
								Take the test
							</Text>
							<AntDesign
								name="arrowright"
								size={18}
								color={Colors.white}
							/>
						</View>
					</View>
				</View>
				<View
					style={{
						marginTop: 20,
						backgroundColor: "#EE9D22",
						borderRadius: 10,
						padding: 30,
					}}
				>
					<Text
						style={{
							color: Colors.white,
							fontSize: 18,
							fontWeight: "500",
						}}
					>
						Work Style Test
					</Text>
					<Text
						style={{
							color: Colors.white,
							fontSize: 14,
							fontStyle: "italic",
							marginBottom: 10,
						}}
					>
						Know your best work style
					</Text>
					<View
						style={{
							flexDirection: "row",
							alignItems: "flex-end",
							justifyContent: "space-between",
						}}
					>
						<View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									gap: 10,
									marginBottom: 5,
								}}
							>
								<Foundation
									name="dollar-bill"
									size={18}
									color={Colors.white}
								/>
								<Text
									style={{
										color: Colors.white,
									}}
								>
									10 credit
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									gap: 10,
								}}
							>
								<AntDesign
									name="checkcircleo"
									size={18}
									color={Colors.white}
								/>
								<Text
									style={{
										color: Colors.white,
									}}
								>
									Done
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								gap: 5,
							}}
						>
							<Text
								style={{
									color: Colors.white,
								}}
							>
								Take the test
							</Text>
							<AntDesign
								name="arrowright"
								size={18}
								color={Colors.white}
							/>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
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
		position: "absolute",
	},
});
