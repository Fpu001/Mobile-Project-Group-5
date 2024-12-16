import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import biojate from '../assets/biojate.png';
import kartonki from '../assets/kartonki.png';
import lasi from '../assets/lasi.png';
import metalli from '../assets/metalli.png';
import muovi from '../assets/muovi.png';
import paperi from '../assets/paperi.png';
import sekajate from '../assets/sekajate.png';
import style from '../style/style';

const Kierratysohjeet = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(null); // Yksi tila kaikille modaalille

  const handlePress = (material) => {
    setModalVisible(material); // Avaa modaalin, joka vastaa painettua materiaalia
  };

  const handleCloseModal = () => {
    setModalVisible(null); // Sulje modal
  };

  const renderModalContent = () => {
    switch (modalVisible) {
      case 'biojate':
        return (
          <Text style={style.modalText}>
           Ruuantähteet{"\n"}
            Hedelmien, juuresten, vihannesten ja kananmunien kuoret{"\n"}
            Kahvin- ja teenporot suodatinpusseineen{"\n"}
            Ruokarasvat ja -öljyt (imeytä nestemäiset esim. talouspaperiin){"\n"}
            Kalanperkeet ja luut{"\n"}
            Pehmopaperit, esim. talouspaperi ja paperiset lautasliinat{"\n"}
            Kasvijätteet ja kukkamulta{"\n"}
            Pienet puupalat esim. hammas- ja jäätelötikut{"\n"}
            Lemmikkieläinten kasvikuitu-, puu- ja bentoniittipohjaiset kuivikkeet{"\n"}
            Vitamiinit ja hivenaineet pakkauksistaan poistettuna{"\n"}
            Sanomalehtipaperi tai kananmunakenno kuivikkeena</Text>
        );
      case 'kartonki':
        return (
          <Text style={style.modalText}>
          Kartonkiset, nestepakkaukset, myös alumiinivuoratut{"\n"}
            Elintarvikkeiden ja muiden tuotteiden kartonkipakkaukset{"\n"}
            Paperipussit, -kassit{"\n"}
            Käärepaperit, esimerkiksi kopiopaperin kääreet{"\n"}
            WC- ja talouspaperirullien hylsyt{"\n"}
            Pizzalaatikot, munakennot{"\n"}
            Noutoruoka-astiat ja –pakkaukset, kertakäyttömukit{"\n"}
            Juomien pahviset monipakkaukset, esim. sixpackit ja salkut{"\n"}
            Pahvilaatikot{"\n"}
            Kartonkiset ja paperiset pakkaustäytteet</Text>
        );
      case 'lasi':
        return (
          <Text style={style.modalText}>
          kirkkaat ja värilliset lasipakkaukset: lasipurkit ja -pullot
          poista korkit ja kannet
          voit jättää kaulusrenkaat ja etiketit paikalleen</Text>
        );
      case 'metalli':
        return (
          <Text style={style.modalText}>
          Säilyketölkit{"\n"}
            Pantittomat juomatölkit{"\n"}
            Metallikannet, -korkit ja -sulkimet{"\n"}
            Alumiinivuoat, -foliot ja -kannet{"\n"}
            Maalipurkit (täysin tyhjät ja kuivatut){"\n"}
            Tyhjät ja paineettomat aerosolipullot{"\n"}
            Metalliset kahvikapselit</Text>
        );
      case 'muovi':
        return (
          <Text style={style.modalText}>
          Elintarvikkeiden muoviset pakkaukset, myös alumiinivuoratut{"\n"}
            Muovikassit, -pussit ja -kääreet{"\n"}
            Pesuaine-, shampoo- ja saippuapakkaukset{"\n"}
            Muut kotitalouden muoviset pakkaukset{"\n"}
            EPS- eli styrox-pakkaukset{"\n"}
            Muoviset pakkaustäytteet{"\n"}
            Muoviset noutoruoka-astiat ja -pakkaukset, kertakäyttömukit</Text>
        );
      case 'paperi':
        return (
          <Text style={style.modalText}>
           Sanoma- ja aikakauslehdet{"\n"}
            Mainokset ja esitteet{"\n"}
            Kirjekuoret, myös ikkunalliset{"\n"}
            Toimisto- ja piirustuspaperit{"\n"}
            Puhelin- ja tuoteluettelot{"\n"}
            Vihkot (kierrekantisten vihkojen metalliosat tulee irrottaa ja kierrättää metallinkeräyksessä, vihkojen sivut lajitellaan paperiin)</Text>
        );
      case 'sekajate':
        return (
          <Text style={style.modalText}>
          Muut muovituotteet kuin pakkaukset, esim. keittiön muovikipot ja -kupit{"\n"}
            Muoviset pakkausvanteet, narut ja nauhat{"\n"}
            Leivinpaperit, voipaperit{"\n"}
            Tuorekelmut, pakastepussit{"\n"}
            Valokuvat, diat ja vastaavat{"\n"}
            Kynttilänkannat{"\n"}
            Vaipat, terveyssiteet, vanulaput ja muut vastaavat hygieniatuotteet{"\n"}
            Kumi-, nahka- ja keinonahkatuotteet{"\n"}
            Pölynimurinpussit, tupakantumpit, purukumit{"\n"}
            Hehkulamput, halogeenilamput, sulakkeet{"\n"}
            Posliini- ja keramiikkatuotteet, lasiastiat, peilit{"\n"}
            Tyhjät värikasetit, VHS-kasetit, DVD-levyt ja vastaavat{"\n"}
            Erilaiset narut, lahjanauhat, teipit, lahjapaperit{"\n"}
            Puupalat, lastulevypalat</Text>
        );
      default:
        return null;
    }
  };

  return (
    <View style={style.container}>
      <View style={style.titleContainer}> 
      <Text style={style.title}>Kierrätysohjeet</Text>
      </View>
      {/* Kuvakkeet */}
      <TouchableOpacity onPress={() => handlePress('biojate')}>
      <View style={style.iconWithTextContainer}>
        <Image source={biojate} style={style.recycleIcons} />
        <Text style={style.recycleText}>Biojäte</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('kartonki')}>
      <View style={style.iconWithTextContainer}>
        <Image source={kartonki} style={style.recycleIcons} />
        <Text style={style.recycleText}>Kartonki</Text>
        </View>
      </TouchableOpacity>
      
 
      <TouchableOpacity onPress={() => handlePress('lasi')}>
        <View style={style.iconWithTextContainer}>
          <Image source={lasi} style={style.recycleIcons} />
          <Text style={style.recycleText}>Lasi</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('metalli')}>
      <View style={style.iconWithTextContainer}>
        <Image source={metalli} style={style.recycleIcons} />
        <Text style={style.recycleText}>Metalli</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('muovi')}>
      <View style={style.iconWithTextContainer}>
        <Image source={muovi} style={style.recycleIcons} />
        <Text style={style.recycleText}>Muovi</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('paperi')}>
      <View style={style.iconWithTextContainer}>
        <Image source={paperi} style={style.recycleIcons} />
        <Text style={style.recycleText}>Paperi</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('sekajate')}>
      <View style={style.iconWithTextContainer}>
        <Image source={sekajate} style={style.recycleIcons} />
        <Text style={style.recycleText}>Sekajäte</Text>
        </View>
      </TouchableOpacity>
    <View style={style.buttonContainer}>
      <TouchableOpacity style={style.button} onPress={() => navigation.goBack()}> 
        <Text style={style.buttonText}>Takaisin</Text>
      </TouchableOpacity>
      </View>

    
      <Modal
        visible={modalVisible !== null}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Text style={style.modalTitle}>{modalVisible ? modalVisible.charAt(0).toUpperCase() + modalVisible.slice(1) + ' Kierrätysohjeet' : ''}</Text>
            {renderModalContent()}
            <TouchableOpacity style={style.closeButton} onPress={handleCloseModal}>
              <Text style={style.closeButtonText}>Sulje</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Kierratysohjeet;
