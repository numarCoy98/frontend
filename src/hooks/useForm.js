import { useState } from "react"


export const useForm = (initialForm) => {
    const [state, setFormState] = useState(initialForm)

    const onInputChange = ({ target: { value, name } }) => {
        setFormState(state => ({
            ...state,
            [name]: value
        }))
    }
    const onResetForm = () => {
        setFormState((state) => Object.keys(state).reduce((acc, cv) => { return { ...acc, [cv]: '' } }, {}))
    }

    return {
        state, onInputChange, onResetForm
    }
}
