//import { useFormik } from "formik";
const validate = values =>{
    const errors = {}
    const fullName = values.fullName
    const hasSpecialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(fullName)
    const splitName = fullName.split(" ")
    const email = values.email
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const password = values.password
    const isValidPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/g.test(password)
    if(!values.fullName){
        errors.fullName = "Full Name is Required"
    }else if(splitName.length < 2){
        errors.fullName = "Full Name must contain at least first and last name"
    }else if(hasSpecialChars){
        errors.fullName = "Name must not contain special characters"
    }

    //email validation
    if(!email){
        errors.email = "Email is required"
    }
    else if(!isValidEmail){
        errors.email = "Invalid Email"
    }

    //password validation
    if(!password){
        errors.password = "Password is required"
    }else if(!isValidPassword){
        errors.password = "Password must contain at least one uppercase, one number and a special character"
    }else if(password.length < 8){
        errors.password = "Password must be at least 8 characters"
    }
    if(!values.phone){
        errors.phone = "Phone number is required"
    }
    if(!values.address){
        errors.address = "Address is required"
    }
    return errors
}
export default validate