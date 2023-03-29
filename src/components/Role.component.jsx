import { View, StyleSheet } from "react-native";
import ButtonPrimary from "../components/Button.component";
import CarouselComponent from "./Carousel.component";
export default RoleComponent = () => {
	const data = [
		{
			title: "UX Designer",
			text: "Your skills in creative problem solving will help you to identify pain points in the user experience and find innovative solutions to improve it.",
			img: require("../assets/role-1.png"),
		},
		{
			title: "Business Consultant",
			text: "Your skills in strategic thinking and analysis will enable you to identify key business challenges and opportunities for improvement.",
			img: require("../assets/role-2.png"),
		},
	];
	return (
		<View style={styles.container}>
			<CarouselComponent data={data} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
});
