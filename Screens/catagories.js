import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {Header} from "react-native-elements" 
import { RFValue } from "react-native-responsive-fontsize";
import * as Google from "expo-google-app-auth";
import db from "../config"
import firebase from "firebase";
import IndianRecipe from "./IndianRecipe";
import AmericanRecipe from "./AmericanRecipe";

export default class Catagories extends React.Component{
    render(){
        return(
            <View>
                <Header
                centerComponent={{ text: 'Catogories', style: { color: '#fff' } }}
                ></Header>
                <TouchableOpacity 
                style={styles .button}
                onPress={()=>this.props.navigation.navigate(IndianRecipe)}
                >
                    <Text style={styles.buttonText}>Indian Recipe's</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles .button}
                onPress={()=>this.props.navigation.navigate(AmericanRecipe)}
                >
                    <Text style={styles.buttonText}>American Recipe's</Text>
                </TouchableOpacity>
            </View>
        )
    }

    
}

const styles=StyleSheet.create({
    button:{
        width:RFValue(200),
        height:RFValue(40),
        backgroundColor:"yellow",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:20,
        borderRadius:20
    },
    buttonText:{
        fontSize:30,
        fontWeight:"bold"
    }
})