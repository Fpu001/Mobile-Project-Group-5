import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../style/style';

const Seuranta = ({ navigation }) => {
  const [goal, setGoal] = useState(null);

  useEffect(() => {
    const fetchGoal = async () => {
      try {
        const storedGoal = await AsyncStorage.getItem('selectedGoal');
        setGoal(storedGoal);
      } catch (error) {
        console.error('Virhe haettaessa tallennettua tavoitetta:', error);
      }
    };

    fetchGoal();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={style.title}>Seuranta</Text>
      <Text style={style.text}>
        {goal ? `Valitsemasi tavoite: ${goal}` : 'Ei tavoitetta valittu'}
      </Text>
      <Button 
        title="Takaisin" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
};

export default Seuranta;
