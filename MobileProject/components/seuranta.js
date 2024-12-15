import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';
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
    const fetchGoal = async () => {
      try {
        const storedGoal = await AsyncStorage.getItem('selectedGoal');
        if (storedGoal) {
          setGoal(storedGoal);
        } else {
          setGoal('Ei tavoitetta valittu');
        }
      } catch (error) {
        console.error('Virhe haettaessa tallennettua tavoitetta:', error);
        Alert.alert('Virhe', 'Tavoitetta ei voitu ladata.');
        setGoal('Virhe ladattaessa tavoitetta');
      }
    };

    fetchGoal();
  }, []);

  const addMeal = () => {
    if (mealName.trim()) {
      setMeals([...meals, { id: Date.now().toString(), name: mealName.trim() }]);
      setMealName('');
      setProgress((prev) => Math.min(prev + 0.2, 1));
    }
  };

  const addTravelMode = () => {
    if (selectedTravelMode) {
      setTravelModes([...travelModes, { id: Date.now().toString(), mode: selectedTravelMode }]);
      setSelectedTravelMode('');
      setTravelProgress((prev) => Math.min(prev + 0.333, 1));
    }
  };

  const addShower = () => {
    const duration = parseInt(showerDuration, 10);
    if (!isNaN(duration) && duration > 0 && duration <= 5) {
      setShowers([...showers, { id: Date.now().toString(), duration }]);
      setShowerDuration('');
      setWaterProgress((prev) => Math.min(prev + 0.2, 1));
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
          <Button title="Lisää ateria" onPress={addMeal} />
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
              color="blue" 
              borderRadius={5} 
            />
            <Text style={style.savingsText}>{`${Math.round(progress * 100)}% saavutettu`}</Text>
          </View>
          <Text style={style.goalStatus}>
            {meals.length >= 5
              ? 'Onneksi olkoon, tavoite saavutettu!'
              : `Syö vielä ${5 - meals.length} kasvisateriaa saavuttaaksesi tavoitteen.`}
          </Text>
        </>
      );
    }

    if (goal === 'Ympäristöystävällinen kulkutapa') {
      return (
        <>
          <Text style={style.subTitle}>Ympäristöystävällinen kulkutapa</Text>
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
          <Button title="Lisää kulkutapa" onPress={addTravelMode} />
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
          <Text style={style.subTitle}>Vedenkulutuksen vähentäminen</Text>
          <TextInput
            style={style.input}
            placeholder="Kirjoita suihkun kesto (minuuttia)"
            value={showerDuration}
            keyboardType="numeric"
            onChangeText={setShowerDuration}
          />
          <Button title="Lisää suihkun kesto" onPress={addShower} />
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
              color="purple" 
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
          <Text style={style.title}>Seurantatavoitteet</Text>
          <Text style={style.text}>
            {goal ? `Valitsemasi tavoite: ${goal}` : 'Ei tavoitetta valittu'}
          </Text>
          {renderGoalContent()}
          <Button title="Takaisin" onPress={() => navigation.goBack()} />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default Seuranta;
