import React from 'react'
import { Text, View } from 'react-native'
import styles from '../style/style'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default etusivu = () => {
    return (
      <View style={styles.footer}>
        <Text style={styles.author}>
          Author: Frans Puranen
        </Text>
      </View>
    )
  }