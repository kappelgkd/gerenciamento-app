import React, { useState, useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home(props) {
    console.log(props);
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Login"
                onPress={() => props.navigation.navigate('Login',{
                    id: 30 // passando parametros para outra tela
                })}
            />
        </View>
    );
}