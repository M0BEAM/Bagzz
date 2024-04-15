import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import ProdInfo from "../components/ProdInfo";
import { useState } from "react";
import { shopingInfo, payementOptions } from "../data/info"
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import useStore from "../store/store";
const DetailScreen = ({ route, navigation }) => {
    const { image, name, description, price } = route.params
    const [info, setInfo] = useState("description");
    const addToFavorite = useStore((state) => state.addToFavorite)
    const favorite = useStore((state) => state.favorite)
    return (
        <View className='dark:bg-gray-900 h-full '>
            <View className='items-center m-6 ' style={styles.DetailScreenContainer}>
                <Pressable className="absolute z-50 right-2 -top-2" onPress={() => addToFavorite(route.params)}>
                    {
                        favorite.findIndex((value) => route.params.id == value.id) == -1 ?
                            <Text className='dark:text-white'>
                                <MaterialIcons name="favorite-border" size={24} />
                            </Text> :
                            <Text className='dark:text-white'>
                                <MaterialIcons name="favorite" size={24} />
                            </Text>
                    }
                </Pressable>
                <Pressable onPress={() => navigation.goBack()} className="absolute z-50 left-0 -top-2 ">
                    <Text className="dark:text-white"><Ionicons name="arrow-back-sharp" size={24}  /></Text>
                </Pressable>
                <View className="flex-row items-center ">
                    <View className="mr-6 mb-10">
                        <Image style={{ width: 160, height: 160 }} source={image} />
                    </View>
                    <View className="space-y-1.5 mt-6">
                        <Text className=" dark:text-white font-bold text-2xl">{name}</Text>
                        <Text className=" dark:text-white font-bold ">Wallet with chain</Text>
                        <Text className=" dark:text-white text-gray-500 text-xs">Style #36252 0YK0G 1000</Text>
                        <Text className=" dark:text-white font-bold text-lg">${price}</Text>
                        <Text className=" dark:text-white bg-black w-[100px] p-2  text-white text-center">BUY NOW</Text>
                        <Text className=" dark:text-white border-b-2 w-[90px]  pb-1">ADD TO CART</Text>

                    </View>
                </View>
                <View>
                    <View className="flex-row space-x-6 mt-6">
                        <Pressable onPress={() => setInfo("description")}><Text className={`font-bold  dark:text-white text-md ${info === "description" && "border-b-2 dark:border-white pb-2"}`}>Description</Text></Pressable>
                        <Pressable onPress={() => setInfo("shoppingInfo")}><Text className={`font-bold  dark:text-white text-md ${info === "shoppingInfo" && "border-b-2 pb-2 dark:border-white"}`}>Shopping info</Text></Pressable>
                        <Pressable onPress={() => setInfo("payementOptions")}><Text className={`font-bold dark:text-white text-md ${info === "payementOptions" && "border-b-2 pb-2 dark:border-white"}`}>Payement options</Text></Pressable>
                    </View>
                    <View className=" mt-7 " >
                        <ProdInfo info={{ name: info, data: info === 'description' ? description : info === "shoppingInfo" ? shopingInfo : payementOptions }} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    DetailScreenContainer: {
        // Add your styles here
    }
});

export default DetailScreen;