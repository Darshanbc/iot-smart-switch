
const stage="android-dev"
export const resource = {
    Resources: {
        CognitoUserPoolSmartSwitchDemo: {
            Type: "AWS::Cognito::UserPool",
            // Condition: "CreateUserPoolCondition",
            Properties: {
                AliasAttributes: ["phone_number", "email"],
                Schema: [
                    {
                        Name: "phone_number",
                        Required: true,
                    },
                    {
                        Name: "email",
                        Required: true,
                    },
                    {
                        Name: "firstName",
                        AttributeDataType: "String",
                        Mutable: true,
                    },
                    {
                        Name: "lastName",
                        AttributeDataType: "String",
                        Mutable: true,
                    },
                ],
                UserPoolName: "Krishigen-SmartSwitch-userpool-"+stage,
                Policies: {
                    PasswordPolicy: {
                        MinimumLength: 6,
                        RequireLowercase: false,
                        RequireNumbers: false,
                        RequireSymbols: false,
                        RequireUppercase: false,
                    },
                },
            },
        },
        CognitoUserPoolClient: {
            Type: "AWS::Cognito::UserPoolClient",

            Properties: {
                ClientName: "krishigen-sms-auth-client"+stage,
                RefreshTokenValidity: 3650,
                IdTokenValidity: 1,
                AccessTokenValidity: 5,
                TokenValidityUnits: {
                    AccessToken: "minutes",
                    IdToken: "days",
                    RefreshToken: "days",
                },
                UserPoolId: {
                    Ref: "CognitoUserPoolSmartSwitchDemo",
                },
                ExplicitAuthFlows: ["CUSTOM_AUTH_FLOW_ONLY"],
                GenerateSecret: true,
            },
        },
        snsLambda: {
            Type: "AWS::IAM::Role",
            // Condition:"CreateSnsLambdaCondition",
            Properties: {
                RoleName: "sns-lambda-role-"+stage,
                AssumeRolePolicyDocument: {
                    Version: "2012-10-17",
                    Statement: [
                        {
                            Effect: "Allow",
                            Principal: {
                                Service: ["lambda.amazonaws.com"],
                            },
                            Action: "sts:AssumeRole",
                        },
                    ],
                },
                ManagedPolicyArns: [
                    "arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole",
                    "arn:aws:iam::aws:policy/AmazonSNSFullAccess",
                    "arn:aws:iam::aws:policy/CloudWatchFullAccess",
                ],
            },
        },

    },
    Outputs: {
        UserPoolId: {
            Value: {
                Ref: "CognitoUserPoolSmartSwitchDemo",
            },
            Export: {
                Name: "CognitoUserPoolSmartSwitchDemo-"+stage,
            },
        },
    },

};
