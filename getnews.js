

const request =require('request');

const url = "http://newsapi.org/v2/top-headlines?country=eg&apiKey=18d7c9e1c5dd402cb838e7d9dcc1f9c4"

const fetchapi=(callback)=>{
request({url,json:true},(error,res)=>{

    if(error){
        console.log(error)
        callback(error)
    }
    else {
        console.log("fetch have been orderd")
        callback(res.body)
    }
})}


module.exports=fetchapi