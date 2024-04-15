import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import useStore from "../store/store";

const Products = ({ data }) => {
    const navigation = useNavigation()
    const addToBasket = useStore((state) => state.addToBasket)
    const addToFavorite = useStore((state) => state.addToFavorite)
    const favorite = useStore((state) => state.favorite)
    return (

        <View className='flex-row gap-4 mt-8 justify-center flex-wrap' style={styles.ProductsContainer}>
            {data.map((item) => (
                <View   key={item.id} className="items-center rounded-md shadow-md dark:shadow-neutral-100 shadow-neutral-900 py-5 px-7 bg-gray-200">
                    <Pressable className="absolute right-2 top-2" onPress={() => addToFavorite(item)}>
                        {favorite.findIndex((value) => item.id == value.id) == -1 ?
                            <Text ><MaterialIcons name="favorite-border" size={24} color="black" /></Text> :
                            <Text>
                                <MaterialIcons name="favorite" size={24} color="black" />
                            </Text>
                        }
                    </Pressable>
                    <Pressable android_ripple={{ color: "gray" }} onPress={() => navigation.navigate("Detail", item)}>
                        <Image source={item.image} />
                    </Pressable>
                    <View className="my-2">
                        <Text className="font-bold text-lg">{item.name}</Text>
                    </View>
                    <Pressable onPress={() => addToBasket(item)} android_ripple={{ color: "gray" }} className="border-b border-black-">
                        <Text className="text-lg mx-2 ">
                            Shop Now
                        </Text>
                    </Pressable>
                </View>
            ))}
        </View>

    );
}

const styles = StyleSheet.create({
    ProductsContainer: {
        // Add your styles here
    }
});

export default Products;