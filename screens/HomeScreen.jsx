import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../components/header";
import Products from "../components/Products";
import Categorie from "../components/Categorie";
import data from "../data/data"

const HomeScreen = () => {
   
    return (
        <ScrollView className="bg-white dark:bg-gray-900">
            <View className='mx-4' >
                <Header />
                <Products data={data} />
                <Categorie/>
            </View>

        </ScrollView>
    );
}

export default HomeScreen;