import { View, Text } from "react-native";
import Colors from "../styles/Colors";
// import RadarChart from "react-svg-radar-chart";

const data = [
	{
		data: {
			critical: 0.9,
			problem: 0.95,
			data: 0.75,
			detail: 0.35,
			communication: 0.8,
			business: 0.85,
		},
		meta: { color: Colors.primary },
	},
];

const captions = {
	// columns
	critical: "Critical Thinking",
	problem: "Problem Solving",
	data: "Data Analysis",
	detail: "Detail-oriented",
	communication: "Communication Skills",
	business: "Business Acumen",
};

export default ValueComponent = () => {
	return (
		<View>
        <Text>Result</Text>
			{/* <RadarChart captions={captions} data={data} size={450} /> */}
		</View>
	);
};
