import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FontSize, Color } from "../styles/GlobalStyles";

const BottomNav = ({ onContainerPress, onHorizontalContainerPress }) => {
	return (
		<View style={styles.navbar}>
			<View style={styles.navbarParent}>
				<View style={styles.navbarParent}>
					<Image
						style={[
							styles.rectangleIcon,
							styles.iconContainerLayout,
						]}
						resizeMode="cover"
						source={require("../assets/rectangle.png")}
					/>
					<Image
						style={[
							styles.verticalContainerIcon,
							styles.iconContainerLayout,
							styles.verticalContainerLayout,
						]}
						resizeMode="cover"
						source={require("../assets/vertical-container4.png")}
					/>
					<View style={styles.horizontalContainer}>
						<Pressable
							style={[styles.container, styles.containerPosition]}
							onPress={onContainerPress}
						>
							<Image
								style={[
									styles.verticalContainerIcon1,
									styles.iconContainerLayout,
									styles.verticalContainerLayout,
								]}
								resizeMode="cover"
								source={require("../assets/vertical-container5.png")}
							/>
							<Image
								style={[
									styles.verticalContainerIcon1,
									styles.iconContainerLayout,
									styles.verticalContainerLayout,
								]}
								resizeMode="cover"
								source={require("../assets/vertical-container5.png")}
							/>
							<Text
								style={[styles.dashboard, styles.profileTypo]}
							>
								Dashboard
							</Text>
						</Pressable>
						<Pressable
							style={[
								styles.horizontalContainer1,
								styles.containerPosition,
							]}
							onPress={onHorizontalContainerPress}
						>
							<Text style={[styles.profile, styles.profileTypo]}>
								Profile
							</Text>
							<Image
								style={styles.cocolineuserIcon}
								resizeMode="cover"
								source={require("../assets/cocolineuser2.png")}
							/>
						</Pressable>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	iconContainerLayout: {
		maxHeight: "100%",
		maxWidth: "100%",
		overflow: "hidden",
		position: "absolute",
	},
	verticalContainerLayout: {
		top: "0%",
		maxHeight: "100%",
		maxWidth: "100%",
	},
	containerPosition: {
		width: "19.7%",
		bottom: "0%",
		top: "0%",
		height: "100%",
		position: "absolute",
	},
	profileTypo: {
		fontWeight: "500",
		lineHeight: 16,
		fontSize: FontSize.size_3xs,
		position: "absolute",
	},
	rectangleIcon: {
		height: "129.73%",
		width: "111.11%",
		top: "-6.76%",
		right: "-5.56%",
		bottom: "-22.97%",
		left: "-5.56%",
	},
	verticalContainerIcon: {
		height: "67.57%",
		width: "13.89%",
		right: "43.06%",
		bottom: "32.43%",
		left: "43.06%",
	},
	verticalContainerIcon1: {
		height: "60%",
		width: "46.15%",
		right: "26.92%",
		bottom: "40%",
		left: "26.92%",
	},
	dashboard: {
		top: "60%",
		left: "5.77%",
		color: Color.gray_100,
		textAlign: "right",
	},
	container: {
		right: "80.3%",
		left: "0%",
	},
	profile: {
		marginTop: 4,
		marginLeft: -14,
		top: "50%",
		left: "50%",
		color: Color.gray_200,
		textAlign: "center",
	},
	cocolineuserIcon: {
		top: 3,
		left: 17,
		width: 18,
		height: 18,
		overflow: "hidden",
		position: "absolute",
	},
	horizontalContainer1: {
		left: "80.3%",
		right: "0%",
		width: "19.7%",
	},
	horizontalContainer: {
		height: "54.05%",
		width: "73.33%",
		top: "35.14%",
		right: "13.33%",
		bottom: "10.81%",
		left: "13.33%",
		position: "absolute",
	},
	navbarParent: {
		width: "100%",
		left: "0%",
		bottom: "0%",
		height: "100%",
		right: "0%",
		top: "0%",
		position: "absolute",
	},
	navbar: {
		bottom: 0,
		left: 0,
		width: 360,
		height: 74,
		position: "absolute",
	},
});

export default BottomNav;
