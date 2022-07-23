import React from 'react';
import {View, TextInput, useWindowDimensions, StyleSheet} from 'react-native';
// import AppStyle from "../../../../assets/styles/components/CustomInput.scss";

const CustomInput = ({value, setValue, placeholder, secureText, type, placeholderTextColor, textColor, textArea}) => {
    const {width, height} = useWindowDimensions();
    return (
        <View style={AppStyle.container}>
            <TextInput
                placeholderTextColor={placeholderTextColor ? placeholderTextColor : "grey"}
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={[AppStyle.input, {borderBottomColor: '#464646', borderBottomWidth: 1, color: textColor ? textColor : "black"}, textArea && {height: height * 0.15, justifyContent: "flex-start"}]}
                secureTextEntry={secureText}
                keyboardType={type}
                multiline={textArea === true}
                numberOfLines={textArea ? 10 : 1}

            />
        </View>
    );
}

export default CustomInput;

const AppStyle = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15,
    },
    input: {
        paddingBottom: 10,
        fontSize: 16
    }
})