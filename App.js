import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Modal } from 'react-native';

export default function App() {
  const [show, setShow] = useState(false)
  const [showText, setShowText] = useState(true)

  const clickText = () => {
    setShow(true)
    setShowText(false)
  }

  return (
    <View style={styles.container}>
      {showText && (
      <Pressable onPress={clickText}>
          <Text>Show modal message</Text>
      </Pressable>
      )}
      <Modal
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setShow(!show);
          setShowText(true)
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal...</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>{ 
                setShow(!show); 
                setShowText(true)
              }}>
              <Text></Text>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 200,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
