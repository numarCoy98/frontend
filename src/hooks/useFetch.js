import { useEffect, useState } from "react"

export const useFetch = (url, data = {}) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {
        setState({ ...state, isLoading: true })
        // TODO: revisar try para el error
        try {
            const resp = await fetch(url, data);
            const data = await resp.json();
            setState({ data, isLoading: false, hasError: null })
        } catch (error) {
            setState({ data: null, hasError: true, isLoading: false })
        }
        // console.log({ data })
    }

    useEffect(() => {
        getFetch()
        return () => {
        }
    }, [url])

    return { ...state }
}
