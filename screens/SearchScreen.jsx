import { Text, View, TextInput, Button, } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useColorScheme } from "nativewind";
const SearchScreen = () => {
    const { colorScheme } = useColorScheme();
    return (
        <View className='flex-1 bg-white dark:bg-gray-900 '>
            <View className="mx-8">
                <Text className="text-right dark:text-white "><AntDesign name="close" size={24} /></Text>
                <TextInput placeholderTextColor={colorScheme === 'dark' ? 'white' : 'black'} className="border-b text-xl dark:text-white placeho  p-4  border-black dark:border-white" placeholder="Type here to search" />
            </View>
        </View>
    );
}

export default SearchScreen;