import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import biojate from '../assets/biojate.png';
import kartonki from '../assets/kartonki.png';
import lasi from '../assets/lasi.png'
import metalli from '../assets/metalli.png'
import muovi from '../assets/muovi.png'
import paperi from '../assets/paperi.png'
import sekajate from '../assets/sekajate.png'
import style from '../style/style';

const Kierratysohjeet = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Kierrätysohjeet</Text>
      <Image
        source={biojate}
        style={style.recycleIcons}
      />
      <Image
        source={kartonki}
        style={style.recycleIcons}
      />
      <Image
        source={lasi}
        style={style.recycleIcons}
      />
      <Image
        source={metalli}
        style={style.recycleIcons}
      />
      <Image
        source={muovi}
        style={style.recycleIcons}
      />
      <Image
        source={paperi}
        style={style.recycleIcons}
      />
      <Image
        source={sekajate}
        style={style.recycleIcons}
      /><p>
      </p>
      <Button 
        title="Takaisin" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
};

export default Kierratysohjeet;
