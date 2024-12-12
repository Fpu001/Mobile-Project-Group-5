import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import logo from '../assets/logo.png'
import style from '../style/style';
const Etusivu = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Image 
        source={logo} 
        style={style.image} 
      />
      <Text style={style.title}>Go green</Text>
      <View style={style.button}>
      <Button
        title="Kuluta vähemmän"
        onPress={() => navigation.navigate('Kulutavahemman')} 
      /><p>
      <Button
        title="Kierrätysohjeet"
        onPress={() => navigation.navigate('Kierratysohjeet')} 
      /></p>
      <Button
        title="Tavoitteet"
        onPress={() => navigation.navigate('Tavoitteet')} 
      /><p>
      <Button
        title="Seuranta"
        onPress={() => navigation.navigate('Seuranta')} 
      /><p>
        <Button
        title="Tietoja"
        onPress={() => navigation.navigate('Tietoja')} 
      /></p></p></View>
    </View>
  );
};

export default Etusivu;
