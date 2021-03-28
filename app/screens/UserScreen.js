import React, { useState, useEffect } from 'react';
import { Text, Button, Card, Icon } from 'react-native-elements';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';

const StampCard = ({cardId, navigation}) => {
  const [cardContents, setCardContents] = useState({});
  const [businessNames, setBusinessNames] = useState("");
  const fetchCard = () => {
    fetch(`http://192.168.1.3:4000/api/stampCards/getStampCard?stampCardId=${cardId}`)
    .then(response => response.json())
    .then(data => setCardContents(data))
  }

  const fetchBusinesses = async () => {
    cardContents.participants.forEach(async (business) => {
      const response = await fetch(`http://192.168.1.3:4000/api/businesses/getBusiness?businessId=${business}`)
      const json = await response.json();
      setBusinessNames(businessNames + " " + json.name);
    })
  }
  useEffect(() => {
    fetchCard();
  }, [])

  useEffect(() => {
    fetchBusinesses();
  },[cardContents])
  return (
    <View>
      <Card>
        <Card.Title h2>{businessNames}</Card.Title>
        <Card.Divider/>
        <View style={styles.cardDescription}>
          <Text h4 style={{marginBottom: 10, color: "gray", flex: 1, flexWrap: "wrap"}}>
            {cardContents.reward_details}
          </Text>
          <View style={styles.circleContainer}>
            <Text h1 style={styles.fraction}>
              {cardContents.filled_stamps} / {cardContents.num_stamps}
            </Text>
          </View>
        </View>
        <Button
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title=' View Stamp'
          icon={<Icon type='material-community' name='arrow-expand' color='#ffffff' />}
          onPress={() => navigation.navigate('StampCardScreen', { cardInfo: cardContents, businessNames: businessNames })}
        />
      </Card>
    </View>
  )
}


const UserScreen = ({ navigation }) => {
  const testUserId = "605d735ca259bc2898290f31"
  const [activeCards, setActiveCards] = useState([]);
  const fetchUserCards = async () => {
    const response = await fetch(`http://192.168.1.3:4000/api/users/getUserCards?user=${testUserId}`);
    const json = await response.json();
    setActiveCards(activeCards.concat(json));
  }


  useEffect(() => {
    fetchUserCards();
  }, [])

  console.log(activeCards)
  return (
    <View style={styles.container}>
      <Image source={require("../assets/cafevector.png")} />
      <Text h2>My stamp cards</Text>
      <ScrollView style={{minWidth: 300}}>
        {activeCards.map((card) => (
          <StampCard cardId={card} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ecdcc2"
  },
  fraction: {
    color: "gold",
  },
  cardDescription: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  circleContainer: {
    borderWidth: 5,
    borderColor: "gray",
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10, 
  }
})
export default UserScreen;