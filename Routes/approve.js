const Knex =require ('../Model/approve_knex')
module.exports = (approve , jwt) =>{
    approve.post('/approve',(req,res)=>{
        var user_id = req.body.user_id
        var approve = req.body.approve
        var token=req.headers.cookie.split(" ")
        token=(token[token.length-1]).slice(0,-10)
        jwt.verify(token, 'secret', (err,user_detail)=>{
            if(!err){
                var superAdmin = (user_detail['token'][0]['email'])
                Knex.approve(superAdmin)
                .then((check_exise)=>{
                    if(check_exise.length==0){
                        res.send("you don't have permission to access")
                    }
                    else
                    {
                        Knex.update_approve(user_id, approve)
                        .then((data)=>{
                            res.send("done")
                        })
                    }
                })
            }
            else{
                res.send(err)
            }  
        })
    })

    approve.post('/approve_art',(req,res)=>{
        var token=req.headers.cookie.split(" ")
        token=(token[token.length-1]).slice(0,-10)
        jwt.verify(token, 'secret', (err,user_detail)=>{
            if(!err){
                if(user_detail['token'][0]['approve']==1){
                    res.send(user_detail)

                    var user_email = user_detail['token'][0]['email']
                    var user_name = user_detail['token'][0]["user_Name"]
                    var post_id = req.body.post_id
                    var approve = req.body.approve
                    Knex.approve(user_email)
                    .then((data)=>{
                        if(data.length==0){
                            res.send("you don't have permission to access")
                        }
                        else if (data !=0){
                            Knex.approve_blog(user_name, approve, post_id)
                            .then((now_approve)=>{
                                res.send("done")
                            })
                            .catch((err)=>{
                                res.send(err)
                            })
                        }
                    })
                }
                else{
                    res.send("you are not admin")
                }
            }
            else{
                res.send({"errdff":user_detail})
            }
        })  
    })
}


