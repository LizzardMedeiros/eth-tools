import React from 'react';
import Web3Provider, { Connectors } from 'web3-react';
import MyComponent from './MyComponent';

import './App.css';

function App() {
  const { InjectedConnector } = Connectors;
  //add infura connector
  const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] });

  const connectors = { MetaMask };

  return (
      <Web3Provider
        connectors={connectors}
        libraryName={'ethers.js'}
      >
        <MyComponent/>
      </Web3Provider>
  );
}

export default App;
