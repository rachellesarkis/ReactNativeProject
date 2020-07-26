import React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={require("../Images/logo.png")}/>
                <Text style={styles.title}>This is a login form</Text>
            </View>
            <View style={styles.formContainer}>
                <LoginForm />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    logo: {
        width: 100,
        height: 100
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    title: {
        color: "white",
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    }
}) ;

export default Login;