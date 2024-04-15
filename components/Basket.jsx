import { Text, View, StyleSheet, Image, TouchableOpacity, Pressable, Modal, Alert } from "react-native";
import ActionSheet, { ScrollView } from 'react-native-actions-sheet';
import useStore from "../store/store";
import { useState } from "react";

const Basket = () => {
    const products = useStore((state) => state.basket)
    const increaseQ = useStore((state) => state.increaseQ)
    const decreaseQ = useStore((state) => state.decreaseQ)
    
                return (
                <ActionSheet

                    snapPoints={[products.length > 2 ? 70 : 100]}
                    containerStyle={{
                        paddingHorizontal: 12,
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,

                    }}

                    gestureEnabled={true}>
                    <Text className="text-center border-b font-bold border-gray-200 text-lg py-2">Basket</Text>
                    <ScrollView className="py-8 gap-y-8">


                        {/* first  one  */}
                        {products&&products.map((item, index) => (
                            <View key={index} className="flex-row  items-start   justify-center gap-x-8 ">
                                <View className="gap-y-4">
                                    <Image style={{ height: 90, width: 95 }} source={item.image} />
                                    <View className="flex-row h-7 ">
                                        <TouchableOpacity onPress={() => item.quantity > 1 && decreaseQ(item.id)} className="flex-1">
                                            <Text className="border text-white bg-black font-bold text-lg text-center flex-1">-</Text>
                                        </TouchableOpacity>
                                        <Text className="border font-bold text-lg text-center flex-1">{item.quantity}</Text>
                                        <TouchableOpacity onPress={() => increaseQ(item.id)} className="flex-1">
                                            <Text className="border text-white bg-black font-bold text-lg text-center flex-1">+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View className="gap-y-2 mt-1 ">
                                    <Text className="font-bold text-lg">{item.name}</Text>
                                    <Text className="font-bold">Wallet with chain</Text>
                                    <Text className="text-gray-400">Style #36252 0YK0G 1000</Text>
                                    <Text className="pt-1 font-bold text-lg">${item.price}</Text>
                                </View>
                            </View>
                        ))}
                        {/*final first  one  */}




                        {/* button  */}
                        <Pressable className="items-center">
                            <Text className="text-center py-2 px-4 font-bold text-white bg-black">PROCEED TO BUY</Text>
                        </Pressable>
                    </ScrollView>
                </ActionSheet>
                )
}

                const styles = StyleSheet.create({
                    basketContainer: {
                    // Add your styles here
                }
});

                export default Basket;