import {SafeAreaView, StyleSheet, Text, TextInput} from "react-native";
import{Icon} from 'react-native-elements'
import React from "react";


function adminLogin() {
    const [number, onChangeNumber] =React.useState(null);
    return (
        <SafeAreaView style={StyleSheet.inputView}>
           <Text>Login as an Admin here:</Text>
           <Icon style={{color:'#333',
            name:'user',
            type:'font-awesome',
            size:20}} /> 
           <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            placeholder="Email"
            />  
            <Text>Enter your password:</Text>
             <TextInput
            style={styles.input}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Password"
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
            // Making the Text Input Text Hidden.
            secureTextEntry={true}
            />
        </SafeAreaView>
    );
  }

  const styles= StyleSheet.create({
    inputView:{
        width:'100%',
        height: 44,
        backgroundColor: '#f1f3f6'
    },
    input: {
          height: 40,
          margin: 22,
          borderWidth: 1,
          padding: 10,
        }
    });
export default adminLogin;