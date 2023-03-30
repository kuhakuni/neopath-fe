import { useEffect, useState } from "react";
import {
	View,
	Text,
	ActivityIndicator,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../styles/Colors";
import { Styles } from "../styles/Styles";
import ValueComponent from "../components/Value.component";
import StrengthComponent from "../components/Strength.component";
import RoleComponent from "../components/Role.component";

const Tab = ({ title, isActive, iconName, onPress }) => {
	return (
		<TouchableOpacity
			style={[styles.tab, isActive && styles.activeTab]}
			onPress={onPress}
			activeOpacity={0.5}
		>
			<View
				style={{
					backgroundColor: "#DBE9FF",
					padding: 5,
					borderRadius: 5,
					marginRight: 10,
				}}
			>
				<MaterialCommunityIcons
					name={iconName}
					size={18}
					color={Colors.primary}
				/>
			</View>
			<Text style={styles.tabText}>{title}</Text>
		</TouchableOpacity>
	);
};

const LoadingScreen = () => {
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
				Analyzing your answer
			</Text>
			<Text
				style={{
					marginTop: 5,
					fontSize: 18,
				}}
			>
				Please wait for a while.
			</Text>
		</View>
	);
};

export default ResultsScreen = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [selectedTab, setSelectedTab] = useState(1);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	if (isLoading) {
		return <LoadingScreen />;
	}

	return (
		<View
			style={{
				...Styles.container,
				alignItems: "center",
				justifyContent: "space-between",
				backgroundColor: Colors.white,
			}}
		>
			<Text
				style={{
					fontSize: 24,
					fontWeight: "500",
				}}
			>
				Your{" "}
				<Text
					style={{
						color: Colors.primary,
					}}
				>
					Result
				</Text>
			</Text>
			<View style={styles.tabContainer}>
				<Tab
					title="Value"
					isActive={selectedTab === 1}
					iconName="account-plus"
					onPress={() => setSelectedTab(1)}
				/>
				<Tab
					title="Strength"
					isActive={selectedTab === 2}
					iconName="star-outline"
					onPress={() => setSelectedTab(2)}
				/>
				<Tab
					title="Role"
					isActive={selectedTab === 3}
					iconName="hexagon-outline"
					onPress={() => setSelectedTab(3)}
				/>
			</View>
			<View
				style={{
					flex: 1,
				}}
			>
				{selectedTab === 1 && (
					<ValueComponent onPress={() => setSelectedTab(2)} />
				)}
				{selectedTab === 2 && (
					<StrengthComponent onPress={() => setSelectedTab(3)} />
				)}
				{selectedTab === 3 && (
					<>
						<RoleComponent />
						<Text
							style={{
								marginTop: 30,
								fontSize: 14,
								textAlign: "center",
								color: "#393939",
							}}
						>
							Not sure about this
						</Text>
					</>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	tabContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginVertical: 10,
	},
	tab: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
		backgroundColor: "#F1F7FF",
		padding: 10,
		borderRadius: 10,
	},
	activeTab: {
		borderWidth: 1,
		borderColor: Colors.primary,
	},
	tabText: {
		fontSize: 16,
		fontWeight: "500",
	},
});
