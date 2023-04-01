import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
	FontAwesome,
	Feather,
	MaterialIcons,
	MaterialCommunityIcons,
	SimpleLineIcons,
} from "@expo/vector-icons";
import { Styles } from "../styles/Styles";
import Colors from "../styles/Colors";
import { useAuth } from "../config/Auth";
export default ProfileScreen = ({ navigation }) => {
	const auth = useAuth();

	const handleLogout = () => {
		auth.signOut();
	};

	return (
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
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text
					style={{
						color: Colors.black,
						fontSize: 20,
						fontWeight: "500",
					}}
				>
					Profile
				</Text>
			</View>
			<View
				style={{
					alignSelf: "center",
				}}
			>
				<Image
					source={require("../assets/profile-img.png")}
					style={{
						width: 150,
						height: 150,
						alignSelf: "center",
						marginTop: 30,
						marginBottom: 20,
						resizeMode: "contain",
					}}
				/>
				<Text
					style={{
						textAlign: "center",
						fontSize: 20,
						fontWeight: "500",
					}}
				>
					Alfian Rizky
				</Text>
				<Text
					style={{
						textAlign: "center",
						fontSize: 16,
						color: Colors.gray,
					}}
				>
					alfian@email.edu.my
				</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "flex-start",
					alignItems: "center",
					backgroundColor: "#F1F7FF",
					marginTop: 30,
					paddingVertical: 20,
					paddingHorizontal: 30,
					borderRadius: 15,
					gap: 10,
				}}
			>
				<View
					style={{
						backgroundColor: Colors.primary,
						borderRadius: 50,
						padding: 20,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text
						style={{
							color: Colors.white,
							fontSize: 20,
							fontWeight: "500",
						}}
					>
						UX
					</Text>
				</View>
				<View>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "500",
						}}
					>
						Your Role: UX Designer
					</Text>
					<View
						style={{
							marginTop: 10,
							flexDirection: "row",
						}}
					>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("ResultsScreen");
							}}
							style={{
								backgroundColor: "transparent",
								paddingVertical: 3,
								paddingHorizontal: 10,
								borderRadius: 15,
								borderWidth: 1,
								borderColor: Colors.primary,
							}}
						>
							<Text
								style={{
									color: Colors.primary,
									fontWeight: "500",
									fontSize: 16,
								}}
							>
								Change Role
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View>
				<View
					style={{
						height: 1,
						backgroundColor: "#EDEDED",
						width: "100%",
						marginTop: 15,
					}}
				></View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginTop: 10,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							gap: 10,
						}}
					>
						<FontAwesome
							name="dollar"
							size={24}
							color="black"
							style={{
								minWidth: 30,
								paddingLeft: 7,
							}}
						/>
						<Text
							style={{
								fontSize: 16,
							}}
						>
							MyCredit
						</Text>
					</View>
					<Text
						style={{
							color: Colors.gray,
						}}
					>
						20.00
					</Text>
				</View>
			</View>
			<View>
				<View
					style={{
						height: 1,
						backgroundColor: "#EDEDED",
						width: "100%",
						marginTop: 15,
					}}
				></View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginTop: 10,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							gap: 10,
						}}
					>
						<Feather
							name="phone-call"
							size={24}
							color="black"
							style={{
								minWidth: 30,
							}}
						/>
						<Text
							style={{
								fontSize: 16,
							}}
						>
							Contact Us
						</Text>
					</View>
					<Text
						style={{
							color: Colors.gray,
						}}
					></Text>
				</View>
			</View>
			<View>
				<View
					style={{
						height: 1,
						backgroundColor: "#EDEDED",
						width: "100%",
						marginTop: 15,
					}}
				></View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginTop: 10,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							gap: 10,
						}}
					>
						<MaterialIcons
							name="privacy-tip"
							size={24}
							color="black"
							style={{
								minWidth: 30,
							}}
						/>
						<Text
							style={{
								fontSize: 16,
							}}
						>
							Privacy Policy
						</Text>
					</View>
					<Text
						style={{
							color: Colors.gray,
						}}
					></Text>
				</View>
			</View>
			<View>
				<View
					style={{
						height: 1,
						backgroundColor: "#EDEDED",
						width: "100%",
						marginTop: 15,
					}}
				></View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginTop: 10,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							gap: 10,
						}}
					>
						<MaterialCommunityIcons
							name="file-document-multiple"
							size={24}
							color="black"
							style={{
								minWidth: 30,
							}}
						/>
						<Text
							style={{
								fontSize: 16,
							}}
						>
							Term and Conditions
						</Text>
					</View>
					<Text
						style={{
							color: Colors.gray,
						}}
					></Text>
				</View>
			</View>
			<View>
				<View
					style={{
						height: 1,
						backgroundColor: "#EDEDED",
						width: "100%",
						marginTop: 15,
					}}
				></View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginTop: 10,
					}}
				>
					<TouchableOpacity
						onPress={() => {
							handleLogout();
						}}
						style={{
							flexDirection: "row",
							alignItems: "center",
							gap: 10,
						}}
					>
						<SimpleLineIcons
							name="logout"
							size={24}
							color="#E23131"
							style={{
								minWidth: 30,
							}}
						/>
						<Text
							style={{
								fontSize: 16,
								color: "#E23131",
							}}
						>
							Log Out
						</Text>
					</TouchableOpacity>
					<Text
						style={{
							color: Colors.gray,
						}}
					></Text>
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
		alignSelf: "flex-start",
	},
});
