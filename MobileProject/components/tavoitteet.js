import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../style/style';

const Tavoitteet = ({ navigation }) => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const goals = ['Tavoite 1', 'Tavoite 2', 'Tavoite 3'];

  const saveGoal = async () => {
    try {
      if (selectedGoal) {
        await AsyncStorage.setItem('selectedGoal', selectedGoal);
        Alert.alert('Tavoite tallennettu', `Valitsit: ${selectedGoal}`);
      } else {
        Alert.alert('Valitse tavoite ennen tallennusta');
      }
    } catch (error) {
      console.error('Virhe tallentaessa tavoitetta:', error);
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Tavoitteet</Text>
      <Text style={style.text}>Valitse tavoitteesi</Text>
      
      {goals.map((goal, index) => (
        <TouchableOpacity 
          key={index} 
          style={[
            style.radioButton, 
            selectedGoal === goal && style.radioButtonSelected
          ]}
          onPress={() => setSelectedGoal(goal)}
        >
          <View style={style.radioCircle}>
            {selectedGoal === goal && <View style={style.radioInnerCircle} />}
          </View>
          <Text style={style.radioText}>{goal}</Text>
        </TouchableOpacity>
      ))}

      <Button 
        title="Tallenna" 
        onPress={saveGoal}
        disabled={!selectedGoal} // Estää napin käytön, jos mitään ei ole valittu
      />

      <TouchableOpacity style={style.button}
        onPress={() => navigation.goBack()}> 
        <Text style={style.buttonText}>Takaisin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tavoitteet;
