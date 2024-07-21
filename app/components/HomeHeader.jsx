import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AssetImage from "./AssetImage";
import images from "../constants/images";
import { UserReversedGeoCode } from "../context/UserReversedGeoCode";
import { UserLocationContext } from "../context/UserLocationContext";
import * as Location from "expo-location";
import icons from "../constants/icons";

const HomeHeader = () => {
	const [time, setTime] = useState(null);
	const { address, setAddress } = useContext(UserReversedGeoCode);
	const { location, setLocation } = useContext(UserLocationContext);

	useEffect(() => {
		if (location !== null) {
			reverseGeoCode(location.coords.latitude, location.coords.longitude);
		}
	}, [location]);

	const reverseGeoCode = async (latitude, longitude) => {
		const reversedGeoCodedAddress = await Location.reverseGeocodeAsync({
			longitude: longitude,
			latitude: latitude,
		});
		setAddress(reversedGeoCodedAddress[0]);
		const greetings = getTimeOfDay();
		setTime(greetings);
	};

	const getTimeOfDay = () => {
		const now = new Date();
		const hour = now.getHours();

		if (hour >= 0 && hour < 12) {
			return icons.morning;
		} else if (hour > 12 && hour < 17) {
			return icons.noon;
		} else {
			return icons.night;
		}
	};

	return (
		<View className="flex-row justify-between">
			<View className="mb-3 mx-5 flex-row">
				<Image
					source={images.profile}
					className="w-12 h-12 rounded-full"
					resizeMode="cover"
				/>

				<View className="ml-4 justify-center ">
					<Text className="font-pmedium text-base text-secondary">
						Delivering to
					</Text>
					<Text className="font-pregular text-sm text-gray">
						{address.city}, {address.name}
					</Text>
				</View>
			</View>
			<Image source={time} className="w-12 h-12" />
		</View>
	);
};

export default HomeHeader;
