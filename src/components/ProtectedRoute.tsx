import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

type Props = PropsWithChildren

export default function ProtectedRoute({ children }: Props) {
    const user = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (user === null || user === undefined) {
            navigate("/login", { replace: true })
        }
        console.log('this fired', user)
    }, [navigate, user])

    return children
}