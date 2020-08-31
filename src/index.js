
import "@babel/polyfill"

import app from "./server.js"

import {connectDataBase} from "./dataBase.js"

async function main(){
    await app.listen(app.get("port"));
    await connectDataBase()
    console.log("server on port",app.get("port"))
}
main()
