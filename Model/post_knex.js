const knex = require ('./connection')


let create_blog = (data) =>{
    return knex('create_Blog').insert({"Author_name":data.Author_name,"Title":data.Title,"Content":data.Content,"thumbnail":data.thumbnail,"Date":new Date()})
}


let get_articles = () =>{
    return knex ('create_Blog').select('post_id','Author_name',"Title","Content","thumbnail","Date","approve_by").orderBy('Date')
    .where("create_Blog.approve_Y/n",1)
}


let get_articles_id = (post_id) =>{
    console.log(post_id);
    
    return knex ('create_Blog').select('post_id','Author_name',"Title","Content","thumbnail","Date","approve_by")
    .where("create_Blog.approve_Y/n",1)
    .where("create_Blog.post_id",post_id)
}


module.exports = {create_blog, get_articles, get_articles_id}