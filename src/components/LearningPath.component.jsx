import { Image, StyleSheet, Text, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Path } from "./Path.component";
import { Padding, Color, FontSize, Border } from "../styles/GlobalStyles";
import Colors from "../styles/Colors";

const Level = ({ title, isLocked }) => {
	return (
		<View
			style={{
				backgroundColor: Colors.primary,
				paddingVertical: 13,
				paddingHorizontal: 30,
				borderRadius: 50,
				flexDirection: "row",
				justifyContent: "space-between",
			}}
		>
			<Text
				style={{
					color: Colors.white,
					fontSize: 16,
				}}
			>
				{title}
			</Text>
			<Fontisto
				name={isLocked ? "locked" : "unlocked"}
				size={20}
				color="white"
			/>
		</View>
	);
};

export const LearningPath = () => {
	return (
		<View
			style={{
				paddingHorizontal: 30,
				marginTop: 20,
			}}
		>
			<View
				style={{
					marginVertical: 20,
				}}
			>
				<Level title={"Level 1: Novice"} />
				<Path titleStep={"Introduction to UX Design"} />
				<Path titleStep={"Learn UX fundamentals"} isActive />
				<Path titleStep={"Develop skills in user research"} />
				<Path titleStep={"Master UX Design tools"} />
				<Path titleStep={"Build a simple UX design project"} />
			</View>
			<View
				style={{
					marginVertical: 20,
				}}
			>
				<Level title={"Level 2: Intermediate"} isLocked />
			</View>
			<View>
				<Level title={"Level 3: Expert"} isLocked />
			</View>
		</View>
	);
};
