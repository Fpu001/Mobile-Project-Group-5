import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import style from '../style/style';
import Header from './header';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Ikonikirjasto

const Kulutavahemman = ({ navigation }) => {
  const tips = [
    { icon: 'lightbulb-outline', text: 'Sammuta käyttämättömät valot ja muut sähkölaitteet.' },
    { icon: 'thermometer', text: 'Säädä sisälämpötilaa viileämmälle.' },
    { icon: 'shower', text: 'Käy viileämmässä suihkussa.' },
    { icon: 'recycle', text: 'Lajittele jätteet ja kierrätä materiaalit oikein.' },
    { icon: 'leaf', text: 'Käytä julkista liikennettä, pyöräile tai kävele autoilun sijaan.' },
    { icon: 'shopping-outline', text: 'Osta vähemmän kertakäyttötuotteita ja suosi laadukkaita tavaroita.' },
    { icon: 'baguette', text: 'Vältä ruokahävikkiä ja hyödynnä ylijääneet ruoat.' },
    { icon: 'weather-sunny', text: 'Hyödynnä luonnonvaloa ja vältä turhaa valaistusta.' },
  ];

  return (
    <View style={style.tipPagecontainer}>
      <ScrollView contentContainerStyle={style.scrollViewContent}>
        <Text style={style.introText}>
          Tässä muutamia käytännön vinkkejä, joiden avulla voit tehdä arkisia valintoja, jotka säästävät energiaa, 
          vähentävät jätettä ja suojelevat ympäristöä. Jokainen pienikin muutos, olipa se sitten valojen sammuttaminen, vedenkulutuksen vähentäminen 
          tai kierrätyksen tehostaminen, auttaa rakentamaan vihreämpää tulevaisuutta meille kaikille.
        </Text>
        {tips.map((tip, index) => (
          <View key={index} style={style.tipContainer}>
            <MaterialCommunityIcons name={tip.icon} size={24} style={style.TipIcon} />
            <Text style={style.Tiptext}>{tip.text}</Text>
          </View>
        ))}
        <View style={style.TipButtonContainer}> 
        <TouchableOpacity style={style.Tipbutton} onPress={() => navigation.goBack()}>
          <Text style={style.buttonText}>Takaisin</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Kulutavahemman;
