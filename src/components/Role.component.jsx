import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from "../styles/Colors";
import CarouselComponent from "./Carousel.component";
import { useNavigation } from "@react-navigation/native";
export default RoleComponent = () => {
	const navigation = useNavigation();
	const data = [
		{
			id: 1,
			title: "UX Designer",
			text: "Your skills in creative problem solving will help you to identify pain points in the user experience and find innovative solutions to improve it.",
			img: require("../assets/role-1.png"),
		},
		{
			id: 2,
			title: "Business Consultant",
			text: "Your skills in strategic thinking and analysis will enable you to identify key business challenges and opportunities for improvement.",
			img: require("../assets/role-2.png"),
		},
	];
	return (
		<View style={styles.container}>
			<CarouselComponent data={data} />
			<View
				style={{
					width: "100%",
					flexDirection: "row",
					justifyContent: "space-between",
					paddingHorizontal: 50,
				}}
			>
				<TouchableOpacity
					style={[styles.button, styles.buttonSecondary]}
					onPress={() => {}}
					activeOpacity={0.7}
				>
					<Text
						style={[
							styles.buttonText,
							{
								color: Colors.primary,
							},
						]}
					>
						More
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, styles.buttonPrimary]}
					onPress={() => navigation.navigate("AfterTestScreen")}
					activeOpacity={0.7}
				>
					<Text
						style={[
							styles.buttonText,
							{
								color: Colors.white,
							},
						]}
					>
						Select this role
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 10,
	},
	buttonPrimary: {
		backgroundColor: Colors.primary,
	},
	buttonSecondary: {
		backgroundColor: Colors.white,
		borderWidth: 1,
		borderColor: Colors.primary,
	},
	buttonText: {
		fontSize: 16,
	},
});
