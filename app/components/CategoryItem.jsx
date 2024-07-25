import { View, Text, Image } from "react-native";
import React from "react";

const CategoryItem = ({ category, selected }) => {
	return (
		<View
			className={`ml-3 p-2 items-center max-w-24 max-h-24 justify-center gap-1 ${
				category.value == selected ? "border-secondary" : "border-none"
			} shadow-sm`}
		>
			<Image source={category.imageUrl} className="w-8 h-8 " />
			<Text className="font-pregular text-sm">{category.title}</Text>
		</View>
	);
};

export default CategoryItem;
