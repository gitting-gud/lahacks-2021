import React from 'react';
import { Text, View, Button, Image } from 'react-native';

const StampCardScreen = ({ navigation }) => {
    return (
        <View>
            <Text>
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

export default StampCardScreen;