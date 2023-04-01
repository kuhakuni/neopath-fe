import { View, ActivityIndicator, Text } from "react-native";
import Colors from "../styles/Colors";
import { Styles } from "../styles/Styles";

export default LoadingScreen = ({ title, subtitle }) => {
	return (
		<View
			style={{
				...Styles.container,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: Colors.white,
			}}
		>
			<ActivityIndicator
				size="large"
				style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
				color={Colors.primary}
			/>
			<Text
				style={{
					marginTop: 30,
					fontSize: 26,
					fontWeight: "500",
				}}
			>
				{title}
			</Text>
			<Text
				style={{
					marginTop: 5,
					fontSize: 18,
				}}
			>
				{subtitle}
			</Text>
		</View>
	);
};
