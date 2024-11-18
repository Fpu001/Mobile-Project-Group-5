import { useState, useEffect,} from 'react'
import { Text, View } from 'react-native'
import Header from './header'
import Footer from './footer'

export default kulutavahemman = ({navigation, route}) => {

    const [kulutavahemman, setKulutaVahemman] = useState('')

// useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//         return unsubscribe
//     })
// }, [navigation])

useEffect(()=>{
    if (kulutavahemman === '' && route.params?.kulutus) {
      setKulutaVahemman(route.params.kulutus);
    }
  }, []);

  return (
    <>
    <Header />
    <View> 
      <Text>
      kuluta vahemman {kulutavahemman}
      </Text>
    </View>
    <Footer />
    </>
  )
}