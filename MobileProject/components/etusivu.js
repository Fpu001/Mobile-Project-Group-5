import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import logo from '../assets/logo.png';
import style from '../style/style';

const Etusivu = ({ navigation }) => {
  return (
    <View style={style.homeContainer}>
      <Image 
        source={logo} 
        style={style.image} 
      />
      <Text style={style.title}>Go Green</Text>

      <TouchableOpacity 
        style={style.button} 
        onPress={() => navigation.navigate('Kulutavahemman')}
      >
        <Text style={style.buttonText}>Kuluta vähemmän</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={style.button} 
        onPress={() => navigation.navigate('Kierratysohjeet')}
      >
        <Text style={style.buttonText}>Kierrätysohjeet</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={style.button} 
        onPress={() => navigation.navigate('Tavoitteet')}
      >
        <Text style={style.buttonText}>Tavoitteet</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={style.button} 
        onPress={() => navigation.navigate('Seuranta')}
      >
        <Text style={style.buttonText}>Seuranta</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={style.button} 
        onPress={() => navigation.navigate('Tietoja')}
      >
        <Text style={style.buttonText}>Tietoja</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Etusivu;

