import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { useEffect, useState } from "react";
import ButtonPrimary from "../components/ButtonPrimary";

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState({
		email: "",
		password: "",
	});
	const styles = StyleSheet.create({
		container: {
			position: "relative",
			flex: 1,
			paddingTop: 50,
			paddingHorizontal: 25,
		},
		img: {
			width: 200,
			height: 200,
			resizeMode: "contain",
			alignSelf: "center",
		},
		loginContainer: {
			flex: 1,
		},
		inputContainer: {
			marginTop: 20,
			marginBottom: 50,
		},
		heading: {
			fontSize: 30,
			fontWeight: "600",
			marginBottom: 10,
		},
		paragraph: {
			fontSize: 16,
			fontWeight: 400,
			color: "#454545",
		},
		input: {
			borderRadius: 10,
			padding: 10,
			borderWidth: 1,
		},
		error: {
			color: "#ff0000",
			fontWeight: 500,
		},
	});

	const handleLogin = () => {
		let errors = {};

		if (!email) {
			errors.email = "Email cannot be empty";
		} else if (
			email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null
		) {
			errors.email = "Email is not valid";
		}

		if (!password) {
			errors.password = "Password cannot be empty";
		} else if (password.length < 8) {
			errors.password = "Password must be at least 8 characters";
		}

		setError(errors);

		if (Object.keys(errors).length === 0) {
			navigation.navigate("AfterLoginScreen");
		}
	};

	return (
		<View style={styles.container}>
			<Image
				style={styles.img}
				source={require("../../assets/logo-2.png")}
			/>
			<View style={styles.loginContainer}>
				<Text style={styles.heading}>Login</Text>
				<Text style={styles.paragraph}>
					Account should be given by your University.
				</Text>
				<View style={styles.inputContainer}>
					<View
						style={{
							marginBottom: 15,
						}}
					>
						<TextInput
							style={{
								...styles.input,
								borderColor: error.email
									? "#ff0000"
									: "#E5E5E5",
							}}
							placeholder="student@email.edu.my"
							value={email}
							inputMode="email"
							onChangeText={(text) => setEmail(text)}
						/>
						{error.email && (
							<Text style={styles.error}>{error.email}</Text>
						)}
					</View>
					<View
						style={{
							marginBottom: 15,
						}}
					>
						<TextInput
							style={{
								...styles.input,
								borderColor: error.password
									? "#ff0000"
									: "#E5E5E5",
							}}
							placeholder="Password"
							value={password}
							secureTextEntry={true}
							onChangeText={(text) => setPassword(text)}
						/>
						{error.password && (
							<Text style={styles.error}>{error.password}</Text>
						)}
					</View>
					<Text
						style={{
							fontWeight: 500,
						}}
					>
						Forgot password?
					</Text>
				</View>
				<ButtonPrimary
					title="Login"
					disabled={email.length === 0 || password.length === 0}
					onPress={handleLogin}
				/>
			</View>
		</View>
	);
};

export default LoginScreen;
