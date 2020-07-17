// core module link pana public dir ah
const path=require('path')

const express=require('express')

const app=express()
// path set pana html file ku
const pathway=path.join(__dirname,'../public')

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



app.listen(8080,()=>{
    console.log("server is up 8080")
})