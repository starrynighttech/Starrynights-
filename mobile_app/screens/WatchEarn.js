import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"

export default function WatchEarn(){

  const watchAd = async ()=>{

    const res = await fetch(
      "http://localhost:5000/earn/watch-ad",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          userId:"1"
        })
      }
    )

    const data = await res.json()

    alert("You earned $" + data.reward)

  }

  return(

    <View style={styles.container}>

      <Text style={styles.title}>
        Watch Ads To Earn
      </Text>

      <Button
        title="Watch Ad"
        onPress={watchAd}
      />

    </View>

  )

}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },

  title:{
    fontSize:26,
    marginBottom:20
  }

})