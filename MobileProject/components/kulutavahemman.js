import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import style from '../style/style';
import Header from './header';

const Kulutavahemman = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Kuluta vähemmän</Text>
      <Text style={style.text}>Sammuta käyttämättömät valot ja muut sähkölaitteet.</Text>
      <Text style={style.text}>Säädä sisälämpötilaa viileämmälle.</Text>
      <Text style={style.text}>Käy viileämmässä suihkussa.</Text>
      <TouchableOpacity style={style.button}
        onPress={() => navigation.goBack()}> 
        <Text style={style.buttonText}>Takaisin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Kulutavahemman;
