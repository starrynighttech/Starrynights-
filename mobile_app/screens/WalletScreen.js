import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"

export default function WalletScreen() {

  const [balance,setBalance] = useState(0)

  useEffect(()=>{
    fetch("http://localhost:5000/wallet/balance?userId=1")
      .then(res => res.json())
      .then(data => {
        setBalance(data.balance)
      })
  },[])

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Wallet</Text>

      <Text style={styles.balance}>
        ${balance}
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
    fontSize:30,
    fontWeight:"bold"
  },

  balance:{
    fontSize:40,
    marginTop:20
  }

})