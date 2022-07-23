import { StyleSheet, Text, View } from 'react-native';
import CustomInput from "../../components/atoms/CustomInput";
import CustomInputPassword from "../../components/atoms/CustomInputPassword/CustomInputPassword";
import CustomButton from "../../components/atoms/CustomButton";
import {useContext, useState} from "react";
import createUserWithEmailAndPassword from "@react-native-firebase/auth"
import {getAuth} from "firebase/auth";
import {auth} from "../../../firebase";
import {useNavigation} from "@react-navigation/native";
import {AuthContext} from "../../context/provider/AuthProvider";

const SignUp = () =>  {

    const {register} = useContext(AuthContext)

    const navigation = useNavigation()
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [password2, setPassword2] = useState("");


    const signUpPressed = () =>{

    }
    return (
        <View style={styles.container}>
            {/*<CustomInput setValue={setFirstName} value={firstName} placeholder={"Prénom"} placeholderTextColor={"grey"}/>*/}
            {/*<CustomInput setValue={setLastName} value={lastName} placeholder={"Nom"} placeholderTextColor={"grey"}/>*/}
            <CustomInput setValue={setEmail} value={email} placeholder={"Email"} placeholderTextColor={"gray"}/>
            <CustomInputPassword setValue={setPassword} value={password} placeholder={"Mot de passe"} placeholderTextColor={"gray"}/>
            {/*<CustomInputPassword setValue={setPassword2} value={password2} placeholder={"Confirmer le mot de passe"} placeholderTextColor={"grey"}/>*/}

            <CustomButton onPress={() => register(email, password)} text="Je m'inscris" color="white" textColor="black" style={{borderWidth: 2, borderColor: "black", borderRadius: 15}}/>
        </View>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
