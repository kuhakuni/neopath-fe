import * as React from "react";
import {
	Image,
	StyleSheet,
	Text,
	View,
	Pressable,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Color, Padding, Border, FontSize } from "../styles/GlobalStyles";

const DashboardTop = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.card}>
			<View
				style={[
					styles.containerProfile,
					styles.containerFlexBox,
					styles.containerFlexBox1,
				]}
			>
				<View style={styles.containerFlexBox1}>
					<Image
						style={styles.verticalContainerIcon}
						resizeMode="cover"
						source={require("../assets/vertical-container27.png")}
					/>
					<View style={styles.ml9}>
						<Text style={[styles.hiAlfian, styles.hiAlfianTypo]}>
							Hi, Alfian👋
						</Text>
						<Text style={[styles.futureUxDesigner, styles.mt3]}>
							Future UX Designer
						</Text>
					</View>
				</View>
				<TouchableOpacity
					style={styles.horizontalContainer}
					onPress={() => navigation.navigate("TestListScreen")}
				>
					<View
						style={[
							styles.horizontalContainer1,
							styles.textInputFlexBox,
						]}
					>
						<Image
							style={styles.vectorIcon}
							resizeMode="cover"
							source={require("../assets/vector3.png")}
						/>
						<Text style={[styles.test, styles.ml6]}>Test</Text>
					</View>
				</TouchableOpacity>
			</View>
			<View style={[styles.containerCard, styles.mt12]}>
				<View
					style={[styles.containerFlexBox, styles.containerFlexBox1]}
				>
					<Text style={[styles.ongoingTasks, styles.hiAlfianTypo]}>
						Ongoing tasks
					</Text>
					<View style={styles.containerFlexBox1}>
						<Text style={styles.futureUxDesigner}>See all</Text>
						<View
							style={[
								styles.textInput,
								styles.textInputLayout,
								styles.textInputFlexBox,
							]}
						>
							<AntDesign
								name="arrowright"
								size={16}
								color="white"
							/>
						</View>
					</View>
				</View>
				<View
					style={[styles.card1, styles.mt14, styles.containerFlexBox]}
				>
					<View
						style={[
							styles.horizontalContainer2,
							styles.containerFlexBox,
						]}
					>
						<View style={styles.containerFlexBox1}>
							<Image
								style={styles.verticalContainerIcon1}
								resizeMode="cover"
								source={require("../assets/vertical-container28.png")}
							/>
							<View style={styles.ml8}>
								<Text
									style={[
										styles.learnUxFundamentals,
										styles.textTypo,
									]}
								>
									Learn UX Fundamentals
								</Text>
								<Text
									style={[
										styles.byGoogleCoursera,
										styles.mt2,
									]}
								>
									by Google, Coursera, etc.
								</Text>
							</View>
						</View>
						<Feather name="more-vertical" size={24} color="black" />
					</View>
					<View style={styles.containerFlexBox1}>
						<View
							style={[
								styles.buttonContainer,
								styles.containerFlexBox1,
							]}
						>
							<View
								style={[styles.button1, styles.buttonFlexBox]}
							>
								<Image
									style={styles.iconlylightOutlinevideo}
									resizeMode="cover"
									source={require("../assets/iconlylightoutlinevideo2.png")}
								/>
							</View>
							<View style={styles.ml5}>
								<Text style={[styles.text, styles.textTypo]}>
									32
								</Text>
								<Text style={styles.videos}>Videos</Text>
							</View>
						</View>
						<View
							style={[
								styles.buttonContainer1,
								styles.containerFlexBox1,
							]}
						>
							<View
								style={[styles.button1, styles.buttonFlexBox]}
							>
								<Image
									style={styles.verticalContainerIcon2}
									resizeMode="cover"
									source={require("../assets/vertical-container29.png")}
								/>
							</View>
							<View style={styles.ml5}>
								<Text style={[styles.text, styles.textTypo]}>
									27
								</Text>
								<Text style={styles.videos}>Audiobook</Text>
							</View>
						</View>
						<View
							style={[
								styles.buttonContainer,
								styles.containerFlexBox1,
							]}
						>
							<View style={styles.buttonFlexBox}>
								<Image
									style={styles.iconlylightOutlinevideo}
									resizeMode="cover"
									source={require("../assets/container5.png")}
								/>
							</View>
							<View style={styles.ml5}>
								<Text style={[styles.text, styles.textTypo]}>
									16
								</Text>
								<Text style={styles.videos}>Modules</Text>
							</View>
						</View>
					</View>
					<View style={styles.buttonContainer3}>
						<Pressable
							style={[
								styles.buttonsmallprimary,
								styles.buttonsmallprimaryFlexBox,
							]}
						>
							<Text style={[styles.next, styles.nextTypo]}>
								Done
							</Text>
						</Pressable>
						<Pressable
							style={[
								styles.buttonsmallprimary1,
								styles.ml10,
								styles.buttonsmallprimaryFlexBox,
							]}
							onPress={() =>
								navigation.navigate("CourseDetailScreen", {
									id: 2,
								})
							}
						>
							<Text
								style={[
									styles.next1,
									styles.nextTypo,
									{
										marginRight: 5,
									},
								]}
							>
								See details
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
		</View>
	);
};

