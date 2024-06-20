import { UserRegistrationFormData } from "@/types"

type ReturnType = {
    validateForm: (formData: UserRegistrationFormData) => boolean
}

export const useRegistrationValidator = (): ReturnType => {

    const validateForm = (formData: UserRegistrationFormData): boolean => {
        let success = true
        if (formData.email.trim() === "") {
            alert("email address is required.")
            success = false
        }
        if (formData.name.trim() === "") {
            alert("email address is required.")
            success = false
        }
        if (formData.password.trim() === "") {
            alert("email address is required.")
            success = false
        }
        if (formData.confirmPassword.trim() !== formData.password.trim()) {
            alert("password and confirm password does not match.")
            success = false
        }

        return success
    }

    return {
        validateForm
    }
}