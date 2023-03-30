import * as React from "react";
import {
	Text,
	StyleSheet,
	Image,
	View,
	Pressable,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import LiveEvents from "./LiveEvents.component";
import { Color, FontSize, Border, Padding } from "../styles/GlobalStyles";

const EventList = () => {
	const navigation = useNavigation();

	return (
		<View style={[styles.eventContainer, styles.mt20]}>
			<View style={styles.titleContainer}>
				<Text style={styles.liveEvents}>Live events</Text>
				<Pressable
					style={styles.horizontalContainer}
					onPress={() => navigation.navigate("Card1")}
				>
					<Text
						style={[
							styles.seeAll,
							styles.seeAllTypo,
							styles.seeAllClr,
						]}
					>
						See all
					</Text>
					<View style={styles.slider}>
						<AntDesign name="arrowright" size={16} color="black" />
					</View>
				</Pressable>
			</View>
			<View style={[styles.cardContainer, styles.mt10]}>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
					<LiveEvents
						eventImage={require("../assets/image16.png")}
						eventOrganizer="Coder.com"
						propWidth={148}
						propHeight={100}
					/>
					<LiveEvents
						eventImage={require("../assets/image17.png")}
						eventOrganizer="Skillvul.com"
						propMarginLeft={12}
						propWidth={113}
						propHeight={113}
					/>
					<LiveEvents
						eventImage={require("../assets/image16.png")}
						eventOrganizer="Coder.com"
						propMarginLeft={12}
					/>
				</ScrollView>
				{/* <View style={[styles.card, styles.ml12]}>
					<View style={styles.imageContainer}>
						<Image
							style={styles.imageIcon}
							resizeMode="cover"
							source={require("../assets/image17.png")}
						/>
					</View>
					<View style={[styles.eventContainer, styles.mt11]}>
						<Text
							style={[
								styles.webinarBuildPortfolio,
								styles.seeAllTypo,
								styles.seeAllClr,
							]}
						>
							Webinar: Build Portfolio for UX Designer
						</Text>
						<Text
							style={[
								styles.skillvulcom,
								styles.mt4,
								styles.seeAllTypo,
							]}
						>
							Skillvul.com
						</Text>
					</View>
				</View> */}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mt4: {
		marginTop: 4,
	},
	mt11: {
		marginTop: 11,
	},
	ml12: {
		marginLeft: 12,
	},
	mt10: {
		marginTop: 10,
	},
	mt20: {
		marginTop: 20,
	},
	seeAllTypo: {
		fontWeight: "500",
		textAlign: "left",
	},
	seeAllClr: {
		color: Color.black,
		fontWeight: "500",
	},
	liveEvents: {
		fontSize: FontSize.size_xl,
		fontWeight: "600",
		textAlign: "left",
		color: Color.black,
	},
	seeAll: {
		fontSize: FontSize.size_xs,
	},
	sliderChild: {
		width: 10,
		height: 9,
	},
	slider: {
		justifyContent: "center",
		alignItems: "center",
	},
	horizontalContainer: {
		alignItems: "center",
		flexDirection: "row",
	},
	titleContainer: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		alignSelf: "stretch",
	},
	imageIcon: {
		position: "absolute",
		top: -18,
		left: 0,
		width: 113,
		height: 113,
	},
	imageContainer: {
		borderRadius: Border.br_3xs,
		width: 111,
		height: 78,
		overflow: "hidden",
	},
	webinarBuildPortfolio: {
		fontSize: FontSize.pxSemiBold_size,
		alignSelf: "stretch",
	},
	skillvulcom: {
		fontSize: FontSize.size_smi,
		color: Color.gray_200,
		alignSelf: "stretch",
	},
	eventContainer: {
		alignSelf: "stretch",
	},
	card: {
		borderRadius: Border.br_base,
		backgroundColor: Color.white,
		shadowColor: "rgba(25, 27, 32, 0.1)",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowRadius: 2,
		elevation: 2,
		shadowOpacity: 1,
		width: 135,
		height: 184,
		padding: Padding.p_xs,
		overflow: "hidden",
	},
	cardContainer: {
		flexDirection: "row",
		alignSelf: "stretch",
	},
});

export default EventList;
