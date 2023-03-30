import * as React from "react";
import { Text, StyleSheet, Image, View, ScrollView } from "react-native";
import PathStep from "./PathStep";
import { Color, FontSize, Padding, Border } from "../styles/GlobalStyles";

const PathListCardContainer = () => {
	return (
		<View style={[styles.card2, styles.mt10]}>
			<ScrollView
				style={styles.verticalContainer}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={
					styles.verticalContainerScrollViewContent
				}
			>
				<Image
					style={styles.verticalContainerChild}
					resizeMode="cover"
					source={require("../assets/frame-8914.png")}
				/>
				<View
					style={[
						styles.buttonContainer1,
						styles.mt24,
						styles.buttonContainerFlexBox,
					]}
				>
					<Image
						style={styles.verticalContainerIcon}
						resizeMode="cover"
						source={require("../assets/vertical-container19.png")}
					/>
					<View style={[styles.buttonContainer2, styles.ml8]}>
						<View style={styles.buttonContainerFlexBox}>
							<View
								style={[
									styles.button1,
									styles.buttonSpaceBlock1,
								]}
							>
								<Text
									style={[
										styles.uxDesignPrinciples,
										styles.honeYourVisualTypo,
										styles.level2IntermediateClr,
									]}
								>
									UX design principles and theories
								</Text>
							</View>
							<View
								style={[
									styles.button2,
									styles.ml4,
									styles.buttonSpaceBlock1,
								]}
							>
								<Text
									style={[
										styles.done,
										styles.doneTypo,
										styles.doneTypo1,
									]}
								>
									Done
								</Text>
							</View>
						</View>
						<View
							style={[
								styles.buttonContainer4,
								styles.mt4,
								styles.buttonContainerFlexBox,
							]}
						>
							<View
								style={[
									styles.button3,
									styles.buttonSpaceBlock,
								]}
							>
								<Image
									style={styles.vectorIcon}
									resizeMode="cover"
									source={require("../assets/vector1.png")}
								/>
							</View>
							<View style={[styles.buttonSpaceBlock, styles.ml4]}>
								<Image
									style={styles.buttonIcon}
									resizeMode="cover"
									source={require("../assets/button4.png")}
								/>
								<Text
									style={[
										styles.microsoft,
										styles.ml4,
										styles.microsoftClr,
										styles.doneTypo,
									]}
								>
									Microsoft
								</Text>
							</View>
						</View>
					</View>
				</View>
				<PathStep titleStep="Learn to conduct user testing and analyze results" />
				<PathStep
					titleStep="Develop expertise in information architecture and interaction design"
					propZIndex={3}
				/>
				<PathStep
					titleStep="Develop expertise in information architecture and interaction design"
					propZIndex={4}
				/>
				<View
					style={[
						styles.button4,
						styles.mt24,
						styles.buttonContainerFlexBox,
					]}
				>
					<Image
						style={styles.verticalContainerIcon}
						resizeMode="cover"
						source={require("../assets/slider-container2.png")}
					/>
					<View style={[styles.buttonContainer2, styles.ml8]}>
						<View
							style={[styles.textInput, styles.buttonSpaceBlock1]}
						>
							<Text
								style={[
									styles.honeYourVisual,
									styles.microsoftClr,
									styles.honeYourVisualTypo,
								]}
							>
								Hone your visual design skills
							</Text>
						</View>
						<View
							style={[styles.buttonContainerFlexBox, styles.mt4]}
						>
							<View style={styles.buttonSpaceBlock}>
								<Image
									style={styles.vectorIcon}
									resizeMode="cover"
									source={require("../assets/vector1.png")}
								/>
							</View>
							<View style={[styles.buttonSpaceBlock, styles.ml4]}>
								<Image
									style={styles.buttonIcon}
									resizeMode="cover"
									source={require("../assets/button4.png")}
								/>
								<Text
									style={[
										styles.microsoft,
										styles.ml4,
										styles.microsoftClr,
										styles.doneTypo,
									]}
								>
									Microsoft
								</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	ml4: {
		marginLeft: 4,
	},
	mt4: {
		marginTop: 4,
	},
	ml8: {
		marginLeft: 8,
	},
	mt24: {
		marginTop: 24,
	},
	verticalContainerScrollViewContent: {
		flexDirection: "column",
		paddingHorizontal: 12,
		paddingVertical: 22,
	},
	buttonContainerFlexBox: {
		flexDirection: "row",
		alignSelf: "stretch",
	},
	level2IntermediateClr: {
		color: Color.white,
		textAlign: "left",
	},
	doneTypo: {
		fontWeight: "500",
	},
	doneTypo1: {
		fontSize: FontSize.size_base,
		fontWeight: "500",
	},
	buttonSpaceBlock1: {
		paddingVertical: Padding.p_11xs,
		paddingHorizontal: Padding.p_xs,
		borderRadius: Border.br_xl,
		flexDirection: "row",
		alignItems: "center",
	},
	honeYourVisualTypo: {
		fontSize: FontSize.size_base,
	},
	buttonSpaceBlock: {
		paddingHorizontal: Padding.p_4xs,
		backgroundColor: Color.grey1,
		borderRadius: Border.br_6xl,
		paddingVertical: Padding.p_11xs,
		height: 24,
		flexDirection: "row",
		alignItems: "center",
	},
	microsoftClr: {
		color: Color.black,
		textAlign: "left",
	},
	level2Intermediate: {
		textAlign: "left",
	},
	textInputContainer: {
		width: 24,
		height: 24,
	},
	button: {
		borderRadius: Border.br_10xl,
		height: 40,
		paddingHorizontal: Padding.p_xl,
		justifyContent: "space-between",
		backgroundColor: Color.royalblue_100,
		paddingVertical: 0,
		alignItems: "center",
		overflow: "hidden",
	},
	buttonContainer: {
		paddingHorizontal: Padding.p_3xs,
		paddingVertical: 0,
		alignSelf: "stretch",
	},
	verticalContainerChild: {
		position: "absolute",
		top: 58,
		left: 20,
		width: 2,
		height: 404,
		zIndex: 0,
	},
	verticalContainerIcon: {
		width: 18,
		height: 18,
	},
	uxDesignPrinciples: {
		width: 158,
		textAlign: "left",
	},
	button1: {
		flex: 1,
		backgroundColor: Color.royalblue_100,
	},
	done: {
		color: Color.royalblue_100,
		textAlign: "left",
	},
	button2: {
		borderStyle: "solid",
		borderColor: "#3e71f3",
		borderWidth: 1,
		alignSelf: "stretch",
	},
	vectorIcon: {
		width: 54,
		height: 8,
	},
	button3: {
		width: 72,
	},
	buttonIcon: {
		width: 16,
		height: 16,
		overflow: "hidden",
	},
	microsoft: {
		fontSize: FontSize.size_xs,
	},
	buttonContainer4: {
		alignItems: "center",
	},
	buttonContainer2: {
		flex: 1,
	},
	buttonContainer1: {
		zIndex: 1,
		alignItems: "center",
	},
	honeYourVisual: {
		width: 234,
	},
	textInput: {
		backgroundColor: Color.background,
		alignSelf: "stretch",
	},
	button4: {
		zIndex: 5,
		alignItems: "center",
	},
	verticalContainer: {
		flex: 1,
		alignSelf: "stretch",
	},
	card2: {
		borderRadius: Border.br_3xs,
		backgroundColor: Color.white,
		shadowColor: "rgba(25, 27, 32, 0.08)",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 8,
		elevation: 8,
		shadowOpacity: 1,
		paddingHorizontal: 0,
		paddingVertical: Padding.p_3xs,
		alignItems: "center",
		overflow: "hidden",
		alignSelf: "stretch",
	},
});

export default PathListCardContainer;
