import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import logo from './assets/logo.png';

const App = () => {
  const handlePress = (item) => {
    Alert.alert(`You pressed ${item}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Go Green</Text>
      <Image
        source={{ uri: './assets/logo.png' }}
        style={styles.image}
      />
      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridItem} onPress={() => handlePress('Kierrätysohjeet')}>
          <FontAwesome name="recycle" size={24} color="green" />
          <Text style={styles.gridText}>Kierrätysohjeet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem} onPress={() => handlePress('Kuluta vähemmän')}>
          <Text style={styles.gridText}>Kuluta vähemmän</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem} onPress={() => handlePress('Tavoitteet')}>
          <Text style={styles.gridText}>Tavoitteet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem} onPress={() => handlePress('Seuranta')}>
          <Text style={styles.gridText}>Seuranta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, styles.fullWidth]} onPress={() => handlePress('Tietoja')}>
          <FontAwesome name="info-circle" size={24} color="green" />  
          <Text style={styles.gridText}>Tietoja</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: 'black',
  },
  title: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },
  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  gridText: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  fullWidth: {
    width: '100%',
  },
});

export default App;
