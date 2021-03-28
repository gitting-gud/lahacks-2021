import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

// import { Camera } from 'expo';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={{
          flex: 1,
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}>
        <Text style={{
          fontSize: 20,
        }}>
          [App Name]
        </Text>
        <Button
          title="Login"
          onPress={() => navigation.navigate('UserScreen', /* { name: 'Jane' } */)}
          style={{width: '50%'}}
          buttonStyle={{
            backgroundColor: '#FFF',
            borderColor: '#71AAFF',
            borderWidth: 2,
            borderRadius: 10,
          }}
          titleStyle={{
            color: '#000',
          }}
          type="outline"
        />
        <Button 
          onPress={() => navigation.navigate('MapScreen')} 
          buttonStyle={{
            backgroundColor: '#FFF',
            borderColor: '#71AAFF',
            borderWidth: 2,
            borderRadius: 30,
          }}
          titleStyle={{
            color: '#000',
          }}
          type="outline"
        />
      </View>
      <Text
        onPress={() => navigation.navigate('BizScreen', /* { name: 'Jane' } */)}
        style={{
          position: 'absolute',
          right: 20,
          bottom: 20,
        }}
      >
        Login as a business
      </Text>
    </>
  );
}

export default HomeScreen;