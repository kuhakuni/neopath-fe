import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { Border, Color, Padding } from "../styles/GlobalStyles";
import Colors from "../styles/Colors";
import { Linking } from "react-native";

const CourseCardVertical = () => {};

const CourseCardHorizontal = ({ title, isPaid, source, img, url = "" }) => {
	return (
		<Pressable
			onPress={() => {
				if (!url) return;
				Linking.openURL(url);
			}}
			style={{
				flexDirection: "row",
				alignItems: "center",
				borderRadius: 15,
				maxWidth: "100%",
				marginVertical: 10,
				borderWidth: 1,
				paddingHorizontal: 7,
				paddingVertical: 10,
				borderColor: "#F3F3F3",
			}}
		>
			{img?.length > 0 ? (
				<Image
					style={{
						width: "40%",
						height: 80,
						borderRadius: 10,
						resizeMode: "cover",
						marginRight: 10,
					}}
					source={{ uri: img }}
				/>
			) : (
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
			)}
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
					{title || "The 4 Most Important Laws of UX Design"}
				</Text>
				{!source && (
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
				)}
				<Text
					style={{
						color: Colors.gray,
						fontSize: 14,
						fontWeight: "500",
					}}
				>
					{source}
				</Text>
			</View>
		</Pressable>
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
