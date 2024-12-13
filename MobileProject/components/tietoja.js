import React from 'react';
import { View, Text, Button } from 'react-native';
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
      <Button 
        title="Takaisin" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
};

export default Tietoja;