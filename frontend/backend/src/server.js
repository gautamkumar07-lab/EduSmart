require("dotenv").config();
const express=require("express"),cors=require("cors"),helmet=require("helmet"),morgan=require("morgan");
const app=express(); app.use(helmet()); app.use(cors()); app.use(express.json({limit:"5mb"})); app.use(morgan("combined"));
app.get("/api/health",(req,res)=>res.json({success:true,status:"operational",timestamp:new Date().toISOString()}));
app.get("/api/dashboard",(req,res)=>res.json({success:true,data:{users:1284,active:342,growth:18.6}}));
app.use((err,req,res,next)=>{console.error(err);res.status(500).json({success:false,error:"Internal server error"});});
const PORT=process.env.PORT||4000; app.listen(PORT,()=>console.log("API running on "+PORT));
