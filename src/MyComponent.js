import React, { useEffect } from 'react'
import { useWeb3Context } from 'web3-react'
 

export default function MyComponent () {
  const context = useWeb3Context()
 
  useEffect(() => {
    context.setFirstValidConnector(['MetaMask', 'Infura'])
  }, [])
 
  if (!context.active && !context.error) {
    // loading
    return (<div>Loading...</div>)
  } else if (context.error) {
    //error
    return (<div>Error...</div>)
  } else {
    // success
    return (<div>All Done!</div>)
  }
}