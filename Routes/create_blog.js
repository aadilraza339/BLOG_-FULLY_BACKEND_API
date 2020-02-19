const knex = require ('../Model/post_knex')
module.exports = (create, jwt)=>{
    create.get('/create_blog',(req,res)=>{
        var token=req.headers.cookie.split(" ")
        token=(token[token.length-1]).slice(0,-10)
        jwt.verify(token, 'secret', (err,user_detail)=>{
            if(!err){
                var create_post_data = req.body
                knex.create_blog(create_post_data)
                .then(()=>{
                    res.send("uploaded")
                })
                .catch((err)=>{
                    res.send(err)
                })
            }
            else{
                res.send({"erer":err})
            }
        })
    })

    create.get('/articles',(req,res)=>{
        knex.get_articles()
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        })
        
    })

    create.get('/articles/:id',(req,res)=>{
        knex.get_articles_id(req.params.id)
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        })
        
    })
    
}