import { View, Text, Image } from "react-native";
import * as Progress from "react-native-progress";
import ButtonPrimary from "../components/Button.component";
import Colors from "../styles/Colors";

const data = [
	{
		value: 0.95,
		caption: "Problem Solving",
	},
	{
		value: 0.9,
		caption: "Critical Thinking",
	},
	{
		value: 0.75,
		caption: "Data Analysis",
	},
	{
		value: 0.35,
		caption: "Detail-oriented",
	},
	{
		value: 0.8,
		caption: "Communication",
	},
	{
		value: 0.85,
		caption: "Business Acumen",
	},
];

export default ValueComponent = ({ onPress }) => {
	return (
		<View
			style={{
				marginTop: 30,
			}}
		>
			<View
				style={{
					height: 300,
				}}
			>
				<Image
					source={require("../assets/chart.png")}
					style={{
						width: 300,
						height: 300,
						resizeMode: "contain",
					}}
				/>
			</View>
			{data.map((item, index) => {
				return (
					<View
						key={index}
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 15,
						}}
					>
						<Text
							style={{
								fontSize: 14,
								color: "#343434",
							}}
						>
							{item.caption}
						</Text>
						<View>
							<Progress.Bar
								progress={item.value}
								color={Colors.primary}
								unfilledColor={"#D7D7D7"}
								borderWidth={0}
								width={100}
								height={10}
							/>
						</View>
						<Text
							style={{
								fontSize: 14,
								color: "#343434",
							}}
						>
							{item.value * 10}/10
						</Text>
					</View>
				);
			})}
			<View
				style={{
					marginTop: 30,
				}}
			>
				<ButtonPrimary title="Next" onPress={onPress} />
			</View>
		</View>
	);
};
