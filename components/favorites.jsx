import { Text, View, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
import ActionSheet, { ScrollView } from 'react-native-actions-sheet';
import useStore from "../store/store";

const Favorites = () => {
    const products = useStore((state) => state.favorite)
    const removeFromFavorite= useStore((state) => state.removeFromFavorite)

    return (
        <ActionSheet
     
            containerStyle={{
                paddingHorizontal: 12,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,

            }}

            gestureEnabled={true}>
            <Text className="text-center border-b font-bold border-gray-200 text-lg py-2">Favorites</Text>
            <ScrollView className="py-8 gap-y-8">

                {/* first  one  */}
                {products.map((item, index) => (

                    <View key={index} className="flex-row  items-start   justify-center gap-x-8 ">
                        <View className="gap-y-4">
                            <Image style={{ height: 90, width: 95 }} source={item.image} />

                        </View>
                        <View className="gap-y-2 mt-1 ">
                            <Text className="font-bold text-lg">{item.name}</Text>
                            <Text className="font-bold">Wallet with chain</Text>
                            <Text className="text-gray-400">Style #36252 0YK0G 1000</Text>
                            <Pressable onPress={()=>{
                                try{
                                    removeFromFavorite(item.id)
                                }catch(err){
                                    console.log("err")
                                }
                            }} className="pt-2">
                                <Text className="border-b pb-2 w-14">Remove</Text>
                            </Pressable>
                        </View>
                    </View>

                ))}
                {/*final first  one  */}

                {/* button  */}
                <Pressable className="items-center">
                    <Text className="text-center py-2 px-4 font-bold text-white bg-black">ADD ALL TO CART</Text>
                </Pressable>
            </ScrollView>
        </ActionSheet>
    )
}

const styles = StyleSheet.create({
    FavoritesContainer: {
        // Add your styles here
    }
});

export default Favorites;