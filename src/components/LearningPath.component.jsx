import { Image, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Fontisto } from "@expo/vector-icons";
import { useAuth } from "../config/Auth";
import { API_SERVICE } from "../config/api";
import { Path } from "./Path.component";
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
	const [data, setData] = useState([]);
	const { authData } = useAuth();
	useEffect(() => {
		API_SERVICE.student.get
			.course(authData)
			.then((res) => {
				if (res.data.Success) {
					setData(res.data.Body);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);
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
				{data.map((item, index) => {
					if (item.Level === "Novice") {
						return (
							<Path
								key={index}
								titleStep={item.Name}
								isLocked={index > 1}
								isDone={index === 0}
								isActive={index === 1}
								id={item.ID}
								title={item.Name}
								description={item.Deskripsi}
							/>
						);
					}
				})}
				<Path titleStep={"Reflection Test"} isTest />
				{/* <View
					style={{
						position: "relative",
					}}
				>
					<Path titleStep={"Introduction to UX Design"} isDone />
					<Path titleStep={"Learn UX fundamentals"} isActive />
					<Path
						titleStep={"Develop skills in user research"}
						isLocked
					/>
					<Path titleStep={"Master UX Design tools"} isLocked />
					<Path
						titleStep={"Build a simple UX design project"}
						isLocked
					/>
					<Path titleStep={"Reflection Test"} isTest />
				</View> */}
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
