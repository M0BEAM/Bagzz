import { StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/detailScreen";


const HomeStack = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={{  headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    HomeStackContainer: {
        // Add your styles here
    }
});

export default HomeStack;