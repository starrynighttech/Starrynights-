import { useEffect, useState } from "react"

export default function WalletBalance(){

  const [balance,setBalance] = useState(0)

  useEffect(()=>{
    fetch("http://localhost:5000/wallet/balance")
      .then(res=>res.json())
      .then(data=>setBalance(data.balance))
  },[])

  return(
    <div>
      <h2>Balance: ${balance}</h2>
    </div>
  )
}