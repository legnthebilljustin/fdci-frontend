import { useNavigate } from "react-router-dom"

export default function ThankYou() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/dashboard", { replace: true })
    }

    return (
        <div className="login-container" style={{
            textAlign: "center",
            padding: "2rem 0"
        }}>
            <h2>Thank you for registering</h2>
            <button onClick={handleClick}>continue</button>
        </div>
    )
}