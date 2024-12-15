import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../style/style';

const Tavoitteet = ({ navigation }) => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  // Tavoitteet ja niiden selitykset
  const goals = [
    {
      name: 'Kasvisateriatavoite',
      description: 'Kasvisateriatavoite auttaa vähentämään lihantuotannon ympäristövaikutuksia ja parantaa terveyttä.'
    },
    {
      name: 'Ympäristöystävällinen kulkutapa',
      description: 'Tämä tavoite kannustaa valitsemaan kestävämpiä kulkutapoja, kuten pyöräilyä tai julkista liikennettä.'
    },
    {
      name: 'Vedenkulutuksen vähentäminen',
      description: 'Vedenkulutuksen vähentäminen on tärkeää luonnonvarojen säästämiseksi ja ympäristön suojelun edistämiseksi.'
    }
  ];

  const saveGoal = async () => {
    try {
      if (selectedGoal) {
        await AsyncStorage.setItem('selectedGoal', selectedGoal.name);
        Alert.alert('Tavoite tallennettu', `Valitsit: ${selectedGoal.name}`);
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
            selectedGoal?.name === goal.name && style.radioButtonSelected
          ]}
          onPress={() => setSelectedGoal(goal)}
        >
          <View style={style.radioCircle}>
            {selectedGoal?.name === goal.name && <View style={style.radioInnerCircle} />}
          </View>
          <Text style={style.radioText}>{goal.name}</Text>
        </TouchableOpacity>
      ))}

      {/* Näytetään valitun tavoitteen selitys */}
      {selectedGoal && (
        <View style={style.descriptionContainer}>
          <Text style={style.descriptionText}>{selectedGoal.description}</Text>
        </View>
      )}

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
