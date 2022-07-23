import React, {Component} from 'react';
import {Pressable, Text, StyleSheet} from "react-native";

const CustomButton = ({onPress, text, color, textColor, style}) => {
    return (
        <Pressable onPress={onPress} style={[AppStyle.container, style, {backgroundColor: color}]}>
            <Text style={[AppStyle.text, {fontFamily: "Trenda-bold", color: textColor ? textColor : "white"}]}>{text}</Text>
        </Pressable>
    );
}

export default CustomButton;

const AppStyle = StyleSheet.create({
    container: {
        width: "100%",
        padding: 17,
        marginVertical: 7,
        alignItems: "center",
    },
    text:{
        fontWeight: "bold",
        fontSize: 16,
        textTransform: "uppercase"
    }

})