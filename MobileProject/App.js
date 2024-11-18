import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Alert, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import logo from './assets/logo.png';
import styles from './style/style'
import etusivu from './components/etusivu';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import kulutavahemman from './components/kulutavahemman';
import kierratysohjeet from './components/kierratysohjeet';

const App = ({navigation, route}) => {

  const [kierratysohjeet, setKierratysohjeet] = useState();
  const [kulutavahemman, setKulutaVahemman] = useState();

  useEffect(()=>{
    if (kierratysohjeet === '' && route.params?.kierratys) {
      setKierratysohjeet(route.params.kierratys);
    }
  }, []);

  useEffect(()=>{
    if (kulutavahemman === '' && route.params?.kulutus) {
      setKulutaVahemman(route.params.kulutus);
    }
  }, []);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     return unsubscribe
  //   })
  // }, [navigation])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Go Green</Text>
      <Image
        source={{ uri: './assets/logo.png' }}
        style={styles.image}
      />
      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridItem}>
          <Pressable onPress={() => navigation.navigate('kierratysohjeet', {kierratys: kierratysohjeet})}>
          </Pressable>
          <FontAwesome name="recycle" size={24} color="green" />
          <Text style={styles.gridText}>Kierrätysohjeet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
        <Pressable onPress={() => navigation.navigate('kulutavahemman')}>
        </Pressable>
          <Text style={styles.gridText}>Kuluta vähemmän</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.gridText}>Tavoitteet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem} >
          <Text style={styles.gridText}>Seuranta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, styles.fullWidth]}>
          <FontAwesome name="info-circle" size={24} color="green" />  
          <Text style={styles.gridText}>Tietoja</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default App;
