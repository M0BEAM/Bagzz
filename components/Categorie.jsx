import { Text, View, StyleSheet, Image } from "react-native";

const Categorie = () => {
    return (
        <View className='items-center' style={styles.CategorieContainer}>
            <Text className="border dark:text-white p-2 text-xl my-10 border-black dark:border-white">CHECK ALL LATEST</Text>
            <View >
                <Text className="font-bold dark:text-white text-2xl">Shop by categories</Text>
                <View className="flex-row flex-wrap gap-4 my-2">
                    <View className="">
                        <Image source={require("../assets/images/img1.png")} />
                        <Text className="absolute bottom-0 right-0 bg-black text-white p-2 font-bold text-[17px]">Handle bags</Text>
                    </View>
                    <View className="">
                        <Image source={require("../assets/images/img1.png")} />
                        <Text className="absolute bottom-0 right-0 bg-black text-white p-2 font-bold text-[17px]">Crossbody bags</Text>
                    </View>
                    <View className="">
                        <Image source={require("../assets/images/img1.png")} />
                        <Text className="absolute bottom-0 right-0 bg-black text-white p-2 font-bold text-[17px]">Shoulder bags</Text>
                    </View>
                    <View className="">
                        <Image source={require("../assets/images/img1.png")} />
                        <Text className="absolute bottom-0 right-0 bg-black text-white p-2 font-bold text-[17px]">Tote bag</Text>
                    </View>
                </View>
            </View>
            <Text className="border dark:text-white p-2 text-xl my-8 border-black dark:border-white">BROWSE ALL CATEGORIES</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    CategorieContainer: {
        // Add your styles here
    }
});

export default Categorie;