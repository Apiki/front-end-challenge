import { useEffect, useState } from "react"
import { api } from "../services/baseURL";

export function useFetch<T = unknown>(url: string) {
    const [data, setData] = useState<T | null>(null)

    useEffect(() => {
        api.get(url)
            .then((response) => {
                setData(response.data);
            })
    }, [])

    return { data, setData }
}

