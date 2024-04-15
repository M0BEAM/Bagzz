import { StyleSheet } from "react-native";
import SearchScreen from "../screens/SearchScreen";
import { createStackNavigator } from "@react-navigation/stack";


const SearchStack = () => {
    const Stack = createStackNavigator()
    return (
        
        <Stack.Navigator screenOptions={{  headerShown: false}}>
            <Stack.Screen name="Search" component={SearchScreen} />      
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    SearchStackContainer: {
        // Add your styles here
    }
});

export default SearchStack;