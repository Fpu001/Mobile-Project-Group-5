import React from 'react';
import { View, Text, Button } from 'react-native';
import style from '../style/style';

const Tietoja = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={style.title}>Tietoja</Text>
      <Button 
        title="Takaisin" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
};

export default Tietoja;