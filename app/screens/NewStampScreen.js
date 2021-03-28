import React, {useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import FormInput from '../components/FormInput';

const BizStampingScreen = ({ navigation }) => {


  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
      }}>
      <FormInput 
        textTitle='Single character stamp'
        placeholderText='⭐'
        width={50} />
      <FormInput 
        textTitle='Number of Stamps per Card'
        placeholderText='8'
        width={50} />
      <FormInput 
        textTitle='Name of Stamp Card Deal'
        placeholderText='Spend $15+ 8 times and get 15% off next purchase'
        width={300} />
      <FormInput 
        textTitle='Deal Details'
        placeholderText='Deal details, expiration date, any other important information goes here'
        width={300} />
      <FormInput 
        textTitle='Partner with other Organizations? (Invite will be sent)'
        placeholderText='Enter Organization code here'
        width={250} />
      <Button
        title="Save and Confirm"
        onPress={() =>
        navigation.navigate('UserScreen', /* { name: 'Jane' } */)
        }
        buttonStyle={{
            backgroundColor: '#FFF',
            borderColor: '#16C213',
            borderWidth: 2,
            borderRadius: 10,
            justifyContent: 'center',
            width: 175,
        }}
        titleStyle={{
            color: '#000',
        }}
      ></Button>
    </View>
  );
}

export default BizStampingScreen;