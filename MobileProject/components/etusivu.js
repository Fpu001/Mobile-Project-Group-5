import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import logo from '../assets/logo.png'
import style from '../style/style';
const Etusivu = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image 
        source={logo} 
        style={{ width: 100, height: 100, marginBottom: 10 }} 
      />
      <Text style={style.title}>Go green</Text>
      <Button
        title="Kuluta vähemmän"
        onPress={() => navigation.navigate('Kulutavahemman')} 
      />
      <Button
        title="Kierrätysohjeet"
        onPress={() => navigation.navigate('Kierratysohjeet')} 
      />
      <Button
        title="Tavoitteet"
        onPress={() => navigation.navigate('Tavoitteet')} 
      />
      <Button
        title="Seuranta"
        onPress={() => navigation.navigate('Seuranta')} 
      />
        <Button
        title="Tietoja"
        onPress={() => navigation.navigate('Tietoja')} 
      />
    </View>
  );
};

export default Etusivu;
