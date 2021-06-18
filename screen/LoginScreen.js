import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input , Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] =  useState('')
    return (
        <View>
            <StatusBar style="light" />
            <Image source = {{
                uri:"https://upload.wikimedia.org/wikipedia/commons/4/4f/Signal_Blue_Icon.png",
            }} 
            style={{width:200, height:200}}
            />
            <View style={styles.inputContainer}>
                
                <Input  placeholder="Email" autoFocus type="email" value={email} onChangeText={(text)=> setEmail(text)}/> 
                <Input  placeholder="Password" secureTextEntry autoFocus type="password"/> 
                </View>
        </View>
    )
}

const styles = StyleSheet.create({

    inputContainer:{

    },
})
