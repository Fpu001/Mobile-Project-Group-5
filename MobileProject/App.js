import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Etusivu from './components/etusivu'; 
import Kulutavahemman from './components/kulutavahemman'; 

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Etusivu">
      <Stack.Screen 
        name="Etusivu" 
        component={Etusivu} 
        options={{ title: 'Overview' }} 
      />
      <Stack.Screen 
        name="Kulutavahemman" 
        component={Kulutavahemman} 
        options={{ title: 'Kuluta vähemmän' }} 
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

//   <Router>
//   <Switch>
//     <Route path="/" exact component={Etusivu} />
//     <Route path="/Kierratysohjeet" component={Kierratysohjeet} />
//     <Route path="/Kulutavahemman" component={Kulutavahemman} />
//     <Route path="/Tietoja" component={Tietoja} />
//     <Route path="/Tavoitteet" component={Tavoitteet} />
//     <Route path="/Seuranta" component={Seuranta} />
//   </Switch>
// </Router>
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