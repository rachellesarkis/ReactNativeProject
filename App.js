import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Login from './Components/Login';
import Layout from './Components/Layout';


const App = () => {
  return (
    <View style={{backgroundColor: "#D3D3D3"}}>
      <Layout />
    </View>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
