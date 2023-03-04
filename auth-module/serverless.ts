import {createAuth, defineAuth, preSignUp, verifyAuth} from "./src";
import {resource} from "./resource";

export const stage="android-dev";
const serverlessConfiguration = {
    service: 'iot-sw-poc-auth-service',
    frameworkVersion: '3',
    custom: {
        webpack: {
            webpackConfig: './webpack.config.js',
            includeModules: true,
        },
    },
    plugins: ['serverless-webpack'],
    provider: {
        name: 'aws',
        region: "ap-south-1",
        runtime: 'nodejs14.x',
        stage: stage,
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
        lambdaHashingVersion: '20201221',
    },
    functions: {
        //@ts-ignore
        createAuth: createAuth,
        //@ts-ignore
        preSignUp: preSignUp,
        //@ts-ignore
        defineAuth: defineAuth,
        //@ts-ignore
        verifyAuth: verifyAuth,
    },
    resources: resource,


}

module.exports = serverlessConfiguration;