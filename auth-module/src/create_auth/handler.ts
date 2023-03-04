import {SNS} from "aws-sdk"

const sendSMS = async (phone, code) => {
    const params = {
        Message: "Welcome to LeoTrade. Your one time password is " + code, /* required */
        PhoneNumber: phone,
    };

    return new SNS({apiVersion: '2010-03-31', region: 'us-east-1'}).publish(params).promise();
}


export const createAuthChallenge = async (event) => {
    console.log("CUSTOM_CHALLENGE_LAMBDA", event.request);

    let secretLoginCode;
    if (!event.request.session || !event.request.session.length) {

        // Generate a new secret login code and send it to the user
        let str = new Date().getTime().toString()
        secretLoginCode = "3019"
            // str.substr(str.length - 4);
        console.log(secretLoginCode)
        try {

            // await sendSMS(event.request.userAttributes.phone_number, secretLoginCode);
            /* code */
        }
        catch (e) {
            console.log("error" + e);
        }

    } else {

        // re-use code generated in previous challenge
        const previousChallenge = event.request.session.slice(-1)[0];
        secretLoginCode = previousChallenge.challengeMetadata.match(/CODE-(\d*)/)[1];
    }

    console.log(event.request.userAttributes);

    // Add the secret login code to the private challenge parameters
    // so it can be verified by the "Verify Auth Challenge Response" trigger
    event.response.privateChallengeParameters = {secretLoginCode};

    // Add the secret login code to the session so it is available
    // in a next invocation of the "Create Auth Challenge" trigger
    event.response.challengeMetadata = `CODE-${secretLoginCode}`;

    return event;
};
