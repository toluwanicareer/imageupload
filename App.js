import 'react-native-gesture-handler';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import { Image, Button } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import MainStack from './components/index'
import React from 'react'
import { Provider } from 'react-redux';
import { ConfigureStore } from './store/configure';



export default function App() {

  const store = ConfigureStore();

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MainStack />


      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
});
