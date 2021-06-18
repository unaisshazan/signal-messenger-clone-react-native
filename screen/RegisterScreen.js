import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'

export default function RegisterScreen({navigation}) {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <StatusBar style="light" />
            <Text h3 style={{ marginBottom:50}}>
                Create A Signal Account
            </Text>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: { },
})