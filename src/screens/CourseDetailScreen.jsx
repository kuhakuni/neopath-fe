import { useState, useEffect } from "react";
import {
	TouchableOpacity,
	StyleSheet,
	View,
	Text,
	Image,
	SafeAreaView,
	ScrollView,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { CourseCardHorizontal } from "../components/CourseCard.component";
import Chips from "../components/Chips.component";
import Colors from "../styles/Colors";
import { Styles } from "../styles/Styles";
import { useAuth } from "../config/Auth";
import { API_SERVICE } from "../config/api";
const Tab = ({ title, isActive, iconName, onPress }) => {
	return (
		<TouchableOpacity
			style={[styles.tab, isActive && styles.activeTab]}
			onPress={onPress}
			activeOpacity={0.5}
		>
			<View
				style={{
					backgroundColor: "#DBE9FF",
					padding: 5,
					borderRadius: 5,
					marginRight: 10,
				}}
			>
				<MaterialCommunityIcons
					name={iconName}
					size={18}
					color={Colors.primary}
				/>
			</View>
			<Text style={styles.tabText}>{title}</Text>
		</TouchableOpacity>
	);
};

export default CourseDetailScreen = ({ navigation, route }) => {
	const { id, title, description } = route.params;
	const { authData } = useAuth();
	const [selectedTab, setSelectedTab] = useState(1);
	const [data, setData] = useState([]);
	useEffect(() => {
		API_SERVICE.student.get
			.detailCourse(authData, id)
			.then((res) => {
				setData(res.data.Body);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);
	return (
		<ScrollView>
			<SafeAreaView
				style={[
					Styles.container,
					{
						paddingHorizontal: 0,
						backgroundColor: Colors.white,
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
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
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
								fontSize: 18,
								fontWeight: "500",
								color: Colors.primary,
								backgroundColor: "#F1F7FF",
								padding: 10,
								borderRadius: 10,
							}}
						>
							Done
						</Text>
					</View>
					<Image
						source={require("../assets/ux-cover.png")}
						style={{
							width: "100%",
							height: 200,
							borderRadius: 20,
							marginVertical: 15,
						}}
					/>
					<Text
						style={{
							fontSize: 24,
							fontWeight: "500",
							marginVertical: 10,
						}}
					>
						{title || "Learn UX Fundamentals"}
					</Text>
					<Text
						style={{
							color: "#4A4A4A",
						}}
					>
						{description ||
							"Learning UX fundamentals is important because it provides a strong foundation for creating effective and user-friendly products or services. Besides, you will be able to design products that are intuitive, accessible, and meet the needs of your target audience."}
					</Text>
				</View>
				<View
					style={{
						backgroundColor: Colors.primary,
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
							Visual learners like you would benefit most from
							video resources.
						</Text>
					</View>
					<View
						style={{
							backgroundColor: Colors.white,
							paddingTop: 10,
							borderTopRightRadius: 30,
							borderTopLeftRadius: 30,
							paddingHorizontal: 30,
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
						<Text
							style={{
								fontSize: 24,
								fontWeight: "500",
								marginTop: 10,
							}}
						>
							Available Resources
						</Text>
						<View style={styles.tabContainer}>
							<Tab
								title="Video"
								isActive={selectedTab === 1}
								iconName="video"
								onPress={() => setSelectedTab(1)}
							/>
							<Tab
								title="Audio"
								isActive={selectedTab === 2}
								iconName="volume-high"
								onPress={() => setSelectedTab(2)}
							/>
							<Tab
								title="Text"
								isActive={selectedTab === 3}
								iconName="notebook"
								onPress={() => setSelectedTab(3)}
							/>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "flex-start",
								marginVertical: 15,
							}}
						>
							<Chips
								title={"Free"}
								textColor={Colors.white}
								bgColor={Colors.primary}
							/>
							<Chips
								title={"Paid"}
								textColor={Colors.white}
								bgColor={Colors.secondary}
							/>
						</View>
						<View
							style={{
								marginTop: 10,
							}}
						>
							{selectedTab === 1 &&
								data.map((item, index) => {
									return (
										<CourseCardHorizontal
											key={index}
											title={item.Title}
											source={item.Source}
											img={item.Thumbnail}
											isPaid={item.IsPaid}
											url={item.Url}
										/>
									);
								})}
							{selectedTab === 2 && <CourseCardHorizontal />}
							{selectedTab === 3 && (
								<Text
									style={{
										fontSize: 18,
										fontWeight: "500",
										textAlign: "center",
										marginBottom: 50,
									}}
								>
									No modules are available
								</Text>
							)}
						</View>
					</View>
				</View>
			</SafeAreaView>
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
		marginBottom: 20,
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
