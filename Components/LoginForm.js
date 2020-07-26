import React from "react";
import {StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native";

const LoginForm = () => {
    return (
        <View style={styles.container}>
           <TextInput 
           placeholder= "Username"
           returnKeyType="next"
           placeholderTextColor= "white"
           style={styles.input}/>

           <TextInput 
           placeholder= "Password"
           returnKeyType= "go"
           secureTextEntry
           placeholderTextColor= "white"
           style={styles.input}/>

           <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
           </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: "grey",
        marginBottom: 10,
        color: 'white',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: "black",
        paddingVertical: 15
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontWeight: '700'
    }
}) ;

export default LoginForm;