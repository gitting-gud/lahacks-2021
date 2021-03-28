import React, {useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';

const BizStampingScreen = ({ navigation }) => {


  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
      }}>
      <Text>Emoji/single character stamp design</Text>
      <Input 
        placeholder='⭐'
        containerStyle={{
          paddingRight: 0,
          paddingLeft: 0,
          width: 50,
        }}
        inputContainerStyle={{
            borderColor: '#71AAFF',
            borderRadius: 12,
            borderWidth: 1,
            marginTop: 10,
            width: 50,
        }}
        inputStyle={{
          textAlign: 'center',
          width: 50,
        }}
        onChangeText={(newValue) => handleCodeInput(newValue)}
      />
      <Text>Number of Stamps per Card</Text>
      <Input 
        placeholder='8'
        containerStyle={{
          borderColor: '#71AAFF',
          paddingRight: 0,
          paddingLeft: 0,
          width: 50,
        }}
        inputContainerStyle={{
          borderColor: '#71AAFF',
          borderRadius: 12,
          borderWidth: 1,
          marginTop: 10,
          width: 50,
        }}
        inputStyle={{
          textAlign: 'center',
          width: 50,
        }}
        onChangeText={(newValue) => handleCodeInput(newValue)}
      />
      <Text>Name of Stamp Card Deal</Text>
      <Input 
        placeholder='Spend $15+ 8 times and get 15% off next purchase'
        containerStyle={{
          paddingRight: 0,
          paddingLeft: 0,
          width: 300,
        }}
        inputContainerStyle={{
            borderColor: '#71AAFF',
            borderRadius: 12,
            borderWidth: 1,
            marginTop: 10,
            width: 300,
        }}
        inputStyle={{
          textAlign: 'center',
          width: 300,
        }}
        onChangeText={(newValue) => handleCodeInput(newValue)}
      />
      <Text>Deal Details</Text>
      <Input 
        placeholder='Deal details, expiration date, any other important information goes here'
        containerStyle={{
          paddingRight: 0,
          paddingLeft: 0,
          width: 300,
        }}
        inputContainerStyle={{
            borderColor: '#71AAFF',
            borderRadius: 12,
            borderWidth: 1,
            marginTop: 10,
            width: 300,
        }}
        inputStyle={{
          textAlign: 'center',
          width: 50,
          height: 30
        }}
        onChangeText={(newValue) => handleCodeInput(newValue)}
      />
      <Text>Partner with other Organizations? (Invite will be sent)</Text>
      <Input 
        placeholder='Enter Organization code here'
        containerStyle={{
          paddingRight: 0,
          paddingLeft: 0,
          width: 250,
        }}
        inputContainerStyle={{
            borderColor: '#71AAFF',
            borderRadius: 12,
            borderWidth: 1,
            marginTop: 10,
            width: 250,
        }}
        inputStyle={{
          textAlign: 'center',
          width: 250,
        }}
        onChangeText={(newValue) => handleCodeInput(newValue)}
      />
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