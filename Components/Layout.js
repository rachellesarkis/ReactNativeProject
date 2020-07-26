import React from "react";
import {StyleSheet, View, TextInput, TouchableOpacity, Text,ScrollView } from "react-native";

import Navbar from './Navbar'; 
import ImagesComponent from './ImagesComponent'

const Layout = () => {
    return (
        <View style={styles.container}>
         <Navbar />
         <ImagesComponent />
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
       display: "flex",
       flexDirection: "column",
   }
}) ;

export default Layout;