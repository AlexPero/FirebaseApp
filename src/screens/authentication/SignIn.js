import { StyleSheet, Text, View } from 'react-native';
import CustomInput from "../../components/atoms/CustomInput"
import {useContext, useEffect, useState} from "react";
import CustomInputPassword from "../../components/atoms/CustomInputPassword/CustomInputPassword";
import CustomButton from "../../components/atoms/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {auth} from "../../../firebase";
import {AuthContext} from "../../context/provider/AuthProvider";

const SignIn = () =>  {

    const {login} = useContext(AuthContext)

    const navigation = useNavigation()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View style={styles.container}>
            <CustomInput setValue={setUsername} value={username} placeholder={"Identifiant"} placeholderTextColor={"grey"}/>
            <CustomInputPassword setValue={setPassword} value={password} placeholder={"Mot de passe"} placeholderTextColor={"grey"}/>

            <CustomButton onPress={() => login(username, password)} text="Je me connecte" color="black" textColor="white" style={{borderRadius: 15}}/>
            <CustomButton onPress={() => navigation.navigate("SignUp")} text="Je m'inscris" color="white" textColor="black" style={{borderWidth: 2, borderColor: "black", borderRadius: 15}}/>
        </View>
    );
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
