import React, { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet } from "react-native"

export default function LoginScreen({navigation}){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const login = async ()=>{

    const res = await fetch("http://localhost:5000/auth/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })

    const data = await res.json()

    if(data.token){
      navigation.navigate("Wallet")
    }else{
      alert("Login failed")
    }

  }

  return(

    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>

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

      <Button title="Login" onPress={login} />

      <Text
        style={styles.link}
        onPress={()=>navigation.navigate("Signup")}
      >
        Create Account
      </Text>

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
  },

  link:{
    marginTop:15,
    color:"blue"
  }

})