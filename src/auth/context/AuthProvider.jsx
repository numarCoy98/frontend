import { useReducer } from "react";
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types";
import { useFetch } from "../../hooks";
import chatApi from "../../../api/chatApi";

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
            const resp = await chatApi.post('/auth', { email, password })
            console.log({ resp })
            const action = {
                type: types.login,
                payload: user
            }
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(user.token))
            dispatch(action)

        } catch (error) {
            console.log({ error })
        }
    }
    return (
        <AuthContext.Provider value={{ onLogin, authState }}>
            {children}
        </AuthContext.Provider>
    )
}
