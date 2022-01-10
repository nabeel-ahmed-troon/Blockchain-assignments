// import React from 'react';

// function Card(props)
// {
//     return(
//     <>
//     <div className="cards">
//         <div className="card">
//             <img className="card_image" src={props.imgSrc} alt="MyPic"/>
//             <div className="card_info">
//                 <span className="card_category"></span>
//                 <h3 className="class_title"></h3>
//                 <a href={props.link}>
//                     <button>Watch Now</button>
//                 </a>
//             </div>
//         </div>

//     </div>
//     </>
//     );
// }

// export default Card;
//=======================================
// import React from "react";
// const {ethers}=require('ethers');

// let contract;
// const App=()=>{
//     const ethereum =window.ethereum;
    
    
   
//     let abi=[
//         {
//             "inputs": [],
//             "name": "balance",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "getBalance",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_balance",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "setBalance",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         }
//     ];
//     let conAddress="0xd6dfe26Ef82b4343AFE0343367CF3c5d50aFdadb";

//   //contract=new ethereum.eth.Contract(abi,conAddress);
    

//     const login=async()=>{
    
//         if(ethereum){
//             ethereum.request({ method: 'eth_requestAccounts' });
//            // console.log(ethereum.request({ method: 'eth_getBalance' }));
//            // console.log()
//             }
//         else{
//             console.log("Install Metamask");
//         }
//         contract = new ethers.Contract(conAddress,abi);
//         const setData= await contract.setBalance(10);
//         const getData= await contract.getBalance();
//         console.log(getData.toString());
    
//     }

       
        


//     return(
//         <>
//         <h1 className="mainHeading">Ethereum Dapp</h1>
//         <span>Login to Metamask to connect to Rinkeby<br></br></span>
//         <button className="loginBtn" onClick={login}>Login</button><br></br>
//         <input type="text"></input>
//         <button className="transferBtn">Transfer</button>
//         <button className="transferBtn">GetBalance</button>
//         </>
//     );
// }
// export default App;

//==========================================================
//==>IMPORTANT==>IMPORTANT==>IMPORTANT==>IMPORTANT==>IMPORTANT==>IMPORTANT==>
// import React,{useState} from 'react'
// import {ethers} from 'ethers'




// const App=()=>{

//     const [balance,balanceUpdate]=useState(null);
//     const [LoginButtonTxt,setLoginButtonText]=useState('MetaMask Login');
//     const [defaultAddress,setDefaultAddress]=useState(null);
    

//     const AppHandler=()=>{
        
//         if(window.ethereum&&window.ethereum.isMetaMask){
//             console.log("Metamask running");
//             window.ethereum.request({method: 'eth_requestAccounts'})
//             .then(result=>{
//                     addressSet(result[0]);
//                     setLoginButtonText('MetaMask Connected');
                    
//             })
//         }
//     }

//     const addressSet=(newAccount)=>
//     {
//         setDefaultAddress(newAccount);
//     }

//     const getBalance=(newAddress)=>{
//         window.ethereum.request({method: 'eth_getBalance', params: [newAddress,'latest']})
//         .then(balance=>{
//                 balanceUpdate(ethers.utils.formatEther(balance));
//                 console.log("running");
//         })
//         console.log("getbalance button running");
//     }

//     return(
//         <>

//         <h1>Ethereum Dapp <button onClick={AppHandler}>{LoginButtonTxt}</button></h1>

//         <br>
//         </br>
//         <input type="text" value="Enter to No of Token to transfer"/>
//         <br></br>
//         <input type='text' value="Address of Receiver"/><button>Transfer Token</button>
//         <br></br>
//         <h2>balance= {balance}</h2>
//         <button onClick={getBalance(defaultAddress)}>GetBalance</button>


//         </>
//     );
// }
// export default App;


//==>===========================================<=============

//==>DIGITAL CLOCK CODE BELOW
// import React, { useState } from 'react'

// const App=()=>
// {
//     let time= new Date().toLocaleTimeString();
//     const [currentTime,SetTime]=useState(time);

//     const [cColor,SetColor]=useState('purple');

//     const changeBg=()=>{
//         let color='green';
//         SetColor(color);
//     }

//     const backToNormal=()=>{
//         let color='purple';
//         SetColor(color);
//     }

//     const UpdateTime=()=>
//     {

