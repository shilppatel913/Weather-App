if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config() //this means if we are not in production just configure the env file
}

const DARK_SKY_API_KEY = process.env.DARK_SKY_API_KEY
const express=require('express')
const app=express();

app.use(express.json());
app.use(express.static("public"))

app.post('/weather',(req,res)=>{

})

app.listen(3000,()=>{
    console.log('Server is listening')
})