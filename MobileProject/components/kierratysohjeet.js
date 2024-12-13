import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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
      <Text></Text>
      <Image
        source={kartonki}
        style={style.recycleIcons}
      />
      <Text></Text>
      <Image
        source={lasi}
        style={style.recycleIcons}
      />
      <Text></Text>
      <Image
        source={metalli}
        style={style.recycleIcons}
      />
      <Text></Text>
      <Image
        source={muovi}
        style={style.recycleIcons}
      />
      <Text></Text>
      <Image
        source={paperi}
        style={style.recycleIcons}
      />
      <Text></Text>
      <Image
        source={sekajate}
        style={style.recycleIcons}
        />
        <Text></Text>
      <TouchableOpacity style={style.button}
        onPress={() => navigation.goBack()}> 
        <Text style={style.buttonText}>Takaisin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Kierratysohjeet;
