import React from 'react';
import { Text, Button } from 'react-native-elements';
import { View, Image, StyleSheet } from 'react-native'

const StampCardScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text h1>
                Business Name
            </Text>
            <Text>
                Offer on completion
            </Text>
            <Image source={require('../assets/StampGroup.png')}/>
            <Text>Some number to go!</Text>
            <Button 
                title="Get a stamp!"
                onPress={() => 
                    navigation.navigate('UserStamping')
                }></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
});

export default StampCardScreen;