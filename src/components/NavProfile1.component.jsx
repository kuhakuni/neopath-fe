import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, Color, Padding } from "../styles/GlobalStyles";

const NavProfile1 = ({ style }) => {
	return (
		<View style={[styles.navprofile, style]}>
			<Image
				style={styles.cocolineuserIcon}
				resizeMode="cover"
				source={require("../assets/cocolineuser1.png")}
			/>
			<Text style={styles.profile}>Profile</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	cocolineuserIcon: {
		width: 36,
		height: 36,
		overflow: "hidden",
	},
	profile: {
		fontSize: FontSize.size_3xs,
		lineHeight: 16,
		fontWeight: "500",
		color: Color.royalblue_100,
		textAlign: "center",
	},
	navprofile: {
		width: 50,
		paddingHorizontal: Padding.p_3xs,
		paddingVertical: 0,
		alignItems: "center",
	},
});

export default NavProfile1;
