import React from 'react';
import { View, Text, Button } from 'react-native';
import style from '../style/style';
import Header from './header';

const Kulutavahemman = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={style.title}>Kuluta vähemmän</Text>
      <Text style={style.text}>Sammuta käyttämättömät valot ja muut sähkölaitteet.</Text>
      <Text style={style.text}>Säädä sisälämpötilaa viileämmälle.</Text>
      <Text style={style.text}>Käy viileämmässä suihkussa.</Text>
      <Button 
        title="Takaisin" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
};

export default Kulutavahemman;
