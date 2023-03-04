import {handlerPath} from "../libs/handlerResolver";


export const createAuth={
    handler:`${handlerPath(__dirname)}/handler.createAuth`,
    role:"snsLambda",
    events:[
        {
        "cognitoUserPool": {
            "pool": "SmartSwitchDemo",
            "trigger": "CreateAuthChallenge"
        }
    }
    ]
}

export const preSignUp={
    handler:`${handlerPath(__dirname)}/handler.preSignUp`,
    events:[
        {
            "cognitoUserPool": {
                "pool": "SmartSwitchDemo",
                "trigger": "PreSignUp"
            }
        }
    ]
}
export const defineAuth={
    handler:`${handlerPath(__dirname)}/handler.defineAuth`,
    events:[
        {
            "cognitoUserPool": {
                "pool": "SmartSwitchDemo",
                "trigger": "DefineAuthChallenge"
            }
        }
    ]
}

export const verifyAuth={
    handler:`${handlerPath(__dirname)}/handler.verifyAuth`,
    events:[
        {
            "cognitoUserPool": {
                "pool": "SmartSwitchDemo",
                "trigger": "VerifyAuthChallengeResponse"
            }
        }
    ]
}