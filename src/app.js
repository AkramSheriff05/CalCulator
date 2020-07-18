// core module link pana public dir ah
const path=require('path')

const express=require('express')

const app=express()
// path set pana html file ku
const pathway=path.join(__dirname,'../public')

const port=process.env.PORT||8080

// hbs concept set pana
app.set('view engine','hbs')

//  express la html use pana
 app.use(express.static(pathway))

 app.get('',(req,res)=>{
    res.render('index',{
        title:'CalCulator',
        credits:'Akram sheriff'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        credits:'Akram sheriff'
    })
})



app.listen(port,()=>{
    console.log("server is up 8080")
})