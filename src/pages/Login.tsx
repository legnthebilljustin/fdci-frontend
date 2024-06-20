import { useAuth } from "@/components/AuthProvider";
import { client } from "@/hooks/useClient";
import { UserLoginFormData } from "@/types";
import { ChangeEvent, useState } from "react";


export default function Login() {
    const { updateUser } = useAuth()

    const [formData, setFormData] = useState<UserLoginFormData>({
        email: "",
        password: ""
    })

    const handleSubmit = async() => {
        try {
            const response = await client.post('/login', formData)
            if (response.data) {
                updateUser(response.data?.user)
                window.location.href = "/dashboard"
            }
        } catch (err) {
            alert("Invalid credentials.")
        }
        
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h2>Sign In</h2>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email" onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={handleInputChange} required />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}