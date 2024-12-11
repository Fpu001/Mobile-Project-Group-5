import React from 'react';
import { View, Text, Button } from 'react-native';

const Tavoitteet = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tavoitteet</Text>
      <Button
        title="Go to Details... again"
        onPress={() => console.log('Redundant navigation, consider removing')} 
      />
      <Button 
        title="Takaisin" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
};

export default Tavoitteet;
