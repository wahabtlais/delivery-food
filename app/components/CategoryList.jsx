import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import uiData from "../constants/uiData";
import CategoryItem from "./CategoryItem";

const CategoryList = ({
	setSelectedCategory,
	setSelectedSection,
	setSelectedValue,
}) => {
	const [selected, setSelected] = useState(null);
	const categories = [
		{ id: 1, name: "Fast Food" },
		{ id: 2, name: "Desserts" },
		{ id: 3, name: "Drinks" },
		{ id: 4, name: "Cakes" },
		{ id: 5, name: "Snacks" },
	];
	return (
		<FlatList
			data={uiData.categories}
			showsHorizontalScrollIndicator={false}
			horizontal
			className="mt-1"
			keyExtractor={(item) => item._id}
			renderItem={({ item }) => (
				<TouchableOpacity>
					<CategoryItem selected={selected} category={item} />
				</TouchableOpacity>
			)}
		/>
	);
};

export default CategoryList;
