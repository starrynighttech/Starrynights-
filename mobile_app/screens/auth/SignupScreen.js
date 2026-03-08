import React, { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet } from "react-native"

export default function SignupScreen({navigation}){

  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const signup = async ()=>{

    await fetch("http://localhost:5000/auth/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username,
        email,
        password
      })
    })

    alert("Account created")

    navigation.navigate("Login")

  }

  return(

    <View style={styles.container}>

      <Text style={styles.title}>Signup</Text>

      <TextInput
        placeholder="Username"
        style={styles.input}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <Button title="Create Account" onPress={signup} />

    </View>

  )

}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    padding:20
  },

  title:{
    fontSize:30,
    marginBottom:20
  },

  input:{
    borderWidth:1,
    padding:10,
    marginBottom:15
  }

})