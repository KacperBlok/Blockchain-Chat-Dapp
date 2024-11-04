import React, {useState, useEffect, Children} from 'react'
import { useRouter } from 'next/router'

//internal import
import { 
    CheckIfWalletIsConnected, 
    connectWallet, 
    conecctingWithContract 
} from '../Utils/apiFeature'


export const ChatAppContext = React.createContext();

export const ChatAppProvider = ({children}) => {
    //usestate
    const [account, setaccount] = useState("");
    const [userName, setUserName] = useState("");
    const [friendLists, setFriendLists] = useState([]);
    const [friendMsg, setFriendMsg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userLists, setUserLists] = useState([]);
    const [error, setError] = useState("");

    //Chat user data
    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserAddress, setCurrentUserAddress] = useState("");

    const router = useRouter();

    //fetch data time of page load
    const fetchData = async() => {
        try{
            //get contacrt
            const contract = await conecctingWithContract();
            //get acc
            const connectAccount = await connectWallet();
            setAcccount(connectAccount);
            //get user name
            const userName = await contract.getUserName(connectAccount);
            setUserName(userName);
            //get my friend list
            const friendList = await contract.getFriendList(connectAccount);
            setFriendLists(friendList);
            //get all app user list
            const userList = await contract.getAllappUser();
            setUserLists(userList);
        }catch(error){
            setError("Please install and connect your wallet");
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    //read message
    const readMessage = async(friendAddress) => {
        try{
            const contract = await conecctingWithContract();
            const read = await contract.readMessage(friendAddress);
            setFriendMsg(read);
        }catch(error){
            setError("No message");
        }
    };

    //create account
    const createAccount = async({name, accountAddress}) => {
        try{
            if(name || accountAddress)return setError("Please enter name and account address");

            const contract = await conecctingWithContract();
            const getCreateUser = await contract.createAccount(name);
            setLoading(true);
            await getCreateUser.wait();
            setLoading(false);
            window.location.reload();
        }catch(error){
            setError("Error while creating youtr account. Reload browser");
        }
    };

    
    //add friend
    const addFriends = async({name, accountAddress })=>{
        try{
            if(name || accountAddress) return setError("Please enter name and account address");

            const contract = await conecctingWithContract();
            const addMyFriend = await contract.addFriend(accountAddress,name);
            setLoading(true);
            await addMyFriend.wait();
            setLoading(false);
            router.push("/");
            window.location.reload();
        }catch(error){
            setError("Error while adding friend");
        }

    };

    //send message to friend
    const sendMessage = async({msg, address}) => {
        try{
            if(msg || address) return setError("Please enter message");

            const contract = await conecctingWithContract();
            const addMessage = await contract.sendMessage(address, msg);
            setLoading(true);
            await addMessage.wait();
            setLoading(false);
            window.location.reload();
        }catch(error){
            setError("Please reload and try again");
        }
    };

    //read info
    const readUser = async(userAddress) => {
        const contract = await conecctingWithContract();
        const username = await contract.getUserName(userAddress);
        setCurrentUserAddress(userAddress);
        setCurrentUserName(username);
    };

    return(
        <ChatAppContext.Provider value={{readMessage, createAccount, addFriends, sendMessage, readUser, 
        account, userName, friendLists, friendMsg, loading, userLists, error, currentUserName, currentUserAddress}}>
            {children}
        </ChatAppContext.Provider>
    )
};

