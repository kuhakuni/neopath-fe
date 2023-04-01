import { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	StatusBar,
	Image,
	ScrollView,
} from "react-native";
import ChoosePath from "../components/ChoosePath.component";
import { CareerPath } from "../components/CareerPath.component";
import { LearningPath } from "../components/LearningPath.component";
import PathListCardContainer from "../components/PathListCardContainer";
import Colors from "../styles/Colors";
export default PathScreen = () => {
	const [isCareerPath, setCareerPath] = useState(false);
	return (
		<View
			style={{
				backgroundColor: Colors.white,
				flex: 1,
			}}
		>
			<View
				style={[
					{
						backgroundColor: "#3D55D4",
						paddingBottom: 20,
						borderBottomRightRadius: 30,
						borderBottomLeftRadius: 30,
					},
				]}
			>
				<View
					style={{
						backgroundColor: Colors.primary,
						paddingTop: StatusBar.currentHeight + 30,
						paddingBottom: 25,
						paddingHorizontal: 25,
						borderBottomRightRadius: 30,
						borderBottomLeftRadius: 30,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-evenly",
							backgroundColor: "#C3DBFF",
							padding: 10,
							borderRadius: 50,
						}}
					>
						<TouchableOpacity
							onPress={() => {
								setCareerPath(false);
							}}
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-evenly",
								padding: 10,
								backgroundColor: isCareerPath
									? Colors.white
									: Colors.primary,
								borderRadius: 30,
								width: "45%",
							}}
						>
							{isCareerPath ? (
								<Image
									source={require("../assets/learn.png")}
									style={{
										width: 24,
										height: 24,
									}}
								/>
							) : (
								<Image
									source={require("../assets/learn-active.png")}
									style={{
										width: 24,
										height: 24,
									}}
								/>
							)}
							<Text
								style={{
									fontSize: 14,
									color: isCareerPath
										? Colors.primary
										: Colors.white,
									fontWeight: "500",
								}}
							>
								Learning Path
							</Text>
						</TouchableOpacity>
						<ChoosePath
							isActive={isCareerPath}
							onPress={() => setCareerPath(true)}
						/>
					</View>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "flex-start",
						paddingHorizontal: 30,
						marginTop: 15,
						borderBottomRightRadius: 30,
						borderBottomLeftRadius: 30,
					}}
				>
					<View
						style={{
							backgroundColor: Colors.white,
							padding: 10,
							borderRadius: 50,
							marginRight: 10,
						}}
					>
						<Image
							style={{
								width: 24,
								height: 24,
							}}
							resizeMode="contain"
							source={require("../assets/learn.png")}
						/>
					</View>
					<Text
						style={{
							color: Colors.white,
							fontSize: 16,
							paddingRight: 35,
						}}
					>
						{isCareerPath
							? "Here are some suggested paths to kickstart your career as a UX designer."
							: "Here are some recommended paths to begin learning about UX design."}
					</Text>
				</View>
			</View>
			<ScrollView>
				{isCareerPath ? <CareerPath /> : <LearningPath />}
			</ScrollView>
		</View>
	);
};
