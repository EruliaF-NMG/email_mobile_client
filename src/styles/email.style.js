import { StyleSheet,Platform } from "react-native";

export const emailStyle = StyleSheet.create({
    containerPadding: {
        padding:10,
    },
    headingFont:{
        color: "#000",
        fontSize:20
    },
    scrollViewWrapper: {
        marginBottom: 55,
    },
    emailItemWrapper:{
        backgroundColor: 'white',
        borderColor:"#f3f3f3",
        borderBottomWidth:4,
        padding:10,
        elevation: 1,
        display:"flex",
        flexDirection:"column"
    },
    emailItemInfoWrapper:{
        display:"flex",
        flexDirection:"row"
    },
    emailItemHeading:{
        fontWeight:'bold',
        paddingRight:10,
    },
    emailItemValue:{
    }
});