import { Text, View, StyleSheet, Image,Dimensions, Button } from "react-native";
import Carousel from "react-native-reanimated-carousel";
const Header = () => {
    const width = Dimensions.get('window').width;
    return (
        <View className='' style={styles.HeaderContainer}>
            <View>
                {/*  */}
                <View className="ml-1  ">
                    <Carousel
                        loop
                        width={width}
                        height={width / 2}
                        autoPlay={true}
                        data={[require('../assets/images/header1.png'),require('../assets/images/header2.png')]}
                        scrollAnimationDuration={1000}
                        
                        renderItem={({item, index }) => (
                            <Image source={item}/>
                        )}
                    />
                </View>
                <Text className="absolute bg-white  p-0.5 right-2 top-12 font-bold text-xl ">This{'\n'} season's{'\n'} latest</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    HeaderContainer: {
        // Add your styles here
    }
});

export default Header;