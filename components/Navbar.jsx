import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useColorScheme, } from 'nativewind';

const Navbar = ({ options }) => {
    const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();
  
    return (
        <View className='flex-row  mx-4 mt-2 justify-between items-center py-8' style={styles.NavbarContainer}>
            <View className="flex-row gap-4 items-center">
                <Pressable className="" >
                    <Text className="dark:text-white">
                    <FontAwesome name="shopping-bag" size={24}  />
                    </Text>
                </Pressable>
                <View>
                    <Text className="font-bold text-2xl dark:text-white ">bagzz</Text>
                </View>
            </View>
            <Pressable onPress={toggleColorScheme}>
                <Text className="dark:text-stone-50"> <MaterialIcons name="dark-mode" size={30} /></Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    NavbarContainer: {
        // Add your styles here
    }
});

export default Navbar;