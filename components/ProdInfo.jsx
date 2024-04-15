import { Text, StyleSheet, View } from "react-native";

const ProdInfo = ({ info }) => {
    return (
        info.name === "description" ? (
            <View className="space-y-6">
                <Text  className="dark:text-white">
                    {info.data[0]}
                </Text>
                <View >
                    <Text className="text-md dark:text-white font-bold">{info.data[1]}</Text>
                    <Text className="dark:text-white">{info.data[2]}</Text>
                </View>
            </View>
        ) : info.name === "shoppingInfo" ? (
            <View className="space-y-6">
                <Text className="dark:text-white">
                    {info.data[0]}
                </Text>
                <View >
                    <Text className="text-md dark:text-white font-bold">{info.data[1]}</Text>
                    <Text className="dark:text-white">{info.data[2]}</Text>
                </View>
            </View>
        ) : (
            <View className="space-y-6 ">
                <Text  className="dark:text-white">
                    {info.data[0]}
                </Text>
                <Text  className="dark:text-white">
                    {info.data[1]}
                </Text>
                <Text  className="dark:text-white">
                    {info.data[2]}
                </Text>
            </View>
        )
    );
}

export default ProdInfo;