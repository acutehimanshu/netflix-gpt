export const validateLogin = (email, password)=>{
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    // const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/.test(password);
    const isValidPassword = password.length >= 8;
    if(!isValidEmail) return "Invalid Email id";
    if(!isValidPassword) return "Invalid Password";
    return null;
}
export const validateRegister=(name, email, password, confirmPassword)=>{
    const isValidName = name.length >= 2;
    if(!isValidName) return "Please enter proper name.";
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if(!isValidEmail) return "Please enter valid email.";
    const isValidPassword = password.length >= 8;
    if(!isValidPassword) return "Please enter atleast 8 characters in password";
    const isValidConfirmPassword = (confirmPassword === password);
    if(!isValidConfirmPassword) return "Please check confirm password";
    return null;
}