import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';
import { Picker } from '@react-native-picker/picker';
import style from '../style/style';

const Seuranta = ({ navigation }) => {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState('');
  const [travelModes, setTravelModes] = useState([]);
  const [selectedTravelMode, setSelectedTravelMode] = useState('');
  const [showers, setShowers] = useState([]);
  const [showerDuration, setShowerDuration] = useState('');
  const [goal, setGoal] = useState(null);
  const [progress, setProgress] = useState(0);
  const [travelProgress, setTravelProgress] = useState(0);
  const [waterProgress, setWaterProgress] = useState(0);

  useEffect(() => {
    const fetchGoalAndProgress = async () => {
      try {
        const storedGoal = await AsyncStorage.getItem('selectedGoal');
        const storedMeals = JSON.parse(await AsyncStorage.getItem('meals')) || [];
        const storedTravelModes = JSON.parse(await AsyncStorage.getItem('travelModes')) || [];
        const storedShowers = JSON.parse(await AsyncStorage.getItem('showers')) || [];

        setGoal(storedGoal || 'Ei tavoitetta valittu');
        setMeals(storedMeals);
        setTravelModes(storedTravelModes);
        setShowers(storedShowers);

        // Lasketaan edistyminen tallennetuista tiedoista
        setProgress(Math.min(storedMeals.length * 0.2, 1));
        setTravelProgress(Math.min(storedTravelModes.length * 0.333, 1));
        setWaterProgress(Math.min(storedShowers.length * 0.2, 1));
      } catch (error) {
        console.error('Virhe haettaessa tietoja:', error);
      }
    };

    fetchGoalAndProgress();
  }, []);

  const saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Virhe tallentaessa tietoja:', error);
    }
  };

  const addMeal = () => {
    if (mealName.trim()) {
      const updatedMeals = [...meals, { id: Date.now().toString(), name: mealName.trim() }];
      setMeals(updatedMeals);
      setMealName('');
      setProgress((prev) => Math.min(prev + 0.2, 1));
      saveData('meals', updatedMeals);
    }
  };

  const addTravelMode = () => {
    if (selectedTravelMode) {
      const updatedTravelModes = [...travelModes, { id: Date.now().toString(), mode: selectedTravelMode }];
      setTravelModes(updatedTravelModes);
      setSelectedTravelMode('');
      setTravelProgress((prev) => Math.min(prev + 0.333, 1));
      saveData('travelModes', updatedTravelModes);
    }
  };

  const addShower = () => {
    const duration = parseInt(showerDuration, 10);
    if (!isNaN(duration) && duration > 0 && duration <= 5) {
      const updatedShowers = [...showers, { id: Date.now().toString(), duration }];
      setShowers(updatedShowers);
      setShowerDuration('');
      setWaterProgress((prev) => Math.min(prev + 0.2, 1));
      saveData('showers', updatedShowers);
    } else {
      Alert.alert('Virhe', 'Kirjoita suihkun kesto numerona (1-5 minuuttia).');
    }
  };

  const renderGoalContent = () => {
    if (goal === 'Kasvisateriatavoite') {
      return (
        <>
          <Text style={style.subTitle}>Kasvisateriatavoite</Text>
          <TextInput
            style={style.input}
            placeholder="Kirjoita aterian nimi"
            value={mealName}
            onChangeText={setMealName}
          />
          <TouchableOpacity onPress={addMeal} style={style.button}>
            <Text style={style.buttonText}>Lisää ateria</Text>
          </TouchableOpacity>
          <FlatList
            data={meals}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Text style={style.listItem}>- {item.name}</Text>}
          />
          <Text style={style.savingsText}>
            Arvioidut päästövähennykset: {meals.length * 2} kg CO2e
          </Text>
          <View style={{ marginVertical: 20 }}>
            <Progress.Bar 
              progress={progress} 
              width={200} 
              color="green" 
              borderRadius={5} 
            />
            <Text style={style.savingsText}>{`${Math.round(progress * 100)}% saavutettu`}</Text>
          </View>
          <Text style={style.goalStatus}>
            {meals.length >= 5
              ? 'Onneksi olkoon, tavoite saavutettu!'
              : `Syö vielä ${5 - meals.length} kasvisateriaa saavuttaaksesi tavoitteesi.`}
          </Text>
        </>
      );
    }

    if (goal === 'Ympäristöystävällinen kulkutapa') {
      return (
        <>
          <Text style={style.subTitle}>Kulje ympäristöystävällisesti</Text>
          <Picker
            selectedValue={selectedTravelMode}
            style={style.picker}
            onValueChange={(itemValue) => setSelectedTravelMode(itemValue)}
          >
            <Picker.Item label="Valitse kulkutapa" value="" />
            <Picker.Item label="Kävely" value="Kävely" />
            <Picker.Item label="Pyöräily" value="Pyöräily" />
            <Picker.Item label="Julkinen liikenne" value="Julkinen liikenne" />
          </Picker>
          <TouchableOpacity onPress={addTravelMode} style={style.button}>
            <Text style={style.buttonText}>Lisää kulkutapa</Text>
          </TouchableOpacity>
          <FlatList
            data={travelModes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Text style={style.listItem}>- {item.mode}</Text>}
          />
          <Text style={style.savingsText}>
            Arvioidut päästövähennykset: {travelModes.length * 1} kg CO2e
          </Text>
          <View style={{ marginVertical: 20 }}>
            <Progress.Bar 
              progress={travelProgress} 
              width={200} 
              color="green" 
              borderRadius={5} 
            />
            <Text style={style.savingsText}>{`${Math.round(travelProgress * 100)}% saavutettu`}</Text>
          </View>
          <Text style={style.goalStatus}>
            {travelModes.length >= 3
              ? 'Hienoa, saavutit kulkutapatavoitteen!'
              : `Käytä vielä ${3 - travelModes.length} kertaa ympäristöystävällistä kulkutapaa.`}
          </Text>
        </>
      );
    }

    if (goal === 'Vedenkulutuksen vähentäminen') {
      return (
        <>
          <Text style={style.subTitle}>Vähennä vedenkulutusta</Text>
          <TextInput
            style={style.input}
            placeholder="Kirjoita suihkun kesto (minuuttia)"
            value={showerDuration}
            keyboardType="numeric"
            onChangeText={setShowerDuration}
          />
          <TouchableOpacity onPress={addShower} style={style.button}>
            <Text style={style.buttonText}>Lisää suihkun kesto</Text>
          </TouchableOpacity>
          <FlatList
            data={showers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Text style={style.listItem}>- {item.duration} minuuttia</Text>}
          />
          <Text style={style.savingsText}>
            Arvioitu veden säästö: {showers.length * 50} litraa
          </Text>
          <View style={{ marginVertical: 20 }}>
            <Progress.Bar 
              progress={waterProgress} 
              width={200} 
              color="green" 
              borderRadius={5} 
            />
            <Text style={style.savingsText}>{`${Math.round(waterProgress * 100)}% saavutettu`}</Text>
          </View>
          <Text style={style.goalStatus}>
            {showers.length >= 5
              ? 'Mahtavaa! Olet saavuttanut vedenkulutustavoitteen!'
              : `Pidä vielä ${5 - showers.length} lyhyttä suihkua saavuttaaksesi tavoitteen.`}
          </Text>
        </>
      );
    }

    return null;
  };

  return (
    <FlatList
      data={[1]} 
      renderItem={() => (
        <View style={style.container}>
          <Text style={style.title}>Tavoitteiden seuranta</Text>
          <Text style={style.text}>
            {goal ? `Valitsemasi tavoite: ${goal}` : 'Ei tavoitetta valittu'}
          </Text>
          {renderGoalContent()}
          <TouchableOpacity onPress={() => navigation.goBack()} style={style.button}>
            <Text style={style.buttonText}>Takaisin</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default Seuranta;