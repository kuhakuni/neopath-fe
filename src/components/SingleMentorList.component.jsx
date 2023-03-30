import React, { useMemo } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Border, FontSize, Color, Padding } from "../styles/GlobalStyles";

const getStyleValue = (key, value) => {
	if (value === undefined) return;
	return { [key]: value === "unset" ? undefined : value };
};

const SingleMentorList = ({
	mentorImage,
	mentorPosition,
	mentorName,
	singleMentorListCardMarginTop,
}) => {
	const card5Style = useMemo(() => {
		return {
			...getStyleValue("marginTop", singleMentorListCardMarginTop),
		};
	}, [singleMentorListCardMarginTop]);

	return (
		<View style={[styles.card, styles.mt12, card5Style]}>
			<View style={[styles.buttonContainer, styles.buttonFlexBox]}>
				<View style={styles.imageContainer}>
					<Image resizeMode="cover" source={mentorImage} />
				</View>
				<View style={[styles.buttonContainer1, styles.ml11]}>
					<View style={styles.buttonFlexBox}>
						<View>
							<Text
								style={[
									styles.alexandreMathias,
									styles.uxDesignerAtTypo,
								]}
							>
								{mentorName}
							</Text>
							<Text
								style={[
									styles.uxDesignerAt,
									styles.mt2,
									styles.uxDesignerAtTypo,
								]}
							>
								{mentorPosition}
							</Text>
						</View>
					</View>
					<View style={[styles.button1, styles.buttonFlexBox]}>
						<View style={styles.buttonFlexBox}>
							<View style={styles.buttonFlexBox}>
								<Image
									style={styles.ratingIcon}
									resizeMode="cover"
									source={require("../assets/rating.png")}
								/>
								<Image
									style={[styles.ratingIcon, styles.ml1]}
									resizeMode="cover"
									source={require("../assets/rating.png")}
								/>
								<Image
									style={[styles.ratingIcon, styles.ml1]}
									resizeMode="cover"
									source={require("../assets/rating.png")}
								/>
								<Image
									style={[styles.ratingIcon, styles.ml1]}
									resizeMode="cover"
									source={require("../assets/rating.png")}
								/>
								<Image
									style={[styles.ratingIcon, styles.ml1]}
									resizeMode="cover"
									source={require("../assets/rating1.png")}
								/>
							</View>
							<Text
								style={[
									styles.uxDesignerAt,
									styles.ml4,
									styles.uxDesignerAtTypo,
								]}
							>
								4,8
							</Text>
						</View>
						<View style={[styles.buttontiny, styles.buttonFlexBox]}>
							<Text style={styles.book}>Book</Text>
							<AntDesign
								name="arrowright"
								size={16}
								color="white"
							/>
						</View>
					</View>
				</View>
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
	mt12: {
		marginTop: 12,
	},
	buttonFlexBox: {
		alignItems: "center",
		flexDirection: "row",
	},
	uxDesignerAtTypo: {
		textAlign: "left",
		fontWeight: "500",
	},
	imageContainer: {
		borderRadius: Border.br_5xs,
		height: 100,
		width: 78,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
	},
	alexandreMathias: {
		fontSize: FontSize.size_mini,
		color: Color.black,
	},
	uxDesignerAt: {
		fontSize: FontSize.size_smi,
		color: Color.gray_200,
	},
	ratingIcon: {
		width: 16,
		height: 16,
	},
	book: {
		fontSize: FontSize.pxSemiBold_size,
		color: Color.white,
		textAlign: "center",
		fontWeight: "500",
	},
	textInputIcon: {
		width: 13,
		height: 11,
	},
	buttontiny: {
		borderRadius: Border.br_3xs,
		backgroundColor: Color.royalblue_100,
		height: 30,
		justifyContent: "center",
		width: 78,
	},
	button1: {
		justifyContent: "space-between",
		alignSelf: "stretch",
		alignItems: "center",
	},
	buttonContainer1: {
		height: 83,
		justifyContent: "space-between",
		flex: 1,
	},
	buttonContainer: {
		flex: 1,
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
		padding: Padding.p_xs,
		flexDirection: "row",
		overflow: "hidden",
		alignSelf: "stretch",
	},
});

export default SingleMentorList;
