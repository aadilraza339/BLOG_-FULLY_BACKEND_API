const knex = require ('./connection')

let approve = (email)=>{
    return knex.select("*").from('superAdmin').havingIn('superAdmin.email',email)
}

let update_approve = (user_id, approve)=>{
    return knex("register").update({"register.apporve":approve}).where("register.id",user_id)
}




let approve_blog = (approve_by,approve_Y_n,post_id)=>{
    console.log(approve_Y_n);
    
    return knex("create_Blog").update({"create_Blog.approve_by":approve_by,"create_Blog.approve_Y/n":approve_Y_n}).where("create_Blog.post_id",post_id)
}





module.exports = {approve, update_approve , approve_blog }

















