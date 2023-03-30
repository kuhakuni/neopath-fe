import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SingleMentorList from "./SingleMentorList.component";
import { Color, FontSize, Border, Padding } from "../styles/GlobalStyles";
import { AntDesign } from "@expo/vector-icons";

const MentorList = () => {
	const navigation = useNavigation();

	return (
		<View style={[styles.card, styles.mt20]}>
			<View style={styles.titleContainer}>
				<Text style={[styles.bestMentorFor, styles.seeAllClr]}>
					Best mentor for you
				</Text>
				<View style={styles.horizontalContainer}>
					<Text
						style={[
							styles.seeAll,
							styles.bookTypo,
							styles.seeAllClr,
						]}
					>
						See all
					</Text>
					<View style={[styles.slider, styles.sliderFlexBox]}>
						<AntDesign name="arrowright" size={16} color="black" />
					</View>
				</View>
			</View>
			<View style={[styles.card1, styles.mt10]}>
				{/* <View style={styles.card2}>
					<View style={styles.verticalContainer}>
						<View style={styles.imageContainer}>
							<Image
								style={styles.imageIcon}
								resizeMode="cover"
								source={require("../assets/image7.png")}
							/>
						</View>
						<View style={[styles.buttonContainer, styles.ml11]}>
							<View style={styles.horizontalContainer}>
								<View>
									<Text
										style={[
											styles.adindaMaharani,
											styles.bookTypo,
											styles.seeAllClr,
										]}
									>
										Adinda Maharani
									</Text>
									<Text
										style={[
											styles.uxResearcherAt,
											styles.mt2,
											styles.bookTypo,
										]}
									>
										UX Researcher at Meta
									</Text>
								</View>
							</View>
							<View style={styles.titleContainer}>
								<View style={styles.horizontalContainer}>
									<View style={styles.horizontalContainer}>
										<Image
											style={styles.ratingIcon}
											resizeMode="cover"
											source={require("../assets/rating.png")}
										/>
										<Image
											style={[
												styles.ratingIcon,
												styles.ml1,
											]}
											resizeMode="cover"
											source={require("../assets/rating.png")}
										/>
										<Image
											style={[
												styles.ratingIcon,
												styles.ml1,
											]}
											resizeMode="cover"
											source={require("../assets/rating.png")}
										/>
										<Image
											style={[
												styles.ratingIcon,
												styles.ml1,
											]}
											resizeMode="cover"
											source={require("../assets/rating.png")}
										/>
										<Image
											style={[
												styles.ratingIcon,
												styles.ml1,
											]}
											resizeMode="cover"
											source={require("../assets/rating1.png")}
										/>
									</View>
									<Text
										style={[
											styles.uxResearcherAt,
											styles.ml4,
											styles.bookTypo,
										]}
									>
										4,8
									</Text>
								</View>
								<Pressable
									style={[
										styles.buttontiny,
										styles.sliderFlexBox,
									]}
									onPress={() =>
										navigation.navigate(
											"MentorDetailOverview"
										)
									}
								>
									<Text
										style={[styles.book, styles.bookTypo]}
									>
										Book
									</Text>
									<AntDesign
										name="arrowright"
										size={16}
										color="white"
									/>
								</Pressable>
							</View>
						</View>
					</View>
				</View> */}
				<SingleMentorList
					mentorImage={require("../assets/image7.png")}
					mentorName="Adinda Maharani"
					mentorPosition="UX Researcher at Meta"
				/>
				<SingleMentorList
					mentorImage={require("../assets/image8.png")}
					mentorName="Alexandre Mathias"
					mentorPosition="UX Designer at Apple"
				/>
				<SingleMentorList
					mentorImage={require("../assets/image9.png")}
					mentorName="Jamie Christie"
					mentorPosition="UX Designer at Microsoft"
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mt2: {
		marginTop: 2,
	},
	ml1: {
		marginLeft: 1,
	},
	ml4: {
		marginLeft: 4,
	},
	ml6: {
		marginLeft: 6,
	},
	ml11: {
		marginLeft: 11,
	},
	mt10: {
		marginTop: 10,
	},
	mt20: {
		marginTop: 20,
	},
	seeAllClr: {
		color: Color.black,
		textAlign: "left",
	},
	bookTypo: {
		fontWeight: "500",
	},
	sliderFlexBox: {
		justifyContent: "center",
		alignItems: "center",
	},
	bestMentorFor: {
		fontSize: FontSize.size_xl,
		fontWeight: "600",
		textAlign: "left",
	},
	seeAll: {
		fontSize: FontSize.size_xs,
		textAlign: "left",
	},
	sliderChild: {
		width: 10,
		height: 9,
	},
	slider: {
		borderRadius: 3,
		width: 20,
		height: 20,
	},
	horizontalContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	titleContainer: {
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
		alignSelf: "stretch",
	},
	imageIcon: {
		position: "absolute",
		top: 0,
		left: 0,
		width: 151,
		height: 100,
	},
	imageContainer: {
		borderRadius: Border.br_5xs,
		height: 99,
		width: 78,
		overflow: "hidden",
	},
	adindaMaharani: {
		fontSize: FontSize.size_mini,
		textAlign: "left",
	},
	uxResearcherAt: {
		fontSize: FontSize.size_smi,
		color: Color.gray_200,
		textAlign: "left",
	},
	ratingIcon: {
		width: 16,
		height: 16,
	},
	book: {
		fontSize: FontSize.pxSemiBold_size,
		color: Color.white,
		textAlign: "center",
	},
	textInputIcon: {
		width: 13,
		height: 11,
	},
	buttontiny: {
		borderRadius: Border.br_3xs,
		backgroundColor: Color.royalblue_100,
		height: 30,
		width: 78,
		flexDirection: "row",
	},
	buttonContainer: {
		height: 83,
		flex: 1,
		justifyContent: "space-between",
	},
	verticalContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	card2: {
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
		padding: Padding.p_xs,
		overflow: "hidden",
		flexDirection: "row",
		alignSelf: "stretch",
	},
	card1: {
		alignSelf: "stretch",
	},
	card: {
		alignItems: "center",
		alignSelf: "stretch",
	},
});

export default MentorList;
