import {StyleSheet} from 'react-native';


export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      title: {
        color: 'green',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
      },
      image: {
        width: 150,
        height: 150,
      },
      grid: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      gridItem: {
        width: '48%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginBottom: 16,
      },
      gridText: {
        color: 'green',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
      },
      fullWidth: {
        width: '100%',
      },

      bmburgerbars: {
        background: "black"
      },
      
      bmburgerbarshover: {
        background: "red"
      },
      button: {
        width: "50%"
      }
})