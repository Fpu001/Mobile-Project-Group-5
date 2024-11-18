import { useState, useEffect,} from 'react'
import { Text, View } from 'react-native'

export default kierratysohjeet = ({navigation, route}) => {

    const [kulutavahemman, setKulutaVahemman] = useState('')

useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
        return unsubscribe
    })
}, [navigation])

useEffect(()=>{
    if (kulutavahemman === '' && route.params?.kulutus) {
      setKulutaVahemman(route.params.kulutus);
    }
  }, []);

  return (
    <>
    <Header />
    <View> 
      <Text style={styles.playerName}>
      
      kuluta vahemman {kierratysohjeet}
      </Text>
    </View>
    <Footer />
    </>
  )

}