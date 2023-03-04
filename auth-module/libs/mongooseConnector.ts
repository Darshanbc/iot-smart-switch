import * as mongoose from "mongoose";

let dbName: string = "abcd";
let uri: string ="mongodb+srv://darshan01075:North010@serverlessinstance0.ph4sb.mongodb.net/abcd?retryWrites=true&w=majority"
    // "mongodb+srv://darshan01075:North010@cluster0.ylc6s.mongodb.net/leo?retryWrites=true&w=majority"
// connectToDB().catch(err =>console.log(err));
let conn: typeof mongoose = null;

export async function connectToDB(): Promise<typeof mongoose> {
    // @ts-ignore
    if (conn == null) {
        // @ts-ignore
        conn = mongoose.connect(uri, {
            dbName: dbName,

            connectTimeoutMS: 3000,
            socketTimeoutMS: 3000,

            useUnifiedTopology: true,
            useNewUrlParser: true,
            serverSelectionTimeoutMS: 5000
        })

        // `await`ing connection after assigning to the `conn` variable
        // to avoid multiple function calls creating new connections
        // return  conn;

    }
    return conn
}
