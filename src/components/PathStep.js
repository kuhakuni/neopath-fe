import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, Color, FontSize, Border } from "../styles/GlobalStyles";

const getStyleValue = (key, value) => {
	if (value === undefined) return;
	return { [key]: value === "unset" ? undefined : value };
};

const PathStep = ({ titleStep, propZIndex }) => {
	const button2Style = useMemo(() => {
		return {
			...getStyleValue("zIndex", propZIndex),
		};
	}, [propZIndex]);

	return (
		<View style={[styles.button, styles.mt24, button2Style]}>
			<Image
				style={styles.sliderContainerIcon}
				resizeMode="cover"
				source={require("../assets/slider-container1.png")}
			/>
			<View style={[styles.card, styles.ml8]}>
				<View style={styles.card1}>
					<View style={[styles.textInput, styles.button1FlexBox]}>
						<Text
							style={[
								styles.learnToConduct,
								styles.microsoftFlexBox,
							]}
						>
							{titleStep}
						</Text>
					</View>
					<View style={[styles.buttonContainer, styles.mt4]}>
						<View style={[styles.button1, styles.button1FlexBox]}>
							<Image
								style={styles.vectorIcon}
								resizeMode="cover"
								source={require("../assets/vector1.png")}
							/>
						</View>
						<View
							style={[
								styles.button1,
								styles.ml4,
								styles.button1FlexBox,
							]}
						>
							<Image
								style={styles.buttonIcon}
								resizeMode="cover"
								source={require("../assets/button4.png")}
							/>
							<Text
								style={[
									styles.microsoft,
									styles.ml4,
									styles.microsoftFlexBox,
								]}
							>
								Microsoft
							</Text>
						</View>
					</View>
				</View>
			</View>
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
	button1FlexBox: {
		paddingVertical: Padding.p_11xs,
		alignItems: "center",
		flexDirection: "row",
	},
	microsoftFlexBox: {
		textAlign: "left",
		color: Color.black,
	},
	sliderContainerIcon: {
		width: 18,
		height: 18,
	},
	learnToConduct: {
		fontSize: FontSize.size_base,
		flex: 1,
	},
	textInput: {
		borderRadius: Border.br_xl,
		backgroundColor: Color.background,
		paddingHorizontal: Padding.p_xs,
		alignSelf: "stretch",
	},
	vectorIcon: {
		width: 54,
		height: 8,
	},
	button1: {
		borderRadius: Border.br_6xl,
		backgroundColor: Color.grey1,
		height: 24,
		paddingHorizontal: Padding.p_4xs,
	},
	buttonIcon: {
		width: 16,
		height: 16,
		overflow: "hidden",
	},
	microsoft: {
		fontSize: FontSize.size_xs,
		fontWeight: "500",
	},
	buttonContainer: {
		flexDirection: "row",
		alignSelf: "stretch",
	},
	card1: {
		alignSelf: "stretch",
	},
	card: {
		flex: 1,
	},
	button: {
		zIndex: 2,
		alignItems: "center",
		flexDirection: "row",
		alignSelf: "stretch",
	},
});

export default PathStep;
