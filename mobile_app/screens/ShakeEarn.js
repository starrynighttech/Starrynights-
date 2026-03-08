import React, { useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Accelerometer } from "expo-sensors"

export default function ShakeEarn(){

  useEffect(()=>{

    const subscription = Accelerometer.addListener(data => {

      const total = Math.abs(data.x + data.y + data.z)

      if(total > 2.5){
        reward()
      }

    })

    return ()=> subscription.remove()

  },[])

  const reward = async ()=>{

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

    alert("Shake reward $" + data.reward)

  }

  return(

    <View style={styles.container}>

      <Text style={styles.title}>
        Shake Phone To Earn
      </Text>

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
    fontSize:26
  }

})