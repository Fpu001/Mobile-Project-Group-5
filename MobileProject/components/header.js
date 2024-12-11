import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useNavigation } from '@react-navigation/native'; 

const Header = () => {
  const navigation = useNavigation(); 

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Etusivu')} 
      style={{ marginLeft: 10 }}
    >
      <Icon name="home" size={30} color="#007AFF" /> 
    </TouchableOpacity>
  );
};

export default Header;
