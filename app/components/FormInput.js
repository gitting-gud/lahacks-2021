import React, {useState } from 'react';
import { Text } from 'react-native';
import { Input } from 'react-native-elements';

const FormInput = ({textTitle, placeholderText, width}) => {

  const [input, setInput] = useState(placeholderText);
  return (
    <React.Fragment>
      <Text>{textTitle}</Text>
      <Input 
        placeholder={input}
        containerStyle={{
          paddingRight: 0,
          paddingLeft: 0,
          width: width,
        }}
        inputContainerStyle={{
            borderColor: '#71AAFF',
            borderRadius: 12,
            borderWidth: 1,
            marginTop: 10,
            width: width,
        }}
        inputStyle={{
          textAlign: 'center',
          width: width,
        }}
        onChangeText={(newValue) => setInput(newValue)}
      /> 
    </React.Fragment>
  );
}

export default FormInput;