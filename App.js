import 'react-native-gesture-handler';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import React from 'react'
import Home from './components/home'



export default function App() {

  

  return (
    
      <SafeAreaView style={styles.container}>
        <Home />


      </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
});
