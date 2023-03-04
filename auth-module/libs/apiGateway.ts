import type {APIGatewayProxyEvent, APIGatewayProxyResult, Handler} from "aws-lambda"
import type {FromSchema} from "json-schema-to-ts";
import {cors} from "./cors";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> }
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>

export const formatJSONResponse_200 = (response: Record<string, unknown>) => {
    return {
        headers: {
            "Access-Control-Allow-Origin": cors.origin,
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
        },
        statusCode: 200,
        body: JSON.stringify(response)
    }
}

export const formatJSONResponse_500 = (response: Record<string, unknown>) => {
    return {
        headers: {
            "Access-Control-Allow-Origin": cors.origin,
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
        },
        statusCode: 500,
        body: JSON.stringify(response)
    }
}

export const formatJSONResponse_401 = (response: Record<string, unknown>) => {
    return {
        headers: {
            "Access-Control-Allow-Origin": cors.origin,
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
        },
        statusCode: 401,
        body: JSON.stringify(response)
    }
}
