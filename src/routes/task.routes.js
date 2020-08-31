import {Router} from "express";
const router = Router();

import {connectDataBase} from "../dataBase.js";
import{ObjectID} from "mongodb";


router.get("/",async(req,res)=>{
    const connect = await connectDataBase()
    const db = await connect.collection("task").find({}).toArray()
    //console.log(db)
    res.json(db)
})
router.post("/",async(req,res)=>{
    const connect = await connectDataBase()
    const task = {        
        title: req.body.title,
        descriptions: req.body.descriptions
    }
    const franc = await connect.collection("task").insert(task)
    //console.log(req.body)
    res.json(franc)
})
router.get("/:id",async(req,res)=>{
    const {id} = req.params;
    const db = await connectDataBase();
    const result = await db.collection("task").findOne({_id: ObjectID(id)})
    res.json(result)
})
router.put("/:id",async(req,res)=>{
    const {id} = req.params;
    const taskUpdate = {
        title : req.body.title,
        descriptions : req.body.descriptions
    }
    const db = await connectDataBase();
    const newtaskUpdate = await db.collection("task").updateOne({_id: ObjectID(id)},{$set: taskUpdate})
    res.json({
        mesaje: "task ${id} update"
    })
})
router.delete("/:id",async(req,res)=>{
    const {id} = req.params;
    const db = await connectDataBase();
    await db.collection("task").deleteOne({_id: ObjectID(id)})
    res.send("delete...")
})
export default router;