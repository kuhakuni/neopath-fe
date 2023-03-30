import React, { useMemo } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, FontSize, Color, Padding } from "../styles/GlobalStyles";

const getStyleValue = (key, value) => {
	if (value === undefined) return;
	return { [key]: value === "unset" ? undefined : value };
};

const LiveEvents = ({
	eventImage,
	eventOrganizer,
	propMarginLeft,
	propWidth,
	propHeight,
}) => {
	const card4Style = useMemo(() => {
		return {
			...getStyleValue("marginLeft", propMarginLeft),
		};
	}, [propMarginLeft]);

	const imageIcon2Style = useMemo(() => {
		return {
			...getStyleValue("width", propWidth),
			...getStyleValue("height", propHeight),
		};
	}, [propWidth, propHeight]);

	return (
		<View style={[styles.card, card4Style]}>
			<View style={styles.imageContainer}>
				<Image
					style={[styles.imageIcon, imageIcon2Style]}
					resizeMode="cover"
					source={eventImage}
				/>
			</View>
			<View style={[styles.paragraphContainer, styles.mt11]}>
				<Text
					style={[styles.webinarBuildPortfolio, styles.codercomTypo]}
				>
					Webinar: Build Portfolio for UX Designer
				</Text>
				<Text
					style={[styles.codercom, styles.mt4, styles.codercomTypo]}
				>
					{eventOrganizer}
				</Text>
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
	codercomTypo: {
		textAlign: "left",
		fontWeight: "500",
		alignSelf: "stretch",
	},
	imageIcon: {
		position: "absolute",
		top: 0,
		left: 0,
		width: 148,
		height: 100,
	},
	imageContainer: {
		borderRadius: Border.br_3xs,
		width: 111,
		height: 78,
		overflow: "hidden",
	},
	webinarBuildPortfolio: {
		fontSize: FontSize.pxSemiBold_size,
		color: Color.black,
	},
	codercom: {
		fontSize: FontSize.size_smi,
		color: Color.gray_200,
	},
	paragraphContainer: {
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
});

export default LiveEvents;
