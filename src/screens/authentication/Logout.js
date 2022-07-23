import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {auth} from "../../../firebase";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../context/provider/AuthProvider";

const Logout = async () => {

    const {logout} = useContext(AuthContext)
    logout();


    return (
        <ActivityIndicator/>
    )
}

export default Logout;
