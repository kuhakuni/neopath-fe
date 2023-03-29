import AsyncStorage from "@react-native-async-storage/async-storage";
const setToken = async (token) => {
	try {
		await AsyncStorage.setItem("token", token);
	} catch (error) {
		// Error saving data
		throw new Error(error);
	}
};

const getToken = async () => {
	try {
		const value = await AsyncStorage.getItem("token");
		if (value !== null) {
			return value;
		}
		return null;
	} catch (e) {
		throw new Error(e);
	}
};

export { setToken, getToken };
