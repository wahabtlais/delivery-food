import { View, Text, Image } from "react-native";
import React from "react";

const AssetImage = ({ data, imageStyles, resizeMode }) => {
	return (
		<Image
			source={data}
			className={`${imageStyles}`}
			resizeMode={`${resizeMode}`}
		/>
	);
};

export default AssetImage;
