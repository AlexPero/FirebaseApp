import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "../screens/authentication/SignIn";
import Logout from "../screens/authentication/Logout";
import SignUp from "../screens/authentication/SignUp";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="SignIn" component={SignIn} options={{
                title: "Connexion",
            }}/>
            <Stack.Screen name="Logout" component={Logout} />
            <Stack.Screen name="SignUp" component={SignUp} options={{
                title: "Inscription",
            }}/>
        </Stack.Navigator>
    );
}

export default App;