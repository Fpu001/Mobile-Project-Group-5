import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Alert, Pressable, Button} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HamburgerMenu from "./components/HamburgerMenu";
import logo from './assets/logo.png';
import "./style/app.css"
import styles from './style/style'
import Etusivu from './components/Etusivu';
import Seuranta from './components/Seuranta';
import Tavoitteet from './components/Tavoitteet'
import Kulutavahemman from './components/Kulutavahemman';
import Kierratysohjeet from './components/Kierratysohjeet';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Router, Switch, Route } from 'react-router';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    primary: 'rgb(255, 45, 85)',
  },
};
const App = () => { 


  const Etusivu = ({navigation}) => {
    return (
    <Button title='kuluta vähemmän' 
    onPress={() => navigation.navigate('Kulutavahemman', {name: 'kuluta vähemmän'})}
    />
    )
    }
    const Kulutavahemman = ({navigation, route}) => {
      return (
      <Button title='Seuranta' style={styles.grid}
      onPress={() => navigation.navigate('Seuranta', {name: 'Seuranta'})}
    /> 
      )
      }
  const Kierratysohjeet = ({navigation, route}) => {
    return (
    <Button title='Seuranta' style={styles.grid}
    onPress={() => navigation.navigate('Seuranta', {name: 'Seuranta'})}
  /> 
    )
    }
    const Seuranta = ({navigation, route}) => {
      return (
      <Button title='Tavoitteet' style={styles.grid}
      onPress={() => navigation.navigate('Tavoitteet', {name: 'Tavoitteet'})}
    />
    )
    }
    const Tavoitteet = ({navigation, route}) => {
      return (
      <Button title='Tietoja' style={styles.grid}
      onPress={() => navigation.navigate('Tietoja', {name: 'Tietoja'})}
    />
    )
    }
    const Tietoja = ({navigation, route}) => {
      return (
      <Button title='Etusivu' style={styles.grid}
      onPress={() => navigation.navigate('Etusivu', {name: 'Etusivu'})}
    />
    )
    }
 
return (  
  <>
  <Router>
    <HamburgerMenu />
    <div className="components">
      <Switch>
       <Route exact path="/" component={Etusivu} />
       <Route path="/Kierratysohjeet" component={Kierratysohjeet}/>
       <Route path="/Kulutavahemman" component={Kulutavahemman}/>
       <Route path="/Seuranta" component={Seuranta}/>
       <Route path="/Tavoitteet" component={Tavoitteet}/>
       <Route path="/Tietoja" component={Tietoja}/>
      </Switch>
    </div>
  </Router>

    <NavigationContainer style={styles.grid}>
      <Stack.Navigator style={styles.gridText}>
          <Stack.Screen name="Etusivu" component={Etusivu} options={{title: 'Etusivu'}}/>
          <Stack.Screen name="Kierratysohjeet" component={Kierratysohjeet} options={{title: 'Kierrätysohjeet'}}/>
          <Stack.Screen name="Kulutavahemman" component={Kulutavahemman} options={{title: 'Kuluta vähemmän'}}/>
          <Stack.Screen name="Seuranta" component={Seuranta} options={{title: 'Seuranta'}}/>
          <Stack.Screen name="Tavoitteet" component={Tavoitteet} options={{title: 'Tavoitteet'}}/>
          <Stack.Screen name="Tietoja" component={Tietoja} options={{title: 'Tietoja'}}/>
      </Stack.Navigator>
    </NavigationContainer>  
</>
);
};
export default App;

  // useEffect(()=>{
  //   if (kierratysohjeet === '' && route.params?.kierratys) {
  //     setKierratysohjeet(route.params.kierratys);
  //   }
  // }, []);

  // useEffect(()=>{
  //   if (kulutavahemman === '' && route.params?.kulutus) {
  //     setKulutaVahemman(route.params.kulutus);
  //   }
  // }, []);


  
    //  <View>
    //   <Text style={styles.title}>Go Green/</Text>
    //   <Image
    //     source={{ uri: './assets/logo.png' }}
    //     style={styles.image}
    //   />
    //   </View> 
    //   <View style={styles.grid}>
    //     <TouchableOpacity style={styles.gridItem}>
    //      <Pressable onPress={() => navigation.navigate('kierratysohjeet')}></Pressable>
    //         <FontAwesome name="recycle" size={24} color="green" />
    //       <Text style={styles.gridText}>Kierrätysohjeet</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity style={styles.gridItem}>
    //       <Pressable onPress={() => navigation.navigate('kulutavahemman')}/>
    //       <Text style={styles.gridText}>Kuluta vähemmän</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity style={styles.gridItem}>
    //       <Text style={styles.gridText}>Tavoitteet</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.gridItem} >
    //       <Text style={styles.gridText}>Seuranta</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={[styles.gridItem, styles.fullWidth]}>
    //       <FontAwesome name="info-circle" size={24} color="green" />  
    //       <Text style={styles.gridText}>Tietoja</Text>
    //     </TouchableOpacity>
    //   </View> 
