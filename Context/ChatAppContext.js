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

    const title = "Hey there! Welcome to the ChatApp";

    return(
        <ChatAppContext.Provider value={{title}}>
            {children}
        </ChatAppContext.Provider>
    )
};

