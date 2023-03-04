import {verifierFactory} from "@southlane/cognito-jwt-verifier"

export const getUsername=async(jwt:String):Promise<String>=> {


    const verifier = verifierFactory({
        region: 'us-east-2',
        userPoolId: 'us-east-1_3iDBBxq74',
        appClientId: '61b5rul1gp6k4v575ur28hdu4e',
        tokenType: 'id', // either "access" or "id"
    })
    var tokenPayload = await verifier.verify(jwt)
    return tokenPayload["cognito:username"]
}












// import {CognitoIdentityServiceProvider} from "aws-sdk"
//
//
// export const getUsername=async(jwt)=> {
//     console.log("jwt"+jwt)
//      var params = {
//         AccessToken:jwt/* required */
//      };
//      const cognitoidentityserviceprovider=new CognitoIdentityServiceProvider({region: "us-east-1"});
//      // try {
//      //     const username = await cognitoidentityserviceprovider.getUser(params);
//      //     console.log(username)
//      //     // @ts-ignore
//      //     return username
     // }
     // catch (err){
     //     console.log(err)
//      // }
//     cognitoidentityserviceprovider.getUser(params, function(err, data) {
//         if (err) console.log(err, err.stack); // an error occurred
//         else     console.log(data);           // successful response
//     });
//
//
//
//
//
// }
