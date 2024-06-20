import { STORAGE_KEYS } from "@/constants/keys";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type AuthProviderProps = PropsWithChildren & {
    isSignedIn?: boolean
}

type User = {
    id: string
    token: string
    email: string
    name: string
}

type AuthContextType = {
    user: User | null
    updateUser: (user: User | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error("useAuth must be used within the AuthProvider")
    }

    return context
}

export default function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null)

    const updateUser = (newUser: User | null) => {
        if (newUser && newUser.token) {
            localStorage.setItem(STORAGE_KEYS.TOKEN, newUser.token)
        }
        setUser(newUser);
    }

    return <AuthContext.Provider value={{ user, updateUser }}>{ children }</AuthContext.Provider>
}