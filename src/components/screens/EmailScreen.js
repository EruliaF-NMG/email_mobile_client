import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    FlatList,
    Alert
} from 'react-native';

import { emailStyle } from "../../styles/email.style";
import { Heading } from "../ui_elements/CommonElements";

const Rows=({item})=>{
    return (
        <View style={[emailStyle.emailItemWrapper]}>
            <View style={[emailStyle.emailItemInfoWrapper]}>
                <Text style={[emailStyle.emailItemHeading]}>Send By:{item}</Text>
                <Text style={[emailStyle.emailItemValue]}>abc@gmail.com</Text>
            </View>
            <View style={[emailStyle.emailItemInfoWrapper]}>
                <Text style={[emailStyle.emailItemHeading]}>Send To:</Text>
                <Text style={[emailStyle.emailItemValue]}>nisal@gmail.com</Text>
            </View>
            <View style={[emailStyle.emailItemInfoWrapper]}>
                <Text style={[emailStyle.emailItemHeading]}>Status :</Text>
                <Text style={[emailStyle.emailItemValue]}>Send</Text>
            </View>
            <View style={[emailStyle.emailItemInfoWrapper]}>
                <Text style={[emailStyle.emailItemHeading]}>Email Headinng :</Text>
                <Text style={[emailStyle.emailItemValue]}>Hi </Text>
            </View>
            <View style={[emailStyle.emailItemInfoWrapper]}>
                <Text style={[emailStyle.emailItemHeading]}>Email Body :</Text>
                <Text style={[emailStyle.emailItemValue]}>Hi </Text>
            </View>
        </View>
    );
}
  

const EmailScreen = () => {

    const email = useSelector(state => state.email);
 
    return (
        <SafeAreaView>
            <Heading headaing="Email Requests" />
            <View style={[emailStyle.containerPadding,emailStyle.scrollViewWrapper]}>
            <FlatList
                data={[1,2,3,5,6,7,8,9]}
                renderItem={Rows}
                contentContainerStyle={{ flexGrow: 1 }}
             />
            </View>
        </SafeAreaView>
    )
}

export { EmailScreen };