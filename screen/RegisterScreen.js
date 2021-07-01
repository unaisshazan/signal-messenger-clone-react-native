import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button,Text, Input , Image } from 'react-native-elements';
import auth from '../firebase';
import { KeyboardAvoidingView, StyleSheet,  View } from 'react-native'

export default function RegisterScreen({navigation}) {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ImageUrl, setImageUrl] = useState("");
    useLayoutEffect(() => {
        
        navigation.setOptions( {
            headerBackTitle:"Back to Login",
        });
    }, [navigation]);
    const register = {} ={
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(authUser =>{})
        .catch(error=> alert(error.message))
    };

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
           
            </View>
            <Button
             style = {styles.button}
              raised onPress={register} 
              title = "Register" />
            <View style={{height:100}}/> 
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: { 

flex:1,
alignItems:"center",
justifyContent:"center",
padding:10,
backgroundColor:"white",

    },
    button:{
width:200,
marginTop:10,
    },
    inputContainer:{
        width:300,
    }
})
