var knex = require('knex')({
  client:"mysql",
  connection:{
      user:"root",
      host:"localhost",
      password:"'",
      database:"Blogging"
  }
})

// app.get('/schools', function(req, res) {

  
// });

// knex.select("*")
//   .from('register', 'superAdmin')
//   .then(async function(schools, students) {
//     await 
//     console.log('schools', {
//         schools: schools,
//         students: students
//     });
    
//   }).catch(function(error) {
//       console.log(error);
//   });


// knex.select()
// .from('register')
// .then(function(schools){
//     knex.select()
//     .from('superAdmin')
//     .then(function(students) {
//         console.log('schools', {
//           students: students,
//           schools: schools
//       });
//         ;
//     });
// }).catch(function(error) {
//     console.log(error);
// });

module.exports = knex;