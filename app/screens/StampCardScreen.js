import React, { useEffect } from 'react';
import { Text, Button, Icon } from 'react-native-elements';
import { View, StyleSheet, } from 'react-native'

// const dummyData = {
//     Business: {
//         uuid: "456",
//         name: "Angry Lime",
//         address: "123 Main St, CA, 12345",
//         campaigns: ["123"],
//         pending: []
//     },
//     StampCard: {
//         uuid: "123",
//         published: true,
//         num_stamps: 6,
//         filled_stamps: 2,
//         participants: ["456"],
//         start_date: new Date("03/25/2021"),
//         end_date: new Date("3/30/2021"),
//         reward_name: "Boba Bonanza",
//         reward_details: "Buy 6 drinks and get any one free drink!"
//     },
//     Stamp: {
//         user: "abc",
//         campaign: "123",
//         business: "456",
//         date: new Date()
//     }
// }


const StampCardScreen = ({ route, navigation }) => {
    const card = route.params.cardInfo;
    console.log(route)
    const amountFilled = card.filled_stamps;
    const amountRemaining = card.num_stamps - card.filled_stamps;
    return (
        <View style={styles.container}>
            <Text h2>
                {route.params.businessNames}
            </Text>
            <Text>
                {card.reward_details}
            </Text>
            <View style={styles.iconsContainer}>
                {[...Array(amountFilled)].map((i) => <Icon id={i} size={90} color="gold" name="star"/>)}
                {[...Array(amountRemaining)].map((j) => <Icon size={90} color="gray" name="star-border"/>)}
            </View>
            <Text>Only {amountRemaining} to go!</Text>
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
    iconsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%"
    },
});

export default StampCardScreen;