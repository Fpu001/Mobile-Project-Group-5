import {StyleSheet} from 'react-native';


export default StyleSheet.create({

    homeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
      },
      container: {
        flex: 1,
        padding: 20
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
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
      },
      picker: {
        height: 50,
        width: '100%',
        marginBottom: 20,
      },
      subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
      },
      listItem: {
        fontSize: 16,
        paddingVertical: 5,
      },
      savingsText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
      },
      goalStatus: {
        fontSize: 18,
        marginTop: 20,
        textAlign: 'center',
        color: 'green',
      },
      descriptionContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
      },
      descriptionText: {
        fontSize: 14,
        color: '#333',
        padding: 40, 
      },
      saveButtonText:{
        color: '#23AE23',
        fontSize: 16,
        fontWeight: 'bold',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Läpinäkyvä tausta
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        height: '60%',
        alignItems: 'center',
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      modalText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
      },
      closeButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
      },
      closeButtonText: {
        color: 'white',
        fontSize: 16,
      },
      recycleText: {
        color: '#23AE23',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 20
      },
      iconWithTextContainer: {
        flexDirection: 'row', // Asettaa tekstin ja kuvan vierekkäin
        alignItems: 'center', // Keskittää elementit pystysuunnassa
        justifyContent: 'flex-start', // Asettaa elementit vasempaan laitaan
      },
      tipPagecontainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
      },
      scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
      },
      TipTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
      },
      Tiptext: {
        fontSize: 16,
        marginBottom: 15,
        color: '#555',
        lineHeight: 24,
      },
      tipContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Androidille varjoefekti
      },
      TipIcon: {
        marginRight: 15,
        color: '#3c981e',
      },
      Tipbutton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
        width: 200, 
        borderWidth: 1
      },
      TipbuttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      TipButtonContainer:{
        alignItems: 'center',
         justifyContent:'center',
          flex: 1 
      },
      introText: {
        flexDirection: 'row',
        fontSize: 16,
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Androidille varjoefekti
      },
})