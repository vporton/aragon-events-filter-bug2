import React from 'react'
import { useAragonApi } from '@aragon/api-react'
import {
  Box,
  Button,
  GU,
  Header,
  IconMinus,
  IconPlus,
  Main,
  SyncIndicator,
  Tabs,
  Text,
  textStyle,
} from '@aragon/ui'
import styled from 'styled-components'

// let appJSON = null
// 
// function fetchRewardCourtsJSON() {
//   if(appJSON !== null)
//     return appJSON;
//   let f = fetch("public/CouterApp.json")
//   appJSON = f.then((response) => {
//     return response.json()
//   })
//   .then((json) => {
//     return json.abi
//   })
//   return appJSON
// }

const abi = [
    {
      "constant": true,
      "inputs": [],
      "name": "INCREMENT_ROLE",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "hasInitialized",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_script",
          "type": "bytes"
        }
      ],
      "name": "getEVMScriptExecutor",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getRecoveryVault",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "value",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        }
      ],
      "name": "allowRecoverability",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "appId",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getInitializationBlock",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "transferToVault",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_sender",
          "type": "address"
        },
        {
          "name": "_role",
          "type": "bytes32"
        },
        {
          "name": "_params",
          "type": "uint256[]"
        }
      ],
      "name": "canPerform",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getEVMScriptRegistry",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "kernel",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isPetrified",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "DECREMENT_ROLE",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "entity",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "step",
          "type": "uint256"
        }
      ],
      "name": "Increment",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "entity",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "step",
          "type": "uint256"
        }
      ],
      "name": "Decrement",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "executor",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "script",
          "type": "bytes"
        },
        {
          "indexed": false,
          "name": "input",
          "type": "bytes"
        },
        {
          "indexed": false,
          "name": "returnData",
          "type": "bytes"
        }
      ],
      "name": "ScriptResult",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "vault",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "RecoverToVault",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "initialize",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "step",
          "type": "uint256"
        }
      ],
      "name": "increment",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "step",
          "type": "uint256"
        }
      ],
      "name": "decrement",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

function App() {
  const { api, appState, path, requestPath } = useAragonApi()
  const { count, isSyncing } = appState

  function test() {
    const address = document.getElementById('address').value
    console.log("Test", address)
    
    let contract = api.external(address, abi)

    // Should find zero events because this address is with zero probability meet in events
    contract.pastEvents({fromBlock: 0, filter: {v: '0xd6BE8aF190c53D7ca528348a85804BD284Af297C'}})
      .subscribe(events => {
        let textNode = document.createTextNode(events.length);
        document.getElementById('area').appendChild(textNode);
      })
  }

  return (
    <Main>
      {isSyncing && <SyncIndicator />}
      <p>Contract address: <input type="text" id="address"/>
        <input type="button" value="Test" onClick={test}/></p>
      <div id="area"></div>
    </Main>
  )
}

const Buttons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 40px;
  margin-top: 20px;
`

export default App