const styles = StyleSheet.create({
	mt3: {
		marginTop: 3,
	},
	ml9: {
		marginLeft: 9,
	},
	ml6: {
		marginLeft: 6,
	},
	mt2: {
		marginTop: 2,
	},
	ml8: {
		marginLeft: 8,
	},
	ml5: {
		marginLeft: 5,
	},
	ml10: {
		marginLeft: 10,
	},
	mt14: {
		marginTop: 14,
	},
	mt12: {
		marginTop: 12,
	},
	containerFlexBox: {
		justifyContent: "space-between",
		alignSelf: "stretch",
	},
	containerFlexBox1: {
		alignItems: "center",
		flexDirection: "row",
	},
	hiAlfianTypo: {
		textAlign: "left",
		fontWeight: "600",
		color: Color.white,
	},
	textInputFlexBox: {
		justifyContent: "center",
		alignItems: "center",
	},
	textInputLayout: {
		height: 20,
		width: 20,
	},
	textLayout: {
		width: 10,
		height: 9,
	},
	textTypo: {
		color: Color.black,
		fontWeight: "500",
		textAlign: "left",
	},
	buttonFlexBox: {
		padding: Padding.p_7xs,
		height: 28,
		backgroundColor: Color.lavender,
		borderRadius: Border.br_7xs,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	buttonsmallprimaryFlexBox: {
		height: 38,
		borderRadius: Border.br_3xs,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	nextTypo: {
		textAlign: "center",
		fontSize: FontSize.pxSemiBold_size,
	},
	verticalContainerIcon: {
		borderRadius: 61,
		width: 40,
		height: 40,
		overflow: "hidden",
	},
	hiAlfian: {
		fontSize: FontSize.size_lg,
		lineHeight: 20,
	},
	futureUxDesigner: {
		fontWeight: "500",
		fontSize: FontSize.size_xs,
		textAlign: "left",
		color: Color.white,
	},
	vectorIcon: {
		width: 14,
		height: 14,
	},
	test: {
		color: Color.royalblue_100,
		fontSize: FontSize.pxSemiBold_size,
		fontWeight: "500",
		textAlign: "left",
	},
	horizontalContainer1: {
		flexDirection: "row",
	},
	horizontalContainer: {
		borderRadius: Border.br_11xl,
		paddingHorizontal: Padding.p_2xl,
		paddingVertical: Padding.p_4xs,
		backgroundColor: Color.white,
	},
	containerProfile: {
		paddingHorizontal: 0,
		paddingVertical: Padding.p_8xs,
	},
	ongoingTasks: {
		fontSize: FontSize.size_xl,
	},
	textInputChild: {
		height: 9,
	},
	textInput: {
		borderRadius: 3,
	},
	verticalContainerIcon1: {
		borderRadius: Border.br_31xl,
		width: 48,
		height: 48,
	},
	learnUxFundamentals: {
		fontSize: FontSize.size_mini,
	},
	byGoogleCoursera: {
		fontSize: FontSize.size_smi,
		color: Color.gray_200,
		fontWeight: "500",
		textAlign: "left",
	},
	cocoboldmoreIcon: {
		overflow: "hidden",
	},
	horizontalContainer2: {
		flexDirection: "row",
	},
	iconlylightOutlinevideo: {
		height: 16,
		width: 16,
	},
	button1: {
		width: 28,
	},
	text: {
		fontSize: FontSize.size_xs,
		color: Color.black,
	},
	videos: {
		color: Color.gray_200,
		fontSize: FontSize.size_xs,
		textAlign: "left",
	},
	buttonContainer: {
		width: 88,
	},
	verticalContainerIcon2: {
		height: 15,
		width: 16,
	},
	buttonContainer1: {
		width: 100,
	},
	next: {
		color: Color.royalblue_100,
	},
	textInputIcon: {
		display: "none",
		height: 9,
		borderRadius: 3,
	},
	buttonsmallprimary: {
		borderStyle: "solid",
		borderColor: "#3e71f3",
		borderWidth: 1,
		width: 101,
	},
	next1: {
		color: Color.white,
		textAlign: "center",
	},
	textInputIcon1: {
		width: 11,
		height: 9,
		borderRadius: 3,
	},
	buttonsmallprimary1: {
		flex: 1,
		backgroundColor: Color.royalblue_100,
	},
	buttonContainer3: {
		flexDirection: "row",
		alignSelf: "stretch",
		marginTop: 10,
	},
	card1: {
		borderRadius: Border.br_base,
		shadowColor: "rgba(25, 27, 32, 0.08)",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 8,
		elevation: 8,
		shadowOpacity: 1,
		height: 152,
		padding: Padding.p_sm,
		backgroundColor: Color.white,
		overflow: "hidden",
	},
	containerCard: {
		paddingBottom: Padding.p_xl,
		alignSelf: "stretch",
	},
	card: {
		paddingHorizontal: Padding.p_xl,
		alignSelf: "stretch",
	},
});

export default DashboardTop;
