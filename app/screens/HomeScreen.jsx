import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

// import { Camera } from 'expo';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={{
          flex: 1,
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text style={{
          fontSize: '2rem',
        }}>
          [App Name]
        </Text>
        <Button
          title="Login"
          onPress={() => navigation.navigate('UserScreen', /* { name: 'Jane' } */)}
          style={{width: '50vw'}}
        />
      </View>
      <Text
        onPress={() => navigation.navigate('BizScreen', /* { name: 'Jane' } */)}
        style={{
          position: 'fixed',
          right: '2rem',
          bottom: '2rem',
        }}
      >
        Login as a business
      </Text>
    </>
  );
}

export default HomeScreen;