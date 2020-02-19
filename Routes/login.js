const knex=require("../Model/login_knex")
module.exports=(app,jwt)=>{
    app.post('/register',(req,res)=>{
        var body_data =  {
            user_Name:req.body.user_Name,
            email:req.body.email,
            password:req.body.password
        }
        
        knex.register(body_data)
        .then(()=>{
            var token = jwt.sign({
                "token": body_data
              }, 'secret');
              res.cookie(token)
              res.send('create...')
        })
        .catch((err)=>{
            res.json({"message":err})
        })
    })

    app.get('/login',(req,res)=>{
        let email = req.body.email
        let password = req.body.password
        knex.superAdmin(email)
        .then((data)=>{
            if(data.length==0){
                knex.login(email)
                .then((register_data)=>{
                    if(register_data.length==0){
                        res.send('check your email')
                    }
                    else if (password==register_data[0]['password']){
                        var token = jwt.sign({"token":register_data},"secret")
                        res.cookie(token)
                        res.send("login")
                    }
                    else{
                        res.send("check your password")
                    }   
                })
                .catch((err)=>{
                    res.send(err)
                })
            }
            else if (password==data[0]['password']){
                var token = jwt.sign({"token":data},"secret")
                res.cookie(token)
                res.send("login")
            }
            else{
                res.send("check your email or password")
            } 
        })
        .catch((err)=>{
            res.send(err)
        })
    })   
}