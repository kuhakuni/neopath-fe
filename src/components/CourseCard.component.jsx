import { View, Image, Text } from "react-native";
import Colors from "../styles/Colors";

const CourseCardVertical = () => {};

const CourseCardHorizontal = () => {
	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				borderRadius: 15,
				maxWidth: "100%",
				marginVertical: 10,
			}}
		>
			<Image
				style={{
					width: "40%",
					height: 80,
					borderRadius: 10,
					resizeMode: "cover",
					marginRight: 10,
				}}
				source={require("../assets/course-img.png")}
			/>
			<View
				style={{
					alignContent: "flex-start",
					alignSelf: "baseline",
				}}
			>
				<Text
					style={{
						maxWidth: "60%",
						fontSize: 18,
						fontWeight: "500",
					}}
				>
					The 4 Most Important Laws of UX Design
				</Text>
				<View
					style={{
						flexDirection: "row",
					}}
				>
					<Chips
						title={"Free"}
						textColor={Colors.white}
						bgColor={Colors.primary}
					/>
				</View>
			</View>
		</View>
	);
};

export { CourseCardVertical, CourseCardHorizontal };
