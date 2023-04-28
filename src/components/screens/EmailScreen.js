import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    SafeAreaView,
    Text,
    View,
    Button
} from 'react-native';

import { increment } from "../../slice/Email";
  

const EmailScreen = () => {

    const email = useSelector(state => state.email);
    const dispatch = useDispatch();

    const addOne = () => {
        dispatch(increment());
    }
console.log(email);
    return (
        <SafeAreaView>
        <View>
            <Text>Hi count {email.value}</Text>
            <Button
                onPress={()=>addOne()}
                title="Add"
            />
        </View>
        </SafeAreaView>
    )
}

export { EmailScreen };