// core module link pana public dir ah
const path=require('path')

const express=require('express')
const app=express()
// path set pana html file ku
const pathway=path.join(__dirname,'../public')

//  express la html use pana
 app.use(express.static(pathway))

 app.get('',(req,res)=>{
    res.send('hi')
})


app.listen(8080,()=>{
    console.log("server is up 8080")
})