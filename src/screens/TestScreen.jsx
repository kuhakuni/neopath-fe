import {
	Pressable,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Image,
} from "react-native";
import { useState } from "react";
import ButtonPrimary from "../components/Button.component";
import RadioButton from "../components/RadioButton.component";
import { AntDesign } from "@expo/vector-icons";
import { Styles } from "../styles/Styles";
import Colors from "../styles/Colors";
import { StatusBar } from "expo-status-bar";

const questions = [
	"Do you enjoy working in a team?",
	"Are you comfortable with public speaking?",
	"Do you prefer working with numbers over words?",
	"Are you comfortable with ambiguity and uncertainty?",
	"Do you enjoy problem-solving and critical thinking?",
];

const AnswerInput = () => {
	const [value, setValue] = useState();
	const setActive = (val) => {
		if (val === value) {
			setValue(null);
		} else {
			setValue(val);
		}
	};

	return (
		<>
			<Pressable
				style={[
					styles.answerContainer,
					value === 1 && styles.selectedAnswerContainer,
				]}
				onPress={() => setActive(1)}
			>
				<RadioButton
					isActive={value === 1}
					onPress={() => setActive(1)}
				/>
				<Text
					style={[
						styles.answer,
						value === 1 && styles.selectedAnswer,
					]}
				>
					Yes
				</Text>
			</Pressable>
			<Pressable
				style={[
					styles.answerContainer,
					value === 0 && styles.selectedAnswerContainer,
				]}
				onPress={() => setActive(0)}
			>
				<RadioButton
					isActive={value === 0}
					onPress={() => setActive(0)}
				/>
				<Text
					style={[
						styles.answer,
						value === 0 && styles.selectedAnswer,
					]}
				>
					No
				</Text>
			</Pressable>
		</>
	);
};

export default TestScreen = ({ navigation }) => {
	return (
		<>
			<StatusBar backgroundColor="#fff" />
			<ScrollView
				style={[
					Styles.container,
					{
						backgroundColor: Colors.white,
					},
				]}
				showsVerticalScrollIndicator={false}
			>
				<TouchableOpacity
					style={styles.arrowContainer}
					onPress={() => navigation.goBack()}
				>
					<AntDesign
						name="arrowleft"
						size={30}
						color={Colors.primary}
					/>
				</TouchableOpacity>
				<Image
					source={require("../assets/progress-indicator.png")}
					style={{
						width: "100%",
						height: 25,
						resizeMode: "contain",
					}}
				/>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Text
						style={{
							fontSize: 14,
							color: "#6F6F6F",
						}}
					>
						1/5 sections
					</Text>
					<Text
						style={{
							fontSize: 14,
							color: "#6F6F6F",
						}}
					>
						1/60 questions
					</Text>
				</View>
				{questions.map((question, index) => (
					<View style={styles.questionsContainer} key={index}>
						<Text style={styles.questions}>
							{index + 1 + ". " + question}
						</Text>
						<AnswerInput />
					</View>
				))}
				<ButtonPrimary
					title="Submit"
					onPress={() => navigation.navigate("ResultsScreen")}
				/>
				<View style={{ height: 80 }} />
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	arrowContainer: {
		backgroundColor: "#F1F7FF",
		borderRadius: 10,
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
	},
	questionsContainer: {
		backgroundColor: Colors.white,
		borderRadius: 15,
		padding: 15,
		marginVertical: 15,
		marginHorizontal: 5,
		elevation: 2,
	},
	answerContainer: {
		flexDirection: "row",
		paddingVertical: 15,
		paddingHorizontal: 10,
		backgroundColor: "#fff",
		borderRadius: 10,
		marginBottom: 10,
		borderColor: "#696969",
		borderWidth: 1,
	},
	selectedAnswerContainer: {
		borderColor: Colors.primary,
	},
	answer: {
		fontSize: 18,
		fontWeight: "500",
		color: Colors.gray,
		marginStart: 10,
	},
	selectedAnswer: {
		color: Colors.black,
	},

	questions: {
		fontSize: 18,
		fontWeight: "500",
		marginBottom: 20,
	},
});
