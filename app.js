const { Console } = require('console')
const express =require('express')
const  hbs =require('hbs')
const path =require('path')
const request =require('request')
const getdata=require('./getnews')

const app =express();

const publicDirectort=path.join(__dirname,'./public')
console.log(publicDirectort)
app.use(express.static(publicDirectort))

app.set('view engine', 'hbs');
const viewPath=path.join(__dirname,'./views')
app.set('views',viewPath);
const partialpath =path.join(__dirname,'./partials')
hbs.registerPartials(partialpath);










app.get('/',(req,res)=>{

   getdata((data)=>{

    let article =data.articles

    res.render('index',{article})
   
    


})})








app.listen(8082,()=>{
    console.log('server run')
})

