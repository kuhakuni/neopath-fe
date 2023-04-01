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
import EventList from "../components/EventList.component";

export default LiveEventScreen = () => {
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
							Live Events
						</Text>
						<Text
							style={{
								color: Colors.gray,
							}}
						>
							Join virtual events and connect with like-minded
							individuals to learn new skills and gain
							inspiration.
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
								placeholder="Search for Topics.."
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
						<EventList title={"Related to UX Design"} />
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
								marginTop: 20,
							}}
						>
							<Text
								style={{
									fontSize: 20,
									fontWeight: "500",
								}}
							>
								All Topics
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
									See all
								</Text>
								<AntDesign
									name="arrowright"
									size={18}
									color={Colors.black}
								/>
							</View>
						</View>
						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
							style={{
								flexDirection: "row",
								marginTop: 15,
							}}
						>
							<View
								style={{
									backgroundColor: Colors.primary,
									paddingVertical: 5,
									paddingHorizontal: 15,
									marginRight: 10,
									borderRadius: 15,
								}}
							>
								<Text
									style={{
										color: Colors.white,
										fontSize: 14,
										fontWeight: "500",
									}}
								>
									All
								</Text>
							</View>
							<View
								style={{
									backgroundColor: Colors.white,
									paddingVertical: 5,
									paddingHorizontal: 15,
									marginRight: 10,
									borderRadius: 15,
									borderWidth: 1,
									borderColor: Colors.primary,
								}}
							>
								<Text
									style={{
										color: Colors.primary,
										fontSize: 14,
										fontWeight: "500",
									}}
								>
									Tech
								</Text>
							</View>
							<View
								style={{
									backgroundColor: Colors.white,
									paddingVertical: 5,
									paddingHorizontal: 15,
									marginRight: 10,
									borderRadius: 15,
									borderWidth: 1,
									borderColor: Colors.primary,
								}}
							>
								<Text
									style={{
										color: Colors.primary,
										fontSize: 14,
										fontWeight: "500",
									}}
								>
									Design
								</Text>
							</View>
							<View
								style={{
									backgroundColor: Colors.white,
									paddingVertical: 5,
									paddingHorizontal: 15,
									marginRight: 10,
									borderRadius: 15,
									borderWidth: 1,
									borderColor: Colors.primary,
								}}
							>
								<Text
									style={{
										color: Colors.primary,
										fontSize: 14,
										fontWeight: "500",
									}}
								>
									Accounting
								</Text>
							</View>
							<View
								style={{
									backgroundColor: Colors.white,
									paddingVertical: 5,
									paddingHorizontal: 15,
									marginRight: 10,
									borderRadius: 15,
									borderWidth: 1,
									borderColor: Colors.primary,
								}}
							>
								<Text
									style={{
										color: Colors.primary,
										fontSize: 14,
										fontWeight: "500",
									}}
								>
									Business
								</Text>
							</View>
						</ScrollView>
						<View
							style={{
								marginTop: 10,
							}}
						>
							<CourseCardHorizontal
								img={require("../assets/image16.png")}
								source={"Coder.io"}
								title={
									"Workshop: Gestalt Principle for UX Design"
								}
							/>
							<CourseCardHorizontal
								img={require("../assets/image17.png")}
								source={"Coder.io"}
								title={
									"Webinar: Build Portfolio for UX Designer"
								}
							/>
						</View>
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
