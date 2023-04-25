import { useEffect, useState } from "react"
import chatApi from "../../api/chatApi"


export const useAxios = (url, data = {}) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {
        setState({ ...state, isLoading: true })
        try {
            const { data } = await chatApi.get(url)
            setState({ data: data, isLoading: false, hasError: null })
        } catch (error) {
            setState({ data: null, hasError: true, isLoading: false })
        }
    }

    useEffect(() => {
        getFetch()
        return () => {
        }
    }, [url])

    return { ...state }
}
