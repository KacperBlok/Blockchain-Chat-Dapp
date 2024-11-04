import {ethers} from "ethers";
import Web3Modal from "web3modal";

import { ChatAppAddress, ChatAppABI } from "../Context/constants";

export const CheckIfWalletIsConnected = async () => {
    try {
    if (!window.ethereum) return alert("Please install Metamask");
    const accounts = await window.ethereum.request({ 
    method: "eth_accounts" 
    });
    const firstAccount = accounts[0];
    return firstAccount;

    }catch (error) {
    console.log(error);
    }
};

export const connectWallet = async() => {
    try{
        if (!window.ethereum) return alert("Please install Metamask");
        const accounts = await window.ethereum.request({ 
        method: "eth_requestAccounts" 
        });
        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log(error);
    }
};

const fetchContract = (signerOrProvider) => 
    new ethers.Contract(ChatAppAddress, ChatAppABI, signerOrProvider);

export const conecctingWithContract= async () => {
    try{
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);

        return contract;
    } catch (error) {
        console.log(error);
    }
};

export const converTime = (time) =>{
    const newTime = new Date(time.toNumber());

    const realTime = 
    newTime.hetHours() + 
    "/" + 
    newTime.getMinutes() +
    "/" + 
    newTime.getSeconds() +
    "/" +
    newTime.getDate()+
    "/" +
    (newTime.getMonth() + 1) +
    "/" +
    newTime.getFullYear();

    return realTime;
};