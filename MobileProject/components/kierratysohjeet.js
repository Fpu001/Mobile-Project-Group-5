import React from 'react';
import { View, Text, Button } from 'react-native';
import style from '../style/style';


const Kierratysohjeet = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Kierrätysohjeet</Text>
      <Button 
        title="Takaisin" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
};

export default Kierratysohjeet;
