import { Text, View } from "react-native";

export default Chips = ({ title, textColor, bgColor }) => {
	return (
		<View
			style={{
				backgroundColor: bgColor,
				paddingVertical: 5,
				paddingHorizontal: 15,
				marginRight: 10,
				borderRadius: 15,
			}}
		>
			<Text
				style={{
					color: textColor,
					fontSize: 16,
				}}
			>
				{title}
			</Text>
		</View>
	);
};
