import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {Header} from "react-native-elements" 
import { RFValue } from "react-native-responsive-fontsize";
import * as Google from "expo-google-app-auth";
import db from "../config"
import firebase from "firebase";

export default class CreateRecipe extends React.Component{
    render(){
        return(
            <View>
                <Text>CreateRecipe</Text>
            </View>
        )
    }

    
}