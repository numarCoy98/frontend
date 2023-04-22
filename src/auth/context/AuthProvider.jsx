import { useReducer } from "react";
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types";
import { useFetch } from "../../hooks";

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user
    }
}


export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);


    // const onLogin = async (email, password) => {

    // }
    const onLogin = async (email, password) => {
        console.log({ email, password })
        // const { data, isLoading, hasError } = useFetch(`localhost:5000/api/auth`, {
        //     method: 'post',
        //     body:
        //     {
        //         "email": "anllycoy@gmail.com",
        //         "password": "123456678"
        //     }
        // });
        // console.log({ data, isLoading, hasError })
        try {
            // const {} = await
            const user = {
                "ok": true,
                "uid": "644404af0ea32102156eebbb",
                "name": "Anlly coy",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDQ0MDRhZjBlYTMyMTAyMTU2ZWViYmIiLCJuYW1lIjoiQW5sbHkgY295IiwiaWF0IjoxNjgyMTc5NDE1LCJleHAiOjE2ODIxODY2MTV9.PBF4XNcLhKZornocI3QI6s2mwY7oHvToCPAVEXs6dvY"
            }
            const action = {
                type: types.login,
                payload: user
            }
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(user.token))
            dispatch(action)

        } catch (error) {

        }
    }
    return (
        <AuthContext.Provider value={{ onLogin, authState }}>
            {children}
        </AuthContext.Provider>
    )
}
