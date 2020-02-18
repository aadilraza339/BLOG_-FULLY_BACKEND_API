const knex=require("./connection")

let superAdmin = (email)=>{
    return knex.select("*").from('superAdmin').havingIn('superAdmin.email',email)
}

let login = (email)=>{
    return knex.select("*").from('register').havingIn('register.email',email)

}

let register = (data)=>{
    return knex('register').insert({user_Name:data.user_Name ,email:data.email ,password:data.password})
}


let Bio = (Bio_data) => {
    return knex('Bio_detail').insert({'data_brith':Bio_data.data_brith,"user_id":Bio_data.user_id,"email":Bio_data.email,"likes":Bio_data.phone_number})
}



module.exports={superAdmin, register, login , Bio};


