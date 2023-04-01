import {
	TouchableOpacity,
	StyleSheet,
	View,
	Text,
	Image,
	SafeAreaView,
	ScrollView,
	TextInput,
} from "react-native";
import { CourseCardHorizontal } from "../components/CourseCard.component";
import Colors from "../styles/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Styles } from "../styles/Styles";
import MentorList from "../components/MentorList.component";

export default MentorScreen = () => {
	return (
		<ScrollView>
			<SafeAreaView
				style={[
					Styles.container,
					{
						paddingHorizontal: 0,
						backgroundColor: Colors.primary,
					},
				]}
			>
				<View
					style={{
						paddingHorizontal: 30,
					}}
				>
					<View
						style={{
							backgroundColor: Colors.white,
							borderRadius: 30,
							padding: 20,
						}}
					>
						<Text
							style={{
								fontSize: 24,
								fontWeight: "500",
								marginVertical: 10,
							}}
						>
							Get connected to the best mentor
						</Text>
						<Text
							style={{
								color: Colors.gray,
							}}
						>
							Find your perfect mentor from 1.500+ experts and get
							personalized 1:1 mentorship.
						</Text>
						<View
							style={{
								position: "relative",
								marginTop: 20,
								marginBottom: 10,
							}}
						>
							<AntDesign
								name="search1"
								size={24}
								color="#999999"
								style={{
									position: "absolute",
									left: 15,
									top: 15,
								}}
							/>
							<TextInput
								style={styles.input}
								placeholder="Search for Mentor,Topics.."
								placeholderTextColor="#838383"
								onChangeText={() => {}}
							/>
							<TouchableOpacity
								style={styles.arrowContainer}
								onPress={() => navigation.goBack()}
							>
								<AntDesign
									name="arrowright"
									size={20}
									color={Colors.primary}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View
					style={{
						backgroundColor: "#3D55D4",
						borderTopRightRadius: 30,
						borderTopLeftRadius: 30,
						marginTop: 15,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "flex-start",
							paddingHorizontal: 10,
							padding: 10,
						}}
					>
						<View
							style={{
								backgroundColor: Colors.white,
								padding: 5,
								borderRadius: 50,
								marginRight: 10,
							}}
						>
							<Image
								style={{
									width: 18,
									height: 18,
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
							Below are recommendation for you!
						</Text>
					</View>

					<View
						style={{
							backgroundColor: Colors.white,
							paddingTop: 10,
							borderTopRightRadius: 30,
							borderTopLeftRadius: 30,
							paddingHorizontal: 20,
						}}
					>
						<View
							style={{
								backgroundColor: "#E1E1E1",
								height: 5,
								borderRadius: 10,
								width: 50,
								alignSelf: "center",
								marginVertical: 20,
							}}
						></View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
								marginTop: 5,
							}}
						>
							<Text
								style={{
									fontSize: 20,
									fontWeight: "500",
								}}
							>
								Upcoming session
							</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								<Text
									style={{
										fontWeight: "500",
										alignItems: "center",
										marginRight: 3,
									}}
								>
									History
								</Text>
								<AntDesign
									name="arrowright"
									size={18}
									color={Colors.black}
								/>
							</View>
						</View>
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
								marginTop: 20,
							}}
						>
							<AntDesign
								name="calendar"
								size={36}
								color="#E2E2E2"
							/>
							<Text
								style={{
									color: "#E2E2E2",
									fontSize: 14,
									marginTop: 5,
								}}
							>
								No Upcoming session
							</Text>
						</View>
						<MentorList />
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	vectorIcon: {
		width: 70,
		height: 20,
	},
	inputContainer: {
		marginTop: 20,
		marginBottom: 50,
	},
	input: {
		borderRadius: 10,
		borderWidth: 2,

		paddingStart: 50,
		paddingVertical: 10,
		fontSize: 16,
		borderColor: "#E5E5E5",
	},
	arrowContainer: {
		backgroundColor: "#F1F7FF",
		borderRadius: 5,
		width: 24,
		height: 24,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		right: 15,
		top: 15,
	},
	tabContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	tab: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
		backgroundColor: "#F1F7FF",
		padding: 10,
		borderRadius: 10,
	},
	activeTab: {
		borderWidth: 1,
		borderColor: Colors.primary,
	},
	tabText: {
		fontSize: 16,
		fontWeight: "500",
	},
});
