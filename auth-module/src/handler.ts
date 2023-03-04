import {Handler} from "aws-lambda";
import {createAuthChallenge} from "./create_auth/handler"
import {defineAuthChallenge} from "./define_auth/handler"
import {verifyAuthChallenge} from "./verify_auth/handler"
import {preSignup} from "./presignup/handler"

export const createAuth:Handler=async (event)=>{
    return await createAuthChallenge(event);
}

export const defineAuth:Handler=async (event)=>{
    return await defineAuthChallenge(event);
}
export const verifyAuth:Handler=async (event)=>{

    return await verifyAuthChallenge(event);

}

export const preSignUp:Handler=async (event)=>{
    return await preSignup(event);
}