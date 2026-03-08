import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import WalletScreen from "./screens/WalletScreen"
import WatchEarn from "./screens/WatchEarn"
import ShakeEarn from "./screens/ShakeEarn"

const Stack = createNativeStackNavigator()

export default function App(){

  return(

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="WatchEarn" component={WatchEarn} />
        <Stack.Screen name="ShakeEarn" component={ShakeEarn} />

      </Stack.Navigator>

    </NavigationContainer>

  )

}