import {createContext, useState} from "react";
import {auth} from "../../../firebase";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    return(
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login : async (username, password) => {
                    try {
                        await auth.signInWithEmailAndPassword(username, password).then(userCredentials => {
                            const user = userCredentials.user;
                            console.log(user)
                        }).catch(e => console.log(e))
                    }catch (e) {
                        console.log(e)
                    }
                },
                register: async () => {
                    try {
                        await auth.createUserWithEmailAndPassword(email, password);
                    }catch (e) {
                        console.log(e)
                    }
                },
                logout: async () => {
                    console.log("logout")
                    try {
                        await auth.signOut();
                    } catch (e) {
                        console.log(e)
                    }

                },
            }}

        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

