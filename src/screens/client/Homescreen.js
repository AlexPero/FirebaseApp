import { StyleSheet, Text, View } from 'react-native';
import CustomButton from "../../components/atoms/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {auth} from "../../../firebase";
import {AuthContext} from "../../context/provider/AuthProvider";
import {useContext} from "react";

const HomeScreen = () =>  {

    const navigation = useNavigation();

    const {logout} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Text>Email : {auth.currentUser?.email} </Text>
            <CustomButton onPress={() => logout()} text="Déconnexion" textColor="white" color="red" style={{borderRadius: 15}}/>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
