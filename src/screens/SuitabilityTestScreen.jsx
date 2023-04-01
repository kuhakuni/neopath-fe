import {
	View,
	Text,
	StyleSheet,
	Pressable,
	TouchableOpacity,
	FlatList,
	Dimensions,
} from "react-native";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import { Styles } from "../styles/Styles";
import Colors from "../styles/Colors";
import RadioButton from "../components/RadioButton.component";

const AnswerInput = ({ setCurrentAnswer }) => {
	const [value, setValue] = useState();
	const handlePress = (val) => {
		if (val === value) {
			setValue(null);
			setCurrentAnswer(0);
		} else {
			setValue(val);
			setCurrentAnswer(val);
		}
	};

	return (
		<>
			<Pressable
				style={[
					styles.answerContainer,
					value === 4 && styles.selectedAnswerContainer,
				]}
				onPress={() => handlePress(4)}
			>
				<RadioButton
					isActive={value === 4}
					onPress={() => handlePress(4)}
				/>
				<Text
					style={[
						styles.answer,
						value === 4 && styles.selectedAnswer,
					]}
				>
					Strongly Agree
				</Text>
			</Pressable>
			<Pressable
				style={[
					styles.answerContainer,
					value === 3 && styles.selectedAnswerContainer,
				]}
				onPress={() => handlePress(3)}
			>
				<RadioButton
					isActive={value === 3}
					onPress={() => handlePress(3)}
				/>
				<Text
					style={[
						styles.answer,
						value === 3 && styles.selectedAnswer,
					]}
				>
					Agree
				</Text>
			</Pressable>
			<Pressable
				style={[
					styles.answerContainer,
					value === 2 && styles.selectedAnswerContainer,
				]}
				onPress={() => handlePress(2)}
			>
				<RadioButton
					isActive={value === 2}
					onPress={() => handlePress(2)}
				/>
				<Text
					style={[
						styles.answer,
						value === 2 && styles.selectedAnswer,
					]}
				>
					Disagree
				</Text>
			</Pressable>
			<Pressable
				style={[
					styles.answerContainer,
					value === 3 && styles.selectedAnswerContainer,
				]}
				onPress={() => handlePress(1)}
			>
				<RadioButton
					isActive={value === 1}
					onPress={() => handlePress(1)}
				/>
				<Text
					style={[
						styles.answer,
						value === 1 && styles.selectedAnswer,
					]}
				>
					Strongly Disagree
				</Text>
			</Pressable>
		</>
	);
};
const Instruction = () => {
	const data = [
		{
			instruction:
				"This test will help you reflect whether you're a good fit for a field of job.",
		},
		{
			instruction:
				"To take this test, please answer each question individually based on your own thoughts, feelings, and experiences",
		},
		{
			instruction:
				"This test is separated by 5 sections. and each section contains 5 questions.",
		},
		{
			instruction: "This test might take 5-10 minutes to complete.",
		},
	];
	return (
		<View>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<View style={{ marginBottom: 15, paddingHorizontal: 10 }}>
						<Text
							style={{
								color: "#595959",
								fontSize: 16,
							}}
						>
							{`\u25CF ${item.instruction}`}
						</Text>
					</View>
				)}
				keyExtractor={(_item, index) => index.toString()}
			/>
		</View>
	);
};

