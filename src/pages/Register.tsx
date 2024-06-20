
import { client } from "@/hooks/useClient";
import { UserRegistrationFormData } from "@/types";
import { ChangeEvent, useState } from "react";


export default function Register() {
    const [formData, setFormData] = useState<UserRegistrationFormData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = async() => {
        
        try {
            const response = await client.post('/register', formData)
            console.log(response)
        } catch (err) {
            alert("Incomplete details or email already exists.")
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
            <h2>Register</h2>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email" onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" name="confirmPassword" onChange={handleInputChange} required />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}