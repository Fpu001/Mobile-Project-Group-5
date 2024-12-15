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
          <Text style={style.modalText}>Biojätteen kierrätysohjeet...</Text>
        );
      case 'kartonki':
        return (
          <Text style={style.modalText}>Kartonin kierrätysohjeet...</Text>
        );
      case 'lasi':
        return (
          <Text style={style.modalText}>Lasin kierrätysohjeet...</Text>
        );
      case 'metalli':
        return (
          <Text style={style.modalText}>Metallin kierrätysohjeet...</Text>
        );
      case 'muovi':
        return (
          <Text style={style.modalText}>Muovin kierrätysohjeet...</Text>
        );
      case 'paperi':
        return (
          <Text style={style.modalText}>Paperin kierrätysohjeet...</Text>
        );
      case 'sekajate':
        return (
          <Text style={style.modalText}>Sekajätteen kierrätysohjeet...</Text>
        );
      default:
        return null;
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Kierrätysohjeet</Text>
      
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
      
      {/* Lasi-ikonia ja tekstiä vierekkäin */}
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

      <TouchableOpacity style={style.button} onPress={() => navigation.goBack()}> 
        <Text style={style.buttonText}>Takaisin</Text>
      </TouchableOpacity>

      {/* Modal, joka avautuu painetun ikonin mukaan */}
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
