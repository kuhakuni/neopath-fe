import * as React from "react";
import {
	StyleProp,
	ViewStyle,
	Image,
	StyleSheet,
	View,
	Text,
	Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Padding, FontSize,  } from "../styles/GlobalStyles";

const NavDashboard = ({ style }) => {
	const navigation = useNavigation();

	return (
		<Pressable
			style={[styles.navdashboard, style]}
			onPress={() => navigation.navigate("false")}
		>
			<View style={styles.navpath}>
				<Image
					style={styles.navpathChild}
					resizeMode="cover"
					source={require("../assets/vector-564.png")}
				/>
			</View>
			<Text style={styles.path}>Path</Text>
		</Pressable>
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
		color: Color.gray_200,
		textAlign: "right",
	},
	navdashboard: {
		width: 50,
		alignItems: "center",
	},
});

export default NavDashboard;
