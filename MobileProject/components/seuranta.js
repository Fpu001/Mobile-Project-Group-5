import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';
import style from '../style/style';

const Seuranta = ({ navigation }) => {
  const [meals, setMeals] = useState([]); // Kasvisateriat
  const [mealName, setMealName] = useState(''); // Syötetty aterian nimi
  const [travelModes, setTravelModes] = useState([]); // Kulkutavat
  const [selectedTravelMode, setSelectedTravelMode] = useState(''); // Valittu kulkutapa
  const [goal, setGoal] = useState(null);
  const [progress, setProgress] = useState(0.5); // Alustetaan edistymisaste (0-1)
  const [travelProgress, setTravelProgress] = useState(0); // Kulkutavoitteelle

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

  // Päästövähennyksen laskeminen (esim. 2 kg CO2e per kasvisateria)
  const calculateEmissionSavings = () => meals.length * 2;

  // Kulkutapojen päästövähennyksen laskeminen (esim. 1 kg CO2e per matka)
  const calculateTravelSavings = () => travelModes.length * 1;

  // Lisää uusi ateria listaan
  const addMeal = () => {
    if (mealName.trim()) {
      setMeals([...meals, { id: Date.now().toString(), name: mealName.trim() }]);
      setMealName('');
      setProgress((prev) => Math.min(prev + 0.2, 1)); // Päivittää edistymistä
    }
  };

  // Lisää uusi kulkutapa listaan
  const addTravelMode = () => {
    if (selectedTravelMode) {
      setTravelModes([...travelModes, { id: Date.now().toString(), mode: selectedTravelMode }]);
      setSelectedTravelMode('');
      setTravelProgress((prev) => Math.min(prev + 0.333, 1)); // Päivittää kulkutavoitteen edistymistä
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seurantatavoitteet</Text>

      <Text style={style.text}>
        {goal ? `Valitsemasi tavoite: ${goal}` : 'Ei tavoitetta valittu'}
      </Text>

      {/* Kasvisateriatavoite */}
      <Text style={styles.subTitle}>Kasvisateriatavoite</Text>
      <TextInput
        style={styles.input}
        placeholder="Kirjoita aterian nimi"
        value={mealName}
        onChangeText={setMealName}
      />
      <Button title="Lisää ateria" onPress={addMeal} />

      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.listItem}>- {item.name}</Text>}
      />

      <Text style={styles.savingsText}>
        Arvioidut päästövähennykset: {calculateEmissionSavings()} kg CO2e
      </Text>

      <View style={{ marginVertical: 20 }}>
        <Progress.Bar 
          progress={progress} 
          width={200} 
          color="blue" 
          borderRadius={5} 
        />
        <Text style={styles.savingsText}>{`${Math.round(progress * 100)}% saavutettu`}</Text>
      </View>

      <Text style={styles.goalStatus}>
        {meals.length >= 5
          ? 'Onneksi olkoon, tavoite saavutettu!'
          : `Syö vielä ${5 - meals.length} kasvisateriaa saavuttaaksesi tavoitteen.`}
      </Text>

      {/* Kulkutapatavoite */}
      <Text style={styles.subTitle}>Ympäristöystävällinen kulkutapa</Text>
      <Picker
        selectedValue={selectedTravelMode}
        style={styles.picker}
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
        renderItem={({ item }) => <Text style={styles.listItem}>- {item.mode}</Text>}
      />

      <Text style={styles.savingsText}>
        Arvioidut päästövähennykset: {calculateTravelSavings()} kg CO2e
      </Text>

      <View style={{ marginVertical: 20 }}>
        <Progress.Bar 
          progress={travelProgress} 
          width={200} 
          color="green" 
          borderRadius={5} 
        />
        <Text style={styles.savingsText}>{`${Math.round(travelProgress * 100)}% saavutettu`}</Text>
      </View>

      <Text style={styles.goalStatus}>
        {travelModes.length >= 3
          ? 'Hienoa, saavutit kulkutapatavoitteen!'
          : `Käytä vielä ${3 - travelModes.length} kertaa ympäristöystävällistä kulkutapaa.`}
      </Text>

      <Button 
        title="Takaisin" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  listItem: {
    fontSize: 16,
    paddingVertical: 5,
  },
  savingsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  goalStatus: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
    color: 'green',
  },
});

export default Seuranta;
