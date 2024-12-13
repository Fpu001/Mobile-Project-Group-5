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
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
        width: 200, 
        borderWidth: 1
      },
      buttonText: {
        color: '#23AE23',
        fontSize: 16,
        fontWeight: 'bold',
      },
      radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
      },
      radioButtonSelected: {
        borderColor: '#007BFF',
      },
      radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#007BFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
      },
      radioInnerCircle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#007BFF',
      },
      radioText: {
        fontSize: 16,
      },
      itemText: {
        borderWidth: 1,
        borderColor: 'black',
        width: '50%'
      }
      
})