import { View, StyleSheet, Pressable } from "react-native";
import Colors from "../styles/Colors";

export default RadioButton = ({ isActive, onPress }) => {
	return (
		<View style={styles.container}>
			<Pressable
				style={[
					styles.radioButton,
					isActive && styles.radioButtonSelected,
				]}
				onPress={onPress}
			>
				<View style={styles.radioButtonHolder} />
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	radioButton: {
		height: 24,
		width: 24,
		borderRadius: 12,
		borderWidth: 2,
		borderColor: "#000",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "#696969",
	},
	radioButtonSelected: {
		borderWidth: 0,
		backgroundColor: Colors.primary,
	},
	radioButtonHolder: {
		height: 12,
		width: 12,
		borderRadius: 6,
		backgroundColor: "#FFF",
	},
});
