import { View, Image, Text, StyleSheet } from "react-native";
import { Border, Color, Padding } from "../styles/GlobalStyles";
import Colors from "../styles/Colors";

const CourseCardVertical = () => {};

const CourseCardHorizontal = ({ isPaid }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				borderRadius: 15,
				maxWidth: "100%",
				marginVertical: 10,
				borderWidth: 1,
				paddingHorizontal: 7,
				paddingVertical: 10,
				borderColor: "#F3F3F3",
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
					maxWidth: "60%",
				}}
			>
				<Text
					style={{
						fontSize: 18,
						fontWeight: "500",
						marginBottom: 5,
					}}
				>
					The 4 Most Important Laws of UX Design
				</Text>
				<View
					style={{
						flexDirection: "row",
					}}
				>
					<View
						style={{
							backgroundColor: "#F3F3F3",
							paddingVertical: 5,
							paddingHorizontal: 10,
							marginRight: 10,
							borderRadius: 15,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Image
							style={styles.vectorIcon}
							resizeMode="contain"
							source={require("../assets/vector1.png")}
						/>
					</View>
					{isPaid ? (
						<Chips
							title={"Paid"}
							textColor={Colors.white}
							bgColor={Colors.secondary}
						/>
					) : (
						<Chips
							title={"Free"}
							textColor={Colors.white}
							bgColor={Colors.primary}
						/>
					)}
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	vectorIcon: {
		width: 55,
		height: 10,
	},
	button1: {
		borderRadius: Border.br_6xl,
		backgroundColor: Color.grey1,
		paddingHorizontal: Padding.p_4xs,
	},
});

export { CourseCardVertical, CourseCardHorizontal };
