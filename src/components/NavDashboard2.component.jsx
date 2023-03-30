import * as React from "react";
import { Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color } from "../styles/GlobalStyles";

const NavDashboard2 = ({ style }) => {
	const navigation = useNavigation();

	return (
		<Pressable
			style={[styles.navdashboard, style]}
			onPress={() => navigation.navigate("DashboardScreen")}
		>
			<Image
				style={styles.nounDashboard42777762Icon}
				resizeMode="cover"
				source={require("../assets/noundashboard4277776-2.png")}
			/>
			<Text style={styles.dashboard}>Dashboard</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	nounDashboard42777762Icon: {
		width: 36,
		height: 36,
		overflow: "hidden",
	},
	dashboard: {
		fontSize: FontSize.size_3xs,
		lineHeight: 16,
		fontWeight: "500",
		color: Color.gray_200,
		textAlign: "right",
	},
	navdashboard: {
		width: 50,
		alignItems: "center",
	},
});

export default NavDashboard2;
