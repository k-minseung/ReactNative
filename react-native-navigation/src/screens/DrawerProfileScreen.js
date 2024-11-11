import React from "react";
import { View, Text, StyleSheet } from "react-native";


const ProfileScreen = () => {
    return(
        <View style={Styles.container}>
            <Text style={Styles.title}>Profile Screen</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor : '#f9f9f9',
    },
    title : {
        fontSize:24,
        marginBottom:20,
    }
})

export default ProfileScreen;