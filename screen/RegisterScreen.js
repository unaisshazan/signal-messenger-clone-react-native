import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button,Text, Input , Image } from 'react-native-elements';

import { KeyboardAvoidingView, StyleSheet,  View } from 'react-native'

export default function RegisterScreen({navigation}) {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ImageUrl, setImageUrl] = useState("");
    const register = {} ={};

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <StatusBar style="light" />
            <Text h3 style={{ marginBottom:50}}>
                Create A Signal Account
            </Text>
            <View style = {styles.inputContainer}>

              <Input
               placeholder = "Full Name" 
                autofocus type="text" 
                value={name}
              onChangeText = {(text) => setName(text)}
              />
              
              <Input
               placeholder = "Email" 
                autofocus type="email" 
                value={email}
              onChangeText = {(text) => setEmail(text)}
              />
              
              <Input
               placeholder = "Password" 
                autofocus type="text" 
                value={password}
              onChangeText = {(text)=> setPassword(text)}
              />
              
              <Input
               placeholder = "Profile Pic Url (Optional)" 
                autofocus type="text" 
                value={ImageUrl}
              onChangeText = {(text) => setImageUrl(text)}
               onSubmitEditing={register}
              />
             <Button
             style = {styles.button}
              raised onPress={register} 
              title = "Register" />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: { 



    },
    button:{

    }
})
