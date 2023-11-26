import React, {useState, useEffect} from 'react';
// import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Alert } from 'react-native';
// import {css} from 'assets/css/Css';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login, Home} from './views/Index';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{
          headerShown:false
        }}
      />
        
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: "Bem Vindo",
            headerStyle:{backgroundColor:'red'},
            headerTintColor: "#fff",
            headerTitleStyle:{alignSelf:'center'}
          }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}



