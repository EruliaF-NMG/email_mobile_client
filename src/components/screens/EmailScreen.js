import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    SafeAreaView,
    Text,
    View,
    FlatList,
    ActivityIndicator,
} from 'react-native';

import { emailStyle } from "../../styles/email.style";
import { Heading } from "../ui_elements/CommonElements";
import { retrieveEmailList } from "../../slice/Email";

const Rows=({item})=>{
    return (
        <View style={[emailStyle.emailItemWrapper]}>
            <View style={[emailStyle.emailItemInfoWrapper]}>
                <Text style={[emailStyle.emailItemHeading]}>Send By:</Text>
                <Text style={[emailStyle.emailItemValue]}>{item.from_email}</Text>
            </View>
            <View style={[emailStyle.emailItemInfoWrapper]}>
                <Text style={[emailStyle.emailItemHeading]}>Send To:</Text>
                <Text style={[emailStyle.emailItemValue]}>{item.send_to}</Text>
            </View>
            <View style={[emailStyle.emailItemInfoWrapper]}>
                <Text style={[emailStyle.emailItemHeading]}>Status :</Text>
                <Text style={[emailStyle.emailItemValue]}>{item.state}</Text>
            </View>
            <View style={[emailStyle.emailItemInfoWrapper]}>
                <Text style={[emailStyle.emailItemHeading]}>Email Subject :</Text>
                <Text style={[emailStyle.emailItemValue]}>{item.subject} </Text>
            </View>
            <View style={[emailStyle.emailItemInfoWrapper]}>
                <Text style={[emailStyle.emailItemHeading]}>Email Body :</Text>
                <Text style={[emailStyle.emailItemValue]}>{item.body} </Text>
            </View>
        </View>
    );
}
  

const EmailScreen = () => {

    const email = useSelector(state => state.email);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(retrieveEmailList());
    },[]);
    return (
        <SafeAreaView>
            <Heading headaing="Email Requests" />
            <View style={[emailStyle.containerPadding,emailStyle.scrollViewWrapper]}>
                {
                    email.loading? 
                    (<ActivityIndicator size="large" />) : (
                        <FlatList
                            data={email.data}
                            renderItem={Rows}
                            contentContainerStyle={{ flexGrow: 1 }}
                        />
                    )
                }
            </View>
        </SafeAreaView>
    )
}

export { EmailScreen };