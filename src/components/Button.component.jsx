import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../styles/Colors";

export default ButtonPrimary = (props) => {
	const styles = StyleSheet.create({
		button: {
			alignItems: "center",
			justifyContent: "center",
			paddingVertical: 12,
			paddingHorizontal: 32,
			borderRadius: 10,
			backgroundColor: Colors.primary,
		},
		buttonText: {
			color: Colors.white,
			fontSize: props?.fontSize || 16,
		},
	});
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={props.onPress}
			activeOpacity={0.7}
		>
			<Text style={styles.buttonText}>{props.title}</Text>
		</TouchableOpacity>
	);
};
