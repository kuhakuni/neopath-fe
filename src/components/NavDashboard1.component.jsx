import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, Padding, FontSize } from "../styles/GlobalStyles";

const NavDashboard1 = ({ style }) => {
	return (
		<View style={[styles.navdashboard, style]}>
			<View style={styles.navpath}>
				<Image
					style={styles.navpathChild}
					resizeMode="cover"
					source={require("../assets/vector-5641.png")}
				/>
			</View>
			<Text style={styles.path}>Path</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	navpathChild: {
		width: 42,
		height: 42,
		overflow: "hidden",
		borderRadius: Border.br_81xl,
	},
	navpath: {
		backgroundColor: Color.lightsteelblue,
		padding: Padding.p_9xs,
		justifyContent: "center",
		borderRadius: Border.br_81xl,
		alignItems: "center",
	},
	path: {
		fontSize: FontSize.size_3xs,
		lineHeight: 16,
		fontWeight: "500",
		color: Color.royalblue_100,
		textAlign: "right",
	},
	navdashboard: {
		width: 50,
		alignItems: "center",
	},
});

export default NavDashboard1;
