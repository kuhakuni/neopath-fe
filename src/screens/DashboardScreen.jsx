import {
	SafeAreaView,
	View,
	StyleSheet,
	Image,
	Text,
	Pressable,
	ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import DashboardTop from "../components/DashboardTop.component";
import { Styles } from "../styles/Styles";
import Colors from "../styles/Colors";
import { useNavigation } from "@react-navigation/native";
import EventList from "../components/EventList.component";
import MentorList from "../components/MentorList.component";

import { Color, Border, FontSize, Padding } from "../styles/GlobalStyles";

export default DashboardScreen = () => {
	const navigation = useNavigation();

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<SafeAreaView
				style={[
					Styles.container,
					{
						backgroundColor: Colors.primary,
						paddingHorizontal: 0,
					},
				]}
			>
				<DashboardTop />
				<View style={[styles.container, styles.containerPosition]}>
					<View style={[styles.guide, styles.barFlexBox]}>
						<View style={styles.container1}>
							<Image
								style={styles.verticalContainerIcon}
								resizeMode="cover"
								source={require("../assets/learn-container.png")}
							/>
							<Text style={[styles.letsReflectOn, styles.ml8]}>
								Let's reflect on your progress!
							</Text>
						</View>
						<MaterialIcons
							name="chevron-right"
							size={24}
							color="white"
						/>
					</View>
					<View
						style={[
							styles.containerBody,
							styles.containerBodyFlexBox,
							styles.containerPosition,
						]}
					>
						<View style={styles.slider} />
						<View
							style={[
								styles.menuContainer,
								styles.mt20,
								{
									flexDirection: "row",
									justifyContent: "space-around",
								},
							]}
						>
							<Pressable
								style={styles.buttonContainer}
								onPress={() =>
									navigation.navigate("ELearningScreen")
								}
							>
								<Image
									style={styles.buttonIcon}
									resizeMode="cover"
									source={require("../assets/button5.png")}
								/>
								<Text
									style={[
										styles.eLearning,
										styles.mt8,
										styles.eLearningTypo,
									]}
								>
									E-Learning
								</Text>
							</Pressable>
							<Pressable
								style={styles.buttonContainer}
								onPress={() =>
									navigation.navigate("MentorScreen")
								}
							>
								<Image
									style={styles.buttonIcon}
									resizeMode="cover"
									source={require("../assets/button6.png")}
								/>
								<Text
									style={[
										styles.mentoring,
										styles.mt8,
										styles.eLearningTypo,
									]}
								>
									Mentoring
								</Text>
							</Pressable>
							<Pressable
								style={styles.buttonContainer}
								onPress={() =>
									navigation.navigate("LiveEventScreen")
								}
							>
								<Image
									style={styles.buttonIcon}
									resizeMode="cover"
									source={require("../assets/button7.png")}
								/>
								<Text
									style={[
										styles.eLearning,
										styles.mt8,
										styles.eLearningTypo,
									]}
								>
									Live Events
								</Text>
							</Pressable>
						</View>
						<EventList />
						<MentorList />
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	ml8: {
		marginLeft: 8,
	},
	mt8: {
		marginTop: 8,
	},
	mt20: {
		marginTop: 20,
	},
	dashboardBg: {
		backgroundColor: Color.royalblue_100,
		alignItems: "center",
	},
	barFlexBox: {
		justifyContent: "space-between",
		flexDirection: "row",
	},
	containerPosition: {
		borderTopRightRadius: Border.br_6xl,
		borderTopLeftRadius: Border.br_6xl,
	},
	containerBodyFlexBox: {
		backgroundColor: Color.white,
		alignSelf: "stretch",
		alignItems: "center",
	},
	eLearningTypo: {
		color: Color.black,
		fontWeight: "500",
		fontSize: FontSize.pxSemiBold_size,
		textAlign: "center",
	},
	pathTypo: {
		color: Color.gray_200,
		lineHeight: 16,
		fontSize: FontSize.size_3xs,
		fontWeight: "500",
	},
	navprofileLayout: {
		width: 50,
		alignItems: "center",
	},
	verticalContainerIcon: {
		borderRadius: 39,
		width: 30,
		height: 30,
		overflow: "hidden",
	},
	letsReflectOn: {
		fontSize: FontSize.size_base,
		color: Color.white,
		textAlign: "left",
	},
	container1: {
		flexDirection: "row",
		alignItems: "center",
	},
	textInputIcon: {
		width: 22,
		height: 22,
		overflow: "hidden",
	},
	guide: {
		paddingHorizontal: Padding.p_xl,
		paddingVertical: Padding.p_3xs,
		alignSelf: "stretch",
		alignItems: "center",
	},
	slider: {
		borderRadius: Border.br_10xs,
		backgroundColor: Color.gainsboro,
		width: 48,
		height: 6,
	},
	buttonIcon: {
		borderRadius: Border.br_3xs,
		height: 56,
		width: 56,
		overflow: "hidden",
	},
	eLearning: {
		width: 90,
		textAlign: "center",
	},
	buttonContainer: {
		alignItems: "center",
	},
	mentoring: {
		textAlign: "center",
	},
	menuContainer: {
		borderRadius: Border.br_base,
		width: "100%",
		paddingHorizontal: Padding.p_7xs,
		paddingVertical: 0,
	},
	containerBody: {
		padding: Padding.p_xl,
	},
	container: {
		backgroundColor: Color.primary2,
		overflow: "hidden",
		alignSelf: "stretch",
		alignItems: "center",
	},
	dashboard: {
		flex: 1,
		width: "100%",
		alignItems: "center",
	},
});
