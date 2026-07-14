const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://arathir:arathirnair@ac-g0cyi5b-shard-00-00.egyqa6b.mongodb.net:27017,ac-g0cyi5b-shard-00-01.egyqa6b.mongodb.net:27017,ac-g0cyi5b-shard-00-02.egyqa6b.mongodb.net:27017/evdb?ssl=true&replicaSet=atlas-89qct9-shard-0&authSource=admin&appName=Cluster0").then(
    ()=>{
        console.log("MongoDb connected")
    }
).catch(
    (error)=>{
        console.log(error)
    }
)

const ev=mongoose.model("evstation",new mongoose.Schema(
  {
    bookingid:String,
    ownername:String,
    email:String,
    phone:String,
    vehicleregno:String,
    vehiclebrand:String,
    vehiclemodel:String,
    batterycapacity:String,
    connectortype:String,
    chargingdate:String,
    timeslot:String,
    estimatedunits:String,
    chargingbayno:String,
  }  
))

app.post("/add-veh",async(req,res)=>{
    await ev.create(req.body)
    res.json({"status":"success"})
})




app.listen(3000,()=>{
    console.log("server started")
})