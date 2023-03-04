export const preSignup = async (event) => {
    
    event.response.autoConfirmUser = true;
    event.response.autoVerifyPhone = true;
    return event;

};
