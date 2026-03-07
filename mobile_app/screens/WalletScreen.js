import { useEffect, useState } from "react"
import { View, Text, StyleSheet, ActivityIndicator } from "react-native"

export default function WalletScreen() {

  const [balance, setBalance] = useState(null)

  const fetchBalance = async () => {
    try {
      const res = await fetch("http://localhost:5000/wallet/balance")
      const data = await res.json()

      setBalance(data.balance)

    } catch (error) {
      console.log("Error fetching wallet:", error)
    }
  }

  useEffect(() => {
    fetchBalance()
  }, [])

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Your Wallet</Text>

      {balance === null ? (
        <ActivityIndicator size="large" color="#00ffcc" />
      ) : (
        <Text style={styles.balance}>${balance}</Text>
      )}

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },

  title: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 20
  },

  balance: {
    fontSize: 40,
    color: "#00ffcc",
    fontWeight: "bold"
  }

})