export default SuitabilityTestScreen = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [section, setSection] = useState(1);
	const [answer, setAnswer] = useState([]);
	const [currentAnswer, setCurrentAnswer] = useState(0);
	const questionPerSection = 5;
	const totalSection = 2;
	const width = Dimensions.get("window").width;
	const navigation = useNavigation();

	const goBack = () => {
		if (section === 1 && currentPage === 1) return;
		if (currentPage === 1) {
			setSection((prev) => {
				return prev - 1;
			});
			setCurrentPage(questionPerSection);
			return;
		}
		setCurrentPage((prev) => {
			return prev - 1;
		});
	};
	const goNext = () => {
		setAnswer((prev) => {
			return [
				...prev,
				{
					page: currentPage,
					section: section,
					answer: currentAnswer,
					questionId: 1,
				},
			];
		});
		if (section === totalSection && currentPage === questionPerSection)
			return;
		if (currentPage === questionPerSection) {
			setSection((prev) => {
				return prev + 1;
			});
			setCurrentPage(1);
			return;
		}
		setCurrentPage((prev) => {
			return prev + 1;
		});
	};
	const handleSubmit = () => {
		navigation.navigate("ReflectionResultScreen", { answer: answer });
	};
	useEffect(() => {
		console.log(currentAnswer);
	}, [currentAnswer]);
	return (
		<View
			style={[
				Styles.container,
				{
					backgroundColor: Colors.primary,
				},
			]}
		>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
				}}
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
				<View
					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text
						style={{
							color: Colors.white,
							fontSize: 24,
							fontWeight: "500",
						}}
					>
						{currentPage === 0
							? "Instructions"
							: `Section ${section} of ${totalSection}`}
					</Text>
				</View>
			</View>
			<View style={{ marginTop: 30 }}>
				<Progress.Bar
					progress={currentPage / questionPerSection}
					color={Colors.secondary}
					unfilledColor={"#ADCEFF"}
					borderWidth={0}
					width={width - 60}
				/>
			</View>
			<View
				style={{
					marginVertical: 30,
					backgroundColor: Colors.white,
					borderRadius: 25,
					paddingVertical: 70,
					paddingHorizontal: 15,
					flex: 1,
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				{currentPage !== 0 ? (
					<>
						<View>
							<Text
								style={{
									fontWeight: "600",
									fontSize: 24,
									marginBottom: 20,
								}}
							>
								I have no difficulty in explaining to others
								what I know.
							</Text>
							<AnswerInput
								setCurrentAnswer={(val) =>
									setCurrentAnswer(val)
								}
							/>
						</View>
						<View
							style={{
								flexDirection: "row",
								width: "100%",
								gap: 5,
							}}
						>
							<TouchableOpacity
								style={[styles.button, styles.buttonBorder]}
								onPress={() => goBack()}
								activeOpacity={0.7}
							>
								<Text
									style={[
										styles.buttonText,
										styles.textBorder,
									]}
								>
									Back
								</Text>
							</TouchableOpacity>
							{currentPage === questionPerSection &&
							section === totalSection ? (
								<TouchableOpacity
									style={[styles.button]}
									onPress={() => handleSubmit()}
									activeOpacity={0.7}
								>
									<Text style={styles.buttonText}>
										Submit
									</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity
									style={[styles.button]}
									onPress={() => goNext()}
									activeOpacity={0.7}
								>
									<Text style={styles.buttonText}>Next</Text>
								</TouchableOpacity>
							)}
						</View>
					</>
				) : (
					<>
						<View>
							<Text
								style={{
									fontWeight: "600",
									fontSize: 24,
									marginBottom: 20,
								}}
							>
								Welcome to the quick and fun self-diagnosis
								test!
							</Text>
							<Instruction />
						</View>
						<View
							style={{
								flexDirection: "row",
								width: "100%",
							}}
						>
							<TouchableOpacity
								style={[styles.button]}
								onPress={() => setCurrentPage(1)}
								activeOpacity={0.7}
							>
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "center",
										gap: 5,
									}}
								>
									<Text style={styles.buttonText}>
										Let's get started
									</Text>
									<AntDesign
										name="arrowright"
										size={14}
										color={Colors.white}
									/>
								</View>
							</TouchableOpacity>
						</View>
					</>
				)}
			</View>
		</View>
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
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 10,
		backgroundColor: Colors.primary,
		flex: 1,
	},
	buttonBorder: {
		borderWidth: 1,
		backgroundColor: "#fff",
		borderColor: Colors.primary,
	},
	buttonText: {
		color: Colors.white,
		fontSize: 16,
	},
	textBorder: {
		color: Colors.primary,
	},
});
