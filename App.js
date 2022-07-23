import {ActivityIndicator} from 'react-native';
import {useEffect, useMemo, useState} from "react";
import {auth} from "./firebase";
import {NavigationContainer} from "@react-navigation/native";
import HomeStackNavigator from "./src/navigation/HomeStackNavigator";
import AuthStackNavigator from "./src/navigation/AuthStackNavigator";
import AuthProvider from "./src/context/provider/AuthProvider";

export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();


  const onAuthStateChanged = user => {
    setUser(user)
    initializing && setInitializing(false)

  }

  useEffect(() => {
    return auth.onAuthStateChanged(onAuthStateChanged)
  }, []);

  if (initializing){
    return (
        <ActivityIndicator />
    )
  }
  return (
      <AuthProvider>
        <NavigationContainer>
          {user ? (
              <HomeStackNavigator/>
          ):(
              <AuthStackNavigator/>
          )}
        </NavigationContainer>
      </AuthProvider>
  );
}
