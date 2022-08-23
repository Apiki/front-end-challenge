import { useEffect, useState } from "react";

export function useAuth() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        setUser([
            {
                name: 'Wallace Jonathan',
                role: 'administrator',
            },
        ])
    }, [])

    return {
        user
    }
}