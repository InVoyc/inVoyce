
const validate = values =>{
    const errors = {}
    const email = values.email
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const password = values.password
    const isValidPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/g.test(password)

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
  
    return errors
}
export default validate