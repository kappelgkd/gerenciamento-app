import React, { useState, useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { css } from '../assets/css/Css';
import { KeyboardAvoidingView, Platform, ImageBackground, TouchableWithoutFeedback, TextInput, Text, TouchableOpacity, Image, View, Button, Alert, Keyboard, } from 'react-native';
import axios from 'axios';

export default function Login() {

    const [usuario, setUsuario] = useState(null);
    const [senha, setSenha] = useState(null);


    const [display, setDisplay] = useState("");
    const [loginSucesso, setLoginSucesso] = useState("");

    async function login() {

        try {
            const url = 'http://192.168.0.2:2000/autenticar';
            
            // console.log(usuario);
            // console.log(senha);
            
            const resposta = await axios.post(url, {
              usuario: usuario,
              senha: senha,
            });
        
            const dados = resposta.data;
            // Trate os dados conforme necessário
            console.log('Resposta da API:', dados);
        
            return dados;
          } catch (erro) {
            console.error('Erro ao realizar login:', erro);
            throw erro;
          }
    }

    return (
        <ImageBackground
            // source={require('../assets/images/teste.png')}
            style={css.backgroundImage}>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[css.container, css.darkbg]}>

                {/* view para caso o login não seja bem sucedido */}
                <View >
                    <Text style={css.login_msg()} >Usuário ou senha inválidos</Text>
                </View>

                <View style={css.login_form}>

                    <Text style={css.login_titulo}>Login</Text>

                    <TextInput

                        style={css.login_input}
                        placeholder="Usuario"
                        onChangeText={(text) => setUsuario(text)}>

                    </TextInput>

                    <TextInput

                        style={css.login_input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        onChangeText={(text) => setSenha(text)}>

                    </TextInput>

                    <TouchableOpacity style={css.login_button} onPress={() => setDisplay('flex')}>
                        <Text style={css.login_text} onPress={login}>Entrar</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>

        </ImageBackground>
    );

}