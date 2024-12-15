import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Etusivu from './components/etusivu'; 
import Kulutavahemman from './components/kulutavahemman'; 
import Kierratysohjeet from './components/kierratysohjeet';
import Seuranta from './components/seuranta';
import Tietoja from './components/tietoja';
import Tavoitteet from './components/tavoitteet';
import Header from './components/header';
// import { scheduleDailyReminder } from './components/notifications'; 

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Etusivu">
      <Stack.Screen 
        name="Etusivu" 
        component={Etusivu} 
        options={{
          title: 'Etusivu',
          headerRight: () => <Header /> 
        }} 
      />
      <Stack.Screen 
        name="Kulutavahemman" 
        component={Kulutavahemman} 
        options={{ title: 'Kuluta vähemmän',
        headerRight: () => <Header />  
        }} 
      />
      <Stack.Screen 
        name="Kierratysohjeet" 
        component={Kierratysohjeet} 
        options={{ title: 'Kierrätysohjeet',
        headerRight: () => <Header />  
         }} 
      />
      <Stack.Screen 
        name="Seuranta" 
        component={Seuranta} 
        options={{ title: 'Seuranta',
          headerRight: () => <Header />  
         }} 
      />
      <Stack.Screen 
        name="Tietoja" 
        component={Tietoja} 
        options={{ title: 'Tietoja',
          headerRight: () => <Header />  
         }} 
      />
      <Stack.Screen 
        name="Tavoitteet" 
        component={Tavoitteet} 
        options={{ title: 'Tavoitteet',
          headerRight: () => <Header />  
         }} 
      />
    </Stack.Navigator>
  );
};

export default function App() {
  // useEffect(() => {
  //   // Pyydä lupaa ilmoituksille ja aseta muistutus
  //   const setupNotifications = async () => {
  //     await scheduleDailyReminder();  // Aikatauluta päivittäinen muistutus
  //   };

  //   setupNotifications();  // Käynnistä ilmoitusten käsittely

  // }, []);  // Tämä hook suoritetaan vain kerran sovelluksen käynnistyessä

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}