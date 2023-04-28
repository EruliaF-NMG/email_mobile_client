import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import { emailStyle } from "../../styles/email.style";

const Heading = ({
    headaing = ""
}) => {
 
    return (
        <View style={[emailStyle.containerPadding]}>
            <Text style={[emailStyle.headingFont]}>{headaing}</Text>
        </View>
    )
}

export { Heading };