import { useState, useEffect,} from 'react'
import { Text, View } from 'react-native'

export default kierratysohjeet = ({navigation, route}) => {

    const [kierratysohjeet, setKierratysohjeet] = useState('')

    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //       return unsubscribe
    //     })
    //   }, [navigation])

    useEffect(()=>{
        if (kierratysohjeet === '' && route.params?.kierratys) {
          setKierratysohjeet(route.params.kierratys);
        }
      }, []);

    return (
        <>
        <Header />
        <View> 
          <Text style={styles.playerName}>
          
          kierratysohjeet: {kierratysohjeet}
          </Text>
        </View>
        <Footer />
        </>
      )
}