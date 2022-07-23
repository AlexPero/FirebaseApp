import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
// import AppStyle from "../../../../assets/styles/components/CustomInputWithPasswordShowable.scss";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";


const CustomInputWithPasswordShowable = ({value, setValue, placeholder, placeholderTextColor, textColor}) => {

    const [isVisible, setIsVisible] = useState(true);

    const passwordVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <View style={AppStyle.passwordShowable}>
            <View style={[AppStyle.passwordShowable__container, {borderBottomColor: '#464646', borderBottomWidth: 1}]}>
                <TextInput
                    placeholderTextColor={placeholderTextColor ? placeholderTextColor : "black"}
                    value={value}
                    onChangeText={setValue}
                    placeholder={placeholder}
                    style={[AppStyle.passwordShowable__input,{color: textColor ? textColor : "black"}]}
                    secureTextEntry={isVisible}
                />
                <FontAwesomeIcon icon={isVisible ? faEye : faEyeSlash} color={"black"} onPress={passwordVisibility} size={22}/>
            </View>
        </View>
    );
}

export default CustomInputWithPasswordShowable;

const AppStyle = StyleSheet.create({
    passwordShowable: {
        width : "100%",
        padding: 15,
    },
    passwordShowable__container: {
        display : "flex",
        flexDirection: "row",
        justifyContent : "space-between",
        paddingBottom: 10,
    },
    passwordShowable__eyesIcon:{
        padding: 10,
    },
    passwordShowable__input:{
        display : "flex",
        width: "80%",
        fontSize: 16
    }
})