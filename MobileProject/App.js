import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Alert, Pressable, Button} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HamburgerMenu from "./components/HamburgerMenu";
import logo from './assets/logo.png';
import "./style/app.css"
import styles from './style/style'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Router, Switch, Route, Link } from 'react-router';
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes } from 'react-router';
import Etusivu from './components/Etusivu';
import Kulutavahemman from './components/Kulutavahemman';
import Kierratysohjeet from './components/Kierratysohjeet';
import Seuranta from './components/Seuranta';
import Tavoitteet from './components/Tavoitteet'
import Tietoja from './components/tietoja';
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

  

  

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Etusivu</Link>
        </li>
        <li>
          <Link to="/Kierratysohjeet">Kierrätysohjeet</Link>
        </li>
        <li>
          <Link to="/Kulutavahemman">Kuluta vähemmän</Link>
        </li>
        <li>
          <Link to="/Tietoja">Tietoja</Link>
        </li>
        <li>
          <Link to="/Tavoitteet">Tavoitteet</Link>
        </li>
        <li>
          <Link to="/Seuranta">Seuranta</Link>
        </li>
      </ul>
    </nav>
  )
}
 
return (  
  <Router>
  <Switch>
    <Route path="/" exact component={Etusivu} />
    <Route path="/Kierratysohjeet" component={Kierratysohjeet} />
    <Route path="/Kulutavahemman" component={Kulutavahemman} />
    <Route path="/Tietoja" component={Tietoja} />
    <Route path="/Tavoitteet" component={Tavoitteet} />
    <Route path="/Seuranta" component={Seuranta} />
  </Switch>
</Router>
  // <>
  // <Router>
  //   <HamburgerMenu />
  //   <div className="components">
  //     <Switch>
  //      <Route exact path="/" component={Etusivu} />
  //      <Route path="/Kierratysohjeet" component={Kierratysohjeet}/>
  //      <Route path="/Kulutavahemman" component={Kulutavahemman}/>
  //      <Route path="/Seuranta" component={Seuranta}/>
  //      <Route path="/Tavoitteet" component={Tavoitteet}/>
  //      <Route path="/Tietoja" component={Tietoja}/>
  //     </Switch>
  //   </div>
  // </Router>

    /* <NavigationContainer style={styles.grid}>
      <Stack.Navigator style={styles.gridText}>
          <Stack.Screen name="Etusivu" component={Etusivu} options={{title: 'Etusivu'}}/>
          <Stack.Screen name="Kierratysohjeet" component={Kierratysohjeet} options={{title: 'Kierrätysohjeet'}}/>
          <Stack.Screen name="Kulutavahemman" component={Kulutavahemman} options={{title: 'Kuluta vähemmän'}}/>
          <Stack.Screen name="Seuranta" component={Seuranta} options={{title: 'Seuranta'}}/>
          <Stack.Screen name="Tavoitteet" component={Tavoitteet} options={{title: 'Tavoitteet'}}/>
          <Stack.Screen name="Tietoja" component={Tietoja} options={{title: 'Tietoja'}}/>
      </Stack.Navigator>
    </NavigationContainer>   */
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
