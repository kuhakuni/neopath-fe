import { View, StyleSheet } from "react-native";
import ButtonPrimary from "../components/Button.component";
import CarouselComponent from "./Carousel.component";

export default StrengthComponent = () => {
	const data = [
		{
			title: "Problem Solving",
			text: "You tend to approach problems logically and methodically, and you enjoy working with abstract concepts and ideas.",
			img: require("../assets/strength-1.png"),
		},
		{
			title: "A good sense of spatial awareness",
			text: "You are able to visualize objects in your mind and manipulate them mentally. This skill can be useful in a variety of fields, including engineering, architecture, and design.",
			img: require("../assets/strength-2.png"),
		},
	];
	return (
		<View style={styles.container}>
			<CarouselComponent data={data} />
			<View
				style={{
					flex: 1,
					width: "100%",
					paddingHorizontal: 50,
				}}
			>
				<ButtonPrimary title="Next" onPress={() => {}} />
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "space-between",
	},
});
