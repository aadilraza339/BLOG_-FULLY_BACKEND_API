const knex =require ('./connection')


knex.schema.hasTable('create_Blog').then(function (exists) {
    if (!exists) {
    return knex.schema.createTable('create_Blog', (table) => {
        table.increments('post_id')
        table.string('Author_name')
        table.string('Title')
        table.string('Content')
        table.string('thumbnail')
        table.dateTime('Date')
        table.string('approve_by')
        table.string('approve_Y/n')
           
}) 
} else {
    console.log('user_post__table ALREADY EXIST!');
}
})