//         time= new Date().toLocaleTimeString();
//         SetTime  (time);
//     };

//     setInterval(UpdateTime,100);

//     return(
//         <>
//         <div style={{backgroundColor:cColor}}>
//             <h1 onMouseEnter={changeBg} onMouseLeave={backToNormal}>{currentTime}</h1>
//             </div>
//         </>
//     );

// }

// export default App;

//=====================

// import React, { useState } from "react";
// import {ethers} from 'ethers'
// import Web3 from 'web3';



//  const App=()=>{

//     let conAddress="0x7e182c1433eABB36b7cF855cDF49ADa30EaEF7E0";
    
//     let abi=[
//         {
//             "inputs": [],
//             "name": "get",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_value",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "set",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "value",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         }
//     ];
    // const provider = new ethers.providers.Web3Provider(web3.currentProvider);
    // let provider = new ethers.providers.JsonRpcProvider()
    // let provider =ethers.getDefaultProvider();
    // const contract= new ethers.Contract(conAddress,abi,provider);


//     const web3 = new Web3(window.ethereum);
//     const ethObj = new web3.eth.Contract(abi, conAddress);
//     console.log(ethObj.methods,"my Methods");

//     const [getNumber,setGetNumber]=useState('');
//     const [number,setNumber]=useState(0);


//     let connectMetamask=()=>{
//         if(window.ethereum)
//         {
//             window.ethereum.request({method: 'eth_requestAccounts'});
//             console.log("Metamask Connected");
//         }
//     }

//     const getBalance=async(e)=>{
//         e.preventDefault();

//         const result= await ethObj.methods.get().call();
//         console.log("Test con obj : ",result);
//         setGetNumber(result);
//         console.log(result);
//         console.log("contract",ethObj);

        
//     }

//     const setBalance=async(e)=>{
//         e.preventDefault();
//         const accounts=await window.ethereum.enable();
//         const account=accounts[0];
//         const gas= await ethObj.methods.set(number).estimateGas();
        
//         const result= await ethObj.methods.set(number).send({from: account,gas})
//         //setNumber(result);
//         console.log(result);
//     }

//     return(

//         <>
//         <h1>Smart Contract Integration</h1>
//         <button onClick={connectMetamask}>Connect Metamask</button>

//         <form onSubmit={setBalance}>

//             <label>
//                 Set Number : <input type="text" value={number} onChange={e=>setNumber(e.target.value)}></input>

//             </label>
//             <input type="submit" value="Set Number"></input>
//             </form>
        

//         <button onClick={getBalance} type="button">Get Number</button>{getNumber}
//         </>

//     );



//  }
//  export default App;



 //==============erc20 smart contrat with front end;

//  import React,{ useState} from 'react'
//  import Web3 from 'web3'


 
 

//  const App=()=>{

//     const [userAccount,setUserAccount]=useState("");
//     const [amount,setAmount]=useState(0);
//     const [metamaskStatus,setMetamaskStatus]=useState("Connect Metamask");
//     //below to check  total token
//     const [balance,setBalance]=useState(0);

