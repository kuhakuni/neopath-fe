import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import { Styles } from "../styles/Styles";
import Colors from "../styles/Colors";
import { API_SERVICE } from "../config/api";
import { useAuth } from "../config/Auth";
import { Alert } from "react-native";
import ButtonPrimary from "../components/Button.component";

const ResultAnalysis = ({ title, value }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				marginVertical: 5,
			}}
		>
			<Text
				style={{
					color: "#343434",
					fontSize: 14,
				}}
			>
				{title}
			</Text>
			<Progress.Bar
				progress={value / 10}
				borderWidth={0}
				unfilledColor="#D7D7D7"
			/>
			<Text>{value}/10</Text>
		</View>
	);
};

const ResultCard = ({ title, descriptions }) => {
	return (
		<View
			style={{
				backgroundColor: "#F1F7FF",
				paddingHorizontal: 15,
				paddingVertical: 20,
				borderRadius: 10,
				marginVertical: 10,
			}}
		>
			<Text
				style={{
					fontSize: 18,
					fontWeight: "500",
					marginBottom: 5,
				}}
			>
				{title}
			</Text>
			{descriptions.map((description, index) => (
				<Text
					key={index}
					style={{
						fontSize: 16,
						paddingHorizontal: 10,
					}}
				>
					{`\u25CF ${description}`}
				</Text>
			))}
		</View>
	);
};

export default ReflectionResultScreen = ({ route }) => {
	const { answer } = route.params;
	const { authData } = useAuth();
	const [isLoading, setIsLoading] = useState(true);
	const [result, setResult] = useState({
		AvgAll: 0,
		Empathetic: 0,
		Analytical: 0,
		Adaptive: 0,
		Collaborative: 0,
		DesignSensitive: 0,
	});
	const navigation = useNavigation();
	useEffect(() => {
		API_SERVICE.student.post
			.reflection(authData, answer)
			.then((res) => {
				if (res.data.Success) {
					API_SERVICE.student.get
						.result(authData)
						.then((res) => {
							if (res.data.Success) {
								setResult(res.data.Body);
								setIsLoading(false);
							}
						})
						.catch((e) => {
							console.log("error get");
							Alert.alert("Error", "Something went wrong");
							navigation.goBack();
						});
				}
			})
			.catch((e) => {
				console.log("error post");
				Alert.alert("Error", "Something went wrong");
				navigation.goBack();
			});
	}, [answer]);

	useEffect(() => {
		console.log(answer);
	}, [answer]);

	if (isLoading) {
		return (
			<LoadingScreen
				title={"Analyzing your answer"}
				subtitle={"Please wait for a while"}
			/>
		);
	}
	return (
		<ScrollView>
			<View
				style={[
					Styles.container,
					{
						backgroundColor: Colors.white,
					},
				]}
			>
				<Text
					style={{
						fontSize: 24,
						fontWeight: "500",
						textAlign: "center",
						marginBottom: 20,
					}}
				>
					Your<Text style={{ color: Colors.primary }}> Result</Text>
				</Text>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "500",
					}}
				>
					Overall Result
				</Text>
				<View
					style={{
						backgroundColor: "#F1F7FF",
						paddingHorizontal: 10,
						paddingVertical: 20,
						flexDirection: "row",
						width: "100%",
						gap: 10,
						marginTop: 10,
						alignItems: "center",
						justifyContent: "space-between",
						borderRadius: 10,
					}}
				>
					<Progress.Circle
						size={80}
						unfilledColor="#ADCEFF"
						color={Colors.primary}
						progress={result.AvgAll / 10}
						direction="counter-clockwise"
						thickness={5}
						formatText={() => {
							return (result.AvgAll * 10).toFixed(1) + "%";
						}}
						showsText
						borderWidth={0}
						textStyle={{
							fontSize: 20,
							fontWeight: "500",
						}}
					/>
					<View
						style={{
							flex: 1,
						}}
					>
						<Text
							style={{
								fontSize: 18,
								fontWeight: "600",
								color: Colors.primary,
								marginBottom: 5,
							}}
						>
							Congratulations!
						</Text>
						<Text
							style={{
								fontSize: 16,
							}}
						>
							Your suitability test shows that you possess the key
							skills necessary for success in UX design.
						</Text>
					</View>
				</View>
				<View
					style={{
						marginVertical: 20,
					}}
				>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "500",
							marginBottom: 20,
						}}
					>
						Result Analysis
					</Text>
					<View
						style={{
							backgroundColor: "#F1F7FF",
							paddingHorizontal: 10,
							paddingVertical: 15,
							borderRadius: 10,
						}}
					>
						<ResultAnalysis
							title={"Emphaty"}
							value={result.Empathetic.toFixed(2)}
						/>
						<ResultAnalysis
							title={"Analytical"}
							value={result.Analytical.toFixed(2)}
						/>
						<ResultAnalysis
							title={"Adaptive"}
							value={result.Adaptive.toFixed(2)}
						/>
						<ResultAnalysis
							title={"Collaborative"}
							value={result.Collaborative.toFixed(2)}
						/>
						<ResultAnalysis
							title={"Design Sensitive"}
							value={result.DesignSensitive.toFixed(2)}
						/>
					</View>
				</View>
				<ResultCard
					title={"Empathetic"}
					descriptions={[
						"You're a person who's always taking care of what's going on around you, or listening to others.",
					]}
				/>
				<ResultCard
					title={"Analytical"}
					descriptions={[
						"You have a keen eye for detail and actively go out to find the root causes of the problems.",
					]}
				/>
				<ResultCard
					title={"Adaptive"}
					descriptions={[
						"You are able to quickly adapt to changes and new challenges.",
						"our ability to pivot and adjust your design approach allows you to stay agile in a constantly evolving field.",
					]}
				/>
				<ResultCard
					title={"Collaborative"}
					descriptions={[
						"You excel at working with others and building strong relationships.",
						"Your collaborative mindset allows you to bring out the best in your colleagues and create a positive and supportive work environment.",
					]}
				/>
				<ResultCard
					title={"Design Sensitive"}
					descriptions={[
						"Your ability to balance form and function allows you to create beautiful and effective products.",
						"You are able to understand the emotional impact of design and use it to create memorable user experiences.",
					]}
				/>
				<View
					style={{
						marginVertical: 25,
					}}
				>
					<ButtonPrimary
						title={"Back to Path"}
						onPress={() => navigation.navigate("PathScreen")}
					/>
				</View>
			</View>
		</ScrollView>
	);
};
