import {StyleSheet} from 'react-native';


export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      title: {
        color: '#23AE23',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
      },
      text: {
        color: '#23AE23',
        fontWeight: 'bold',
        fontSize: 15
      },
      image: {
        width: 150,
        height: 150,
      },
      recycleIcons: {
        width: 50,
        height: 50,
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
        width: "25%",
        height: "25%",
      },
      
})