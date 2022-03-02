export const validateString = (value) => {
    //validate with regex if it is a string 
    if (typeof value === 'string') {
        return value.trim().length > 0;
    }
    return false;

};

export const validateEmail = (value) => {
    //validate with regex if it is a string 
    if (typeof value === 'string') {
        return value.trim().length > 0 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    }
    return false;

}