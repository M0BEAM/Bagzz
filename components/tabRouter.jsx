import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import HomeStack from "../routers/HomeStack";
import SearchStack from "../routers/SearchStack";
import { SheetManager, SheetProvider } from 'react-native-actions-sheet';
import "./sheets"
import React from "react";
import useStore from "../store/store";

const TabRouter = () => {
    const { colorScheme } = useColorScheme();
    const Tab = createBottomTabNavigator();
    const basket = useStore((state) => state.basket)
    const favorites = useStore((state) => state.favorite)
    const BasketScreen = () => {
        return null;
    };
    return (
        <SheetProvider>
            <View className='flex-1' style={styles.TabRouterContainer}>
                <NavigationContainer>
                    <Tab.Navigator initialRouteName="Home"

                        screenOptions={({ route }) => ({
                            headerShown: false,
                            tabBarStyle: { backgroundColor: colorScheme === "dark" ? "#111827" : "white" },
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;

                                if (route.name === 'Home1') {
                                    iconName = focused
                                        ? <Entypo name="home" size={size} color={color} />
                                        : <AntDesign name="home" size={size} color={color} />;
                                } else if (route.name === 'Search1') {
                                    iconName = focused ?
                                        <FontAwesome name="search" size={size} color={color} /> :
                                        <AntDesign name="search1" size={size} color={color} />;
                                } else if (route.name === 'Basket') {
                                    iconName = focused ?
                                        <FontAwesome5 name="shopping-basket" size={size} color={color} /> :
                                        <FontAwesome5 name="shopping-basket" size={size} color={color} />;
                                   
                                } else if (route.name === 'Favorite') {
                                    iconName = <MaterialIcons name="favorite" size={size} color={color} />
                                }

                                // You can return any component that you like here!
                                return iconName
                            },
                            tabBarActiveTintColor: 'tomato',
                            tabBarInactiveTintColor: 'gray',
                            

                        })}>
                        <Tab.Screen name="Home1" component={HomeStack} />
                        <Tab.Screen name="Search1" component={SearchStack} />
                        <Tab.Screen options={basket.length>0&&{ tabBarBadge: basket.length}} 
                            name="Basket"
                            listeners={() => ({
                                tabPress: (event) => {
                                    event.preventDefault();
                                    SheetManager.show("Basket")
                                    //   alert("open basket")
                                },
                            })}
                            component={BasketScreen}
                        />
                        <Tab.Screen options={favorites.length>0&&{ tabBarBadge: favorites.length}} 
                            name="Favorite"
                            listeners={() => ({
                                tabPress: (event) => {
                                    event.preventDefault();
                                    SheetManager.show("Favorites")
                                    //   alert("open basket")
                                },
                            })}
                            component={BasketScreen}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>
        </SheetProvider>
    );
}

const styles = StyleSheet.create({
    TabRouterContainer: {
        // Add your styles here
    }
});

export default TabRouter;