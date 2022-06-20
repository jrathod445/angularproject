import {connect, ConnectOptions} from 'mongoose';



// export const dbConnect = () => {
//     connect(process.env.MONGO_URI!, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     } as ConnectOptions).then(
//         () => console.log("connect successfully"),
//         (error) => console.log(error)
//     )
// }


//ma'am code
export const dbConnect = () => {
    // console.log("hello");
    connect("mongodb+srv://jay:5tpDe9rGeq8LSse7@cluster0.lxheh7m.mongodb.net/foodmine?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
    )
}  