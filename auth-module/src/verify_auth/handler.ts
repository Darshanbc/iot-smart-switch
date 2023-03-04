
import {CognitoIdentityServiceProvider} from "aws-sdk"
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();


// const  addUserToDefaultGroup = async (username)=>{

//     const params = {
//         GroupName: 'USER', /* required */
//           UserPoolId: ' us-east-1_3ukPSLxhI', /* required */
//           Username: username /* required */
//     };
    
//     cognitoIdentityServiceProvider.adminAddUserToGroup(params, function(err, data) {
//       if (err) console.log(err, err.stack); // an error occurred
//       else     console.log(data);           // successful response
//     });
    

// }


export const verifyAuthChallenge = async (event) => {
    console.log(event.request);
    
    const expectedAnswer = event.request.privateChallengeParameters.secretLoginCode; 
    console.log("expectedAnswer: "+expectedAnswer)
    console.log("challengeAnswer: "+event.request.challengeAnswer)
    if (event.request.challengeAnswer === expectedAnswer) {
        console.log("answer is correct")
        event.response.answerCorrect = true;
        // await addUserToDefaultGroup("event.userAttributes.phone_number")


    } else {
        console.log("answer is wrong")
        event.response.answerCorrect = false;
    }



    return event;
};