import React from 'react';
import { View, Text, Button } from 'react-native';

const Etusivu = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Etusivu</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Kulutavahemman')} 
      />
    </View>
  );
};

export default Etusivu;
