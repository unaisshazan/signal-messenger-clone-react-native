import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input , Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen() {
    return (
        <View>
            <StatusBar style="light" />
            <Image source = {{
                uri:"https://upload.wikimedia.org/wikipedia/commons/4/4f/Signal_Blue_Icon.png",
            }} 
            style={{width:200, height:200}}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
