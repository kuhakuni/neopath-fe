import {
	SafeAreaView,
	View,
	Text,
	StyleSheet,
	TextInput,
	StatusBar,
	TouchableOpacity,
} from "react-native";
import { useMemo, useRef, useCallback, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { Picker } from "@react-native-picker/picker";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import ButtonPrimary from "../components/Button.component";
import Colors from "../styles/Colors";

export default function PersonalFormScreen({ navigation }) {
	const [isModalOpen, setModalOpen] = useState(true);
	const [name, setName] = useState("");
	const [gender, setGender] = useState("");
	const [age, setAge] = useState("");
	const [selfDescription, setSelfDescription] = useState("");
	const Paragraph = ({ children }) => {
		return <Text style={styles.paragraph}>{children}</Text>;
	};
	// ref
	const bottomSheetRef = useRef(null);

	// variables
	const snapPoints = useMemo(() => ["25%", "70%"], []);

	// callbacks
	const handleSheetChanges = useCallback((index) => {}, []);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "space-between",
			backgroundColor: isModalOpen ? "rgba(0,0,0,0.1)" : Colors.white,
			paddingVertical: StatusBar.currentHeight + 30,
			paddingHorizontal: 25,
		},
		arrowContainer: {
			backgroundColor: "#F1F7FF",
			borderRadius: 10,
			width: 40,
			height: 40,
			justifyContent: "center",
			alignItems: "center",
			marginBottom: 20,
		},
		inputContainer: {
			marginTop: 20,
			marginBottom: 50,
		},
		input: {
			borderRadius: 10,
			borderWidth: 2,
			marginBottom: 20,
			paddingStart: 20,
			paddingVertical: 10,
			fontSize: 16,
			borderColor: "#E5E5E5",
		},
		button: {
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "row",
			paddingVertical: 12,
			paddingHorizontal: 32,
			borderRadius: 10,
			backgroundColor: Colors.primary,
		},
		buttonText: {
			color: Colors.white,
			fontSize: 20,
			marginRight: 5,
		},
		heading: {
			fontSize: 24,
			fontWeight: "600",
		},

		contentContainer: {
			padding: 16,
			flex: 1,
		},
		title: {
			fontSize: 20,
			fontWeight: "500",
			marginBottom: 5,
		},
		subtitle: {
			fontSize: 16,
			fontStyle: "italic",
			color: Colors.gray,
		},
		chipContainer: {
			flexDirection: "row",
			marginVertical: 20,
		},
		chip: {
			paddingHorizontal: 10,
			flexDirection: "row",
			alignItems: "center",
			paddingVertical: 5,
			borderRadius: 15,
			marginHorizontal: 5,
			marginTop: 10,
		},
		textChip: {
			color: Colors.white,
			marginStart: 5,
			fontWeight: "500",
			fontSize: 12,
		},
		paragraph: {
			fontSize: 14,
			color: Colors.gray,
		},
	});
	return (
		<SafeAreaView style={styles.container}>
			<View>
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
				<Text style={styles.heading}>Personal Information</Text>
				<Text style={styles.paragraph}>
					Please fill this form before continuing the test.
				</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Name"
						placeholderTextColor="#838383"
						value={name}
						onChangeText={(text) => setName(text)}
						readOnly={isModalOpen}
					/>
					<View
						style={{
							borderColor: "#E5E5E5",
							borderWidth: 2,
							borderRadius: 10,
							marginBottom: 20,
						}}
					>
						<Picker
							selectedValue={gender}
							onValueChange={(itemValue) => setGender(itemValue)}
							style={{
								color:
									Number(gender) !== 0 ? "#000" : "#838383",
							}}
							mode="dropdown"
						>
							<Picker.Item
								label="Gender"
								value={"0"}
								enabled={false}
							/>
							<Picker.Item label="Male" value={"1"} />
							<Picker.Item label="Female" value={"2"} />
						</Picker>
					</View>

					<TextInput
						style={styles.input}
						placeholder="Age"
						placeholderTextColor="#838383"
						value={age}
						inputMode="numeric"
						keyboardType="numeric"
						onChangeText={(text) => setAge(text)}
					/>
					<TextInput
						style={styles.input}
						placeholder="Self Description"
						placeholderTextColor="#838383"
						value={selfDescription}
						multiline={true}
						numberOfLines={5}
						textAlignVertical="top"
						onChangeText={(text) => setSelfDescription(text)}
					/>
				</View>
			</View>
			<TouchableOpacity
				style={styles.button}
				onPress={() =>
					navigation.navigate("TestScreen", {
						name,
						age,
						gender,
						selfDescription,
					})
				}
				activeOpacity={0.7}
			>
				<Text style={styles.buttonText}>Next</Text>
				<AntDesign name="arrowright" size={16} color={Colors.white} />
			</TouchableOpacity>
			<BottomSheet
				ref={bottomSheetRef}
				index={1}
				snapPoints={snapPoints}
				onChange={handleSheetChanges}
			>
				<View style={styles.contentContainer}>
					<View
						style={{
							alignItems: "center",
						}}
					>
						<Text style={styles.title}>
							Aptitude Recognition Test
						</Text>
						<Text style={styles.subtitle}>by PijarBelajar</Text>
						<View style={styles.chipContainer}>
							<View
								style={[
									styles.chip,
									{ backgroundColor: Colors.primary },
								]}
							>
								<SimpleLineIcons
									name="notebook"
									size={14}
									color="white"
								/>
								<Text style={styles.textChip}>
									60 Questions
								</Text>
							</View>
							<View
								style={[
									styles.chip,
									{ backgroundColor: Colors.secondary },
								]}
							>
								<SimpleLineIcons
									name="clock"
									size={14}
									color="white"
								/>
								<Text style={styles.textChip}>
									15 - 20 Minutes
								</Text>
							</View>
						</View>
					</View>
					<View
						style={{
							marginBottom: 20,
						}}
					>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "500",
								marginBottom: 5,
							}}
						>
							Description
						</Text>
						<Paragraph>
							Aptitude Recognition Test is designed to help you
							uncover your unique abilities, strengths, and
							potential. By taking this test, you'll gain valuable
							insights into your cognitive and intellectual
							strengths, as well as your natural talents and
							abilities.
						</Paragraph>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "500",
								marginTop: 20,
								marginBottom: 10,
							}}
						>
							Instruction
						</Text>
						<Paragraph>
							1. There are no right or wrong answers. Just answer
							to the best of your ability.
						</Paragraph>
						<Paragraph>
							2. To get the most accurate results, it's important
							to answer each question honestly and without
							overthinking.
						</Paragraph>
						<Paragraph>
							3. We recommend taking the test in a safe and quiet
							environment where you can focus without any
							distractions.
						</Paragraph>
					</View>
					<ButtonPrimary
						title="Start Test"
						onPress={() => {
							bottomSheetRef.current?.close();
							setModalOpen(false);
						}}
					/>
				</View>
			</BottomSheet>
		</SafeAreaView>
	);
}