//     const conAddress="0x83cC5ae4996909726f090E64DE5105013aF55050";
//     const abi=[
//         {
//             "inputs": [],
//             "stateMutability": "nonpayable",
//             "type": "constructor"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//                 {
//                     "indexed": true,
//                     "internalType": "address",
//                     "name": "owner",
//                     "type": "address"
//                 },
//                 {
//                     "indexed": true,
//                     "internalType": "address",
//                     "name": "spender",
//                     "type": "address"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "uint256",
//                     "name": "value",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "Approval",
//             "type": "event"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//                 {
//                     "indexed": true,
//                     "internalType": "address",
//                     "name": "previousOwner",
//                     "type": "address"
//                 },
//                 {
//                     "indexed": true,
//                     "internalType": "address",
//                     "name": "newOwner",
//                     "type": "address"
//                 }
//             ],
//             "name": "OwnershipTransferred",
//             "type": "event"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//                 {
//                     "indexed": true,
//                     "internalType": "address",
//                     "name": "from",
//                     "type": "address"
//                 },
//                 {
//                     "indexed": true,
//                     "internalType": "address",
//                     "name": "to",
//                     "type": "address"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "uint256",
//                     "name": "value",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "Transfer",
//             "type": "event"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "owner",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "address",
//                     "name": "spender",
//                     "type": "address"
//                 }
//             ],
//             "name": "allowance",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "spender",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "amount",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "approve",
//             "outputs": [
//                 {
//                     "internalType": "bool",
//                     "name": "",
//                     "type": "bool"
//                 }
//             ],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "account",
//                     "type": "address"
//                 }
//             ],
//             "name": "balanceOf",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "decimals",
//             "outputs": [
//                 {
//                     "internalType": "uint8",
//                     "name": "",
//                     "type": "uint8"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "spender",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "subtractedValue",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "decreaseAllowance",
//             "outputs": [
//                 {
//                     "internalType": "bool",
//                     "name": "",
//                     "type": "bool"
//                 }
//             ],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "spender",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "addedValue",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "increaseAllowance",
//             "outputs": [
//                 {
//                     "internalType": "bool",
//                     "name": "",
//                     "type": "bool"
//                 }
//             ],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "to",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "amount",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "mint",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "name",
//             "outputs": [
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "owner",
//             "outputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "renounceOwnership",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "symbol",
//             "outputs": [
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "totalSupply",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "recipient",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "amount",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "transfer",
//             "outputs": [
//                 {
//                     "internalType": "bool",
//                     "name": "",
//                     "type": "bool"
//                 }
//             ],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "sender",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "address",
//                     "name": "recipient",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "amount",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "transferFrom",
//             "outputs": [
//                 {
//                     "internalType": "bool",
//                     "name": "",
//                     "type": "bool"
//                 }
//             ],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "newOwner",
//                     "type": "address"
//                 }
//             ],
//             "name": "transferOwnership",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         }
//     ];
//     const web3= new Web3(window.ethereum);
    

//     const contract = new web3.eth.Contract(abi,conAddress);
//     console.log(contract.methods);

//     let connectMetamask=()=>{
//                 if(window.ethereum)
//                 {
//                     window.ethereum.request({method: 'eth_requestAccounts'});
//                     console.log("Metamask Connected");
//                     setMetamaskStatus("Connected");
                    
//                 }
                
//             }

//     const sendToken=async()=>{
        
        
//         // const accounts= await window.ethereum.enable();
//         const accounts = await  window.ethereum.request({method: 'eth_accounts'});
//         const account= accounts[0];
//         console.log("acoount address",account);
//         const gas= await contract.methods.transfer(userAccount,amount).estimateGas();
//         const result= await contract.methods.transfer(userAccount,amount).sendTransaction({from:account,gas,amount});

//         console.log(result);
//         //await contract.methods.transfer(userAccount,amount);
//         //await transaction.wait();

//         console.log(`${amount} has been succesfully transfer to account : ${userAccount}`);
        
    

// }
//     const balanceOf=async()=>{
//         const result= await contract.methods.balanceOf(balance).call();
//         setBalance(result);

//     }

//     return(

//         <>
//         <h1>My Token</h1>
//         <br></br>
//         <button onClick={connectMetamask}>{metamaskStatus}</button>
//         <br></br>
//         <input type="text" onChange={e=>setUserAccount(e.target.value)} placeholder="Enter receiver address"/>
//         <input type="text" onChange={e=>setAmount(e.target.value)} placeholder="Enter Amount of Token"/>
//         <button onClick={sendToken}>Transfer Token</button>
//         <br></br>
//         <input type="text" onChange={e=>setBalance(e.target.value)} placeholder="Enter Address"/>
//         <button onClick={balanceOf}>Balance</button>{balance}


//         </>
//     );

//  }

//  export default App;

//===============================================
//lottery system app below

// import React from "react";
// import Web3 from 'web3'


// const App=()=>{

//     return(
//         <h1>nabeel</h1>
//     );




// }

// export default App;


import { parseEther } from 'ethers/lib/utils';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import React, { useState } from 'react'
import Web3 from 'web3';
import { ButtonGroup } from '@mui/material';

