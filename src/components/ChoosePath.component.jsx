import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import Colors from "../styles/Colors";

export default ChoosePath = ({ isActive, onPress }) => {
	return (
		<TouchableOpacity
			style={{
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-evenly",
				padding: 10,
				backgroundColor: isActive ? Colors.primary : Colors.white,
				borderRadius: 30,
				width: "45%",
			}}
			onPress={onPress}
		>
			<MaterialIcons
				name="person-add-alt-1"
				size={24}
				color={isActive ? Colors.white : Colors.primary}
			/>
			<Text
				style={{
					fontSize: 14,
					color: isActive ? Colors.white : Colors.primary,
					fontWeight: "500",
				}}
			>
				Career Path
			</Text>
		</TouchableOpacity>
	);
};
