import { useEffect, useState } from "react"

const useAdmin = email => {
    const [role, setRole] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(` https://server-nine-lilac.vercel.app/user/${email}`)
                .then(res => res.json())
                .then(data => {

                    const role = data.role
                    setRole(role)
                    setIsLoading(false);
                })
        }
    }, [email])
    return role
}

export default useAdmin;