const App=()=>{

// let selectedAccount;
const [selectedAccount,setSelectedAccount]=useState("");
let provider=window.ethereum;
let connectMetamask=()=>{

  

    if(provider!=="undefined")
    {
        provider.request({method : 'eth_requestAccounts',})
                  .then((accounts)=>{
					  const account=accounts[0];
                    setSelectedAccount(account);
                    console.log(`slected Account is ${account}`);
					console.log('selected Account is : ',account);

                  })
                  .catch((err) => {
                    console.log(err);
                    return;
                  });

                  provider.on('accountsChanged', function(accounts){
                      setSelectedAccount(accounts[0]);
                      console.log(`selected account changed to ${accounts[0]}`);

                  })

                

    }
  }

  const abi =[
	{
		"inputs": [],
		"name": "buyTicket",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimFunds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "randomness",
				"type": "uint256"
			}
		],
		"name": "rawFulfillRandomness",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "selectWinner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_vrfCoordinator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_link",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_keyhash",
				"type": "bytes32"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			}
		],
		"name": "RequestedRandomness",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "startLottery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startNewLottery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stopLottery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "balanceOfAccount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "buyerTicketCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentLotteryWinner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lotteryId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "randomness",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "remainingTickets",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "status",
		"outputs": [
			{
				"internalType": "enum Lottery.lotteryStatus",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ticketBuyer",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ticketOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

    const contractAddress='0xc6953534a854a0CadD5DbCEA9FbD4Da27980AcEE';

    const [remainingTickets,setRemainingTickets]=useState(100);
	const [amount,setAmount]=useState(0);
	const [disable, setDisable] = useState(false);
	const [walletStatus,setWalletStatus]=useState('Connect');
	//for balance check of account
	const [balance,setBalance]=useState(100);
	const [accountAddress,setAccountAddress]=useState('');

	//for check buyer ticket count
	const [buyerTicketAddress,setBuyerTicketAddress]= useState('');
	const [buyerTicketCount,setBuyerTicketCount]= useState(null);
	
	//Lottery winner
	const [winner,setWinner]=useState("");

    const web3 = new Web3(provider);
    
    const contract= new web3.eth.Contract(abi,contractAddress);
	console.log("here is account address",selectedAccount);
	console.log(contract.methods)


    const buyTicket= async()=>{

		 const accounts = await  window.ethereum.request({method: 'eth_accounts'});
          const account= accounts[0];
			 setSelectedAccount(account);
		

        // const esGas= await contract.methods.buyTicket().estimateGas();
		var fee  = "10000000000000000"
        await contract.methods.buyTicket().send({from:accounts[0],value: web3.utils.fromWei(fee, 'wei')
		})
							


					.then((receipt)=>{
							console.log("buy tkts: ",selectedAccount, " amt: ",amount,);
						});
        //return buy;
		
                    
    }

	//To check the remianing lottery tickets

    const remainTickets=async()=>{
        const rem= await contract.methods.remainingTickets().call().then((rem)=>{
            setRemainingTickets(rem);
			console.log(rem);

        });
    }
	//======================================================

	///below function is to check lottery collection balance
	const balanceOf=async()=>{
		
		const balance=	await contract.methods.balanceOfAccount().call().then((bal)=>{
				setBalance(bal)
				
				// console.log("balance of this account is :",balance);
		}).catch((err) => {
			console.log(err);
			return;
		  });
	}

	setInterval(balanceOf,300);
	setInterval(remainTickets,300);
	
	//=================================================================
	//lottery start stop funciton below
	const startLottery=async()=>
	{
		const accounts = await  window.ethereum.request({method: 'eth_accounts'});
		await contract.methods.startLottery().send({from : accounts[0] }).then(()=>{
			console.log("Lottery has been started succesfully");
		})
	}

	const stopLottery=async()=>{
		const accounts = await  window.ethereum.request({method: 'eth_accounts'});
		await contract.methods.stopLottery().send({from : accounts[0] }).then(()=>{
			console.log("Lottery has been stopped succesfully");
		})
	}
    
	const startNewLottery=async()=>{
		const accounts = await  window.ethereum.request({method: 'eth_accounts'});
		await contract.methods.startNewLottery().send({from : accounts[0] })
		.then(()=>{
			console.log("Lottery has been stopped succesfully");
		});
	}
	//==================================

	const selectWinner=async()=>{
		const accounts = await  window.ethereum.request({method: 'eth_accounts'});
		await contract.methods.selectWinner().send({from : accounts[0]})
		.then(()=>{
			console.log("succesfully winner selected");
			<h3>Succesfuly selected winner</h3>
			//lotteryWinner();
		})
		

	}

	const ownerTicketCount=async()=>{
		//const accounts = await  window.ethereum.request({method: 'eth_accounts'});
		await contract.methods.buyerTicketCount(buyerTicketAddress).call().then((count)=>{
			console.log(buyerTicketCount,": has ",count," :Tickets");
			setBuyerTicketCount(count);
		})

	}

	const claimReward=async()=>{
		const accounts = await  window.ethereum.request({method: 'eth_accounts'});
		await contract.methods.claimReward().send({from : accounts[0]})
		.then(()=>{
			console.log("Reward claimed by the winner");
			<h3>Succesfully Rewarded</h3>
		});
	}

	const claimFund=async()=>{
		const accounts = await  window.ethereum.request({method: 'eth_accounts'});
		await contract.methods.claimFunds().send({from : accounts[0]})
		.then(()=>{
			console.log("Fund claimed by the manager");
			<h3>Succesfully Funded</h3>
		});
	}

	const lotteryWinner=async()=>{
		await contract.methods.currentLotteryWinner().call()
		.then((addr)=>{
				console.log("Last Lottery Winner is : ",addr);
				setWinner(addr);
				<h3>Last Lottery Winner is : {winner}</h3>
		});
	}
	setInterval(lotteryWinner,500);
	

    return(
      <>
	  
			<div id='mid'>
				
				<div id='mid1'>
					<h1 id='midH1'>Lottery System Smart Contract</h1>
					<h3 id='connectButton'><button onClick={()=>{
						connectMetamask();
						setDisable(true);
						setWalletStatus('Connected')
						}} className='button' disabled={disable}>{walletStatus}</button></h3>
				</div>
				<div  id='mid2'>
						<div id='left'>
							<TableContainer component={Paper}>
								<Table>
									<TableHead>
										<TableRow>
											<TableCell>Lottery</TableCell>
											<TableCell>Amount</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell>Lottery Address: </TableCell><TableCell>{contractAddress}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Lottery Ticket Price : </TableCell><TableCell>10000000Gwei</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Last Lottery Winner : </TableCell><TableCell>{winner}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Lottery Ticket Remaining : </TableCell><TableCell>{remainingTickets}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Lottery Balance : </TableCell><TableCell>{balance}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Check the how much tickets you have <input placeholder='Enter the address' onChange={e=>setBuyerTicketAddress(e.target.value)}></input></TableCell><TableCell><Button size='small' variant='contained' onClick={()=>ownerTicketCount()}>Check</Button><br></br>Addr:<b>{buyerTicketAddress}</b> <br></br>Tickets :<b>{buyerTicketCount}</b></TableCell>
										</TableRow>
										

									</TableBody>
								</Table>
									
								
							</TableContainer>

							<TableContainer>
								<TableBody>
								<TableRow>
											<ButtonGroup size='small'>
											 <TableCell><Button variant='contained'  onClick={e=>startLottery()} className='button'>Start Lottery</Button></TableCell>
											 <TableCell><Button variant='contained' onClick={e=>stopLottery()} className='button'>Stop Lottery</Button></TableCell>
											 <TableCell><Button variant='contained' onClick={()=>buyTicket()} className='button'>Buy Ticket</Button></TableCell>
											 <TableCell><Button variant='contained'  onClick={e=>startLottery()} className='button'>Start Lottery</Button></TableCell>
											 </ButtonGroup>
								</TableRow>
								<TableRow>
											<ButtonGroup size='small'>
											 <TableCell><Button variant='contained' onClick={e=>startNewLottery()} className='button'>Start New Lottery</Button></TableCell>
											 <TableCell><Button variant='contained' onClick={e=>selectWinner()} className='button'>Select Winner</Button></TableCell>
											 <TableCell><Button variant='contained' onClick={e=>claimReward()} className='button'>Claim Reward</Button></TableCell>
											 <TableCell><Button variant='contained' onClick={e=>claimFund()} className='button'>Claim Funds</Button></TableCell>
											 </ButtonGroup>
								</TableRow>

								</TableBody>
							</TableContainer>
							
						</div>

						<div id='right' className='btn-group'>
							<Stack spacing={3} direction='row' justifyContent="center"
  								alignItems="center">
								<ButtonGroup size='small'>
							
							
							
							
							
							
							
							</ButtonGroup>
							</Stack>
						</div>
				</div>
			</div>
	  
     
		 
		
      </>
    );
}









export default App;

