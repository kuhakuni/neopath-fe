import { FontAwesome5 } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import { useState, useRef } from "react";
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import Colors from "../styles/Colors";

export default CarouselComponent = ({ data }) => {
	const SLIDER_WIDTH = Dimensions.get("window").width;
	const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
	const [activeIndex, setActiveIndex] = useState(0);
	const carouselRef = useRef(null);

	const cardItem = ({ item }) => {
		const { title, text, img } = item;
		return (
			<View style={styles.cardContainer}>
				<Image style={styles.cardImage} source={img} />
				<Text style={styles.cardTitle}>{title}</Text>
				<Text style={styles.cardText}>{text}</Text>
			</View>
		);
	};
	const ArrowPagination = ({ isLeft, onPress, disabled }) => {
		const iconName = isLeft ? "chevron-left" : "chevron-right";
		return (
			<TouchableOpacity
				style={[
					styles.arrow,
					isLeft ? styles.arrowLeft : styles.arrowRight,
				]}
				disabled={disabled}
				onPress={onPress}
			>
				<FontAwesome5 name={iconName} size={18} color="white" />
			</TouchableOpacity>
		);
	};
	return (
		<>
			<ArrowPagination
				isLeft={true}
				onPress={() => {
					carouselRef.current.snapToPrev();
				}}
				disabled={activeIndex === 0}
			/>
			<ArrowPagination
				isLeft={false}
				onPress={() => {
					carouselRef.current.snapToNext();
				}}
				disabled={activeIndex === data.length - 1}
			/>
			<View style={styles.carouselContainer}>
				<Carousel
					layout="default"
					ref={carouselRef}
					data={data}
					renderItem={cardItem}
					sliderWidth={SLIDER_WIDTH}
					itemWidth={ITEM_WIDTH}
					onSnapToItem={(index) => setActiveIndex(index)}
				/>
			</View>
		</>
	);
};
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	cardContainer: {
		width: "100%",
		paddingHorizontal: 40,
		paddingVertical: 20,
		marginVertical: 20,
		alignItems: "center",
		borderRadius: 20,
	},
	carouselContainer: {
		width: "100%",
		height: 500,
		position: "relative",
	},
	cardImage: {
		width: "100%",
		height: 250,
		resizeMode: "contain",
	},
	cardTitle: {
		fontSize: 24,
		fontWeight: "500",
		marginBottom: 8,
	},
	cardText: {
		fontSize: 16,
		textAlign: "center",
		color: "#393939",
	},
	arrow: {
		backgroundColor: Colors.primary,
		position: "absolute",
		top: "50%",
		borderRadius: 50,
		height: 36,
		width: 36,
		justifyContent: "center",
		alignItems: "center",
		zIndex: 1,
	},
	arrowLeft: {
		left: 20,
	},
	arrowRight: {
		right: 20,
	},
});
