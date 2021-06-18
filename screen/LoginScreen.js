import React, { useState } from 'react'
import { StyleSheet,   Text, View } from 'react-native';
import { Button, Input , Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] =  useState('')
  const signIn = ()=>{

  }
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image source = {{
                uri:"https://upload.wikimedia.org/wikipedia/commons/4/4f/Signal_Blue_Icon.png",
            }} 
            style={{width:200, height:200}}
            />
            <View style={styles.inputContainer}>
                
                <Input  
                placeholder="Email" 
                autoFocus type="email" 
                value={email}
                 onChangeText={(text)=> setEmail(text)}/> 

                <Input 
                 placeholder="Password" secureTextEntry autoFocus type="password"
                 value={password}
                 onChangeText={(text)=> setPassword(text)}
                 /> 
           

                </View>
                <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
                <Button containerStyle={styles.button} type="outline" title="Register"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding: 10 ,
        backgroundColor:"white",

    },

    inputContainer:{

    },
    button: { 

    },
})
