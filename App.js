import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
    return ( 
        <NavigationContainer>  
            
        <View style={styles.container}>
        <StatusBar style="auto"></StatusBar>
        <Text>Lets build signal..</Text>
     
          </View>
         </NavigationContainer>

    );
}


const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});