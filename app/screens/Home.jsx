import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { sizes } from "../constants/theme";
import HomeHeader from "../components/HomeHeader";
import CategoryList from "../components/CategoryList";

const Home = () => {
	return (
		<SafeAreaView>
			<View className="bg-primary" style={{ height: sizes.height }}>
				<View
					className="bg-white-200  rounded-b-3xl"
					style={{ height: sizes.height - 80 }}
				>
					<HomeHeader />
					<ScrollView
						className="rounded-b-3xl"
						showsVerticalScrollIndicator={false}
					>
						<CategoryList />
					</ScrollView>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;
