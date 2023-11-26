import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    darkbg:{
        backgroundColor: "#B1A2B2"
    },

    login_msg:(text="none")=>({
        fontWeight:"bold",
        fontSize: 22,
        color: "red",
        marginTop: 10,
        marginBottom: 15,
        display: text
    }),
    
    login_form:{
        width: "80%",
    },
    login_input:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15,
        borderRadius: 5

    },

    login_button:{
        padding: 12,
        backgroundColor:"orange",
        alignSelf:"center",
        borderRadius:5,
        marginTop: 10
    },

    login_text:{
        fontWeight:"bold",
        fontSize: 22,
        color: "#333"

    },
    login_titulo:{
        fontSize: 40,
        color: "#1D2130",
        alignSelf:"center",
        marginBottom: 25
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // ou 'stretch' se desejar esticar a imagem para cobrir toda a tela
        justifyContent: 'center',
      },

});

export {css};