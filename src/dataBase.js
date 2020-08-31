import mongodb from "mongodb";

export async function connectDataBase(){
   try{
       const client = await mongodb.connect("mongodb://localhost:27017",{useUnifiedTopology: true});
       const db = await client.db("evaluapykdjfk");
       console.log("database is connect")
       return db
   }catch(e){
       console.log(e)
   }
}