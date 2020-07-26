import React from "react";
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from "react-native";

const Navbar = () => {
    return (
        <View style={styles.container}>
         <Image 
         style={{ height: 30, width: 30, marginTop: 10, marginLeft: "3%"}}
         source={require('../Images/logo.png')}/>
         <Text style={{color: 'white', marginLeft: '24%', 
         padding: 12, fontSize: 20, fontWeight: "bold",
         
         }}>List of food</Text>
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
    backgroundColor: "purple",
    display: "flex",
    flexDirection: 'row'
   }
}) ;

export default Navbar;