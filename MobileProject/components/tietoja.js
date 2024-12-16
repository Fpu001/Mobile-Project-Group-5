import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import style from '../style/style';

const Tietoja = ({ navigation }) => {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('URL:n avaaminen epäonnistui:', err));
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={style.title}>Tietoja</Text>
      <Text style={style.text}>Tekijät:</Text>
      <Text style={style.text}>Anni Pesonen, Miro Säkkinen, Frans Puranen</Text>
      <Text style={style.text}>Lähteet:</Text>

      {/* Klikattava linkki */}
      <Text 
        style={[style.text, { color: 'blue', textDecorationLine: 'underline' }]} 
        onPress={() => openLink('https://salpakierto.fi/neuvonta/jatehaku/')}
      >
        https://salpakierto.fi/neuvonta/jatehaku/
      </Text>

      <TouchableOpacity onPress={() => navigation.goBack()} style={style.button}>
        <Text style={style.buttonText}>Takaisin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tietoja;