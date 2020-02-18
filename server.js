var express = require('express');
var app = express()
app.use(express.json())

const jwt=require("jsonwebtoken")  



app.use('/',login=express.Router());
require('./Routes/login')(login,jwt)


app.use('/',approve=express.Router());
require('./Routes/approve')(approve,jwt)

app.use('/',create=express.Router());
require('./Routes/create_blog')(create,jwt)




app.listen(8000,()=>{
    console.log("server is listening in this port 8000....")
})