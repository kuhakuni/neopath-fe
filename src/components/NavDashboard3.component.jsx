import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, Color } from "../styles/GlobalStyles";

const NavDashboard3 = ({ style }) => {
	return (
		<View style={[styles.navdashboard, style]}>
			<Image
				style={styles.nounDashboard42777762Icon}
				resizeMode="cover"
				source={require("../assets/noundashboard4277776-21.png")}
			/>
			<Text style={styles.dashboard}>Dashboard</Text>
		</View>
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
		color: Color.royalblue_100,
		textAlign: "right",
	},
	navdashboard: {
		width: 50,
		alignItems: "center",
	},
});

export default NavDashboard3;
