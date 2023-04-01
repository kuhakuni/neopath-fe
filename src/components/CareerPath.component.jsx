import { Image, StyleSheet, Text, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Path } from "./Path.component";
import Colors from "../styles/Colors";

export const CareerPath = () => {
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
				<View
					style={{
						position: "relative",
					}}
				>
					<Path titleStep={"Get certification of UX Design"} isDone />
					<Path titleStep={"Build a strong portfolio"} isActive />
					<Path titleStep={"Create your CV"} isLocked />
					<Path titleStep={"Gain experience in UX Design"} isLocked />
					<Path titleStep={"Pursue advanced education"} isLocked />
					<Path titleStep={"Intern at a tech company"} isLocked />
					<Path titleStep={"Apply for job"} isLocked />
				</View>
			</View>
		</View>
	);
};
