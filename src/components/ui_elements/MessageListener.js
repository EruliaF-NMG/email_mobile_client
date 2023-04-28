import React,{Fragment,useEffect,useState} from 'react';
import { useDispatch } from "react-redux";
import socket from '../../helpers/SocketHelpers';
import {setNewEmail,updateEmailInfo} from '../../slice/Email';

const MessageListener = ({children}) => {

    const dispatch = useDispatch();

    useEffect(() => {

        socket.on('new-email', (object) => {
            dispatch(setNewEmail([object]));
        });

        socket.on('update-email', (object) => {
            dispatch(updateEmailInfo(object));
        });
        
    },[]);

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export { MessageListener };