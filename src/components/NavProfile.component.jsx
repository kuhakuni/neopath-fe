import * as React from "react";
import { Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Padding } from "../styles/GlobalStyles";

const NavProfile = ({ style }) => {
	const navigation = useNavigation();

	return (
		<Pressable
			style={[styles.navprofile, style]}
			// onPress={() => navigation.navigate("ProfileScreen")}
		>
			<Image
				style={styles.cocolineuserIcon}
				resizeMode="cover"
				source={require("../assets/cocolineuser.png")}
			/>
			<Text style={styles.profile}>Profile</Text>
		</Pressable>
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
		color: Color.gray_200,
		textAlign: "center",
	},
	navprofile: {
		paddingHorizontal: Padding.p_3xs,
		paddingVertical: 0,
		alignItems: "center",
	},
});

export default NavProfile;
