import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from '../style/style';
import { ExternalLink } from 'react-external-link';

const Tietoja = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={style.title}>Tietoja</Text>
      <Text style={style.text}>Tekijät:</Text>
      <Text style={style.text}>Anni Pesonen, Miro Säkkinen, Frans Puranen</Text>
      <Text style={style.text}>Lähteet:</Text>
      <Text style={style.text}><ExternalLink href="https://salpakierto.fi/neuvonta/jatehaku/"/></Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={style.button}>
        <Text style={style.buttonText}>Takaisin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tietoja;