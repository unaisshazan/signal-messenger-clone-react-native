import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, Input , Image } from 'react-native-elements';

import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'

export default function RegisterScreen({navigation}) {
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
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: { },
})
