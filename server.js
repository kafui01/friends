const express = require('express');
const app = express();

app.use(express.static('static_files'));

const fakeDatabase = 
{
  'kafui': {job:'professor', pet:'Tulip.jpg'},
  'wisdom': { job: 'student', pet: 'Jellyfish.jpg'},
  'priscilla': { job: 'engineer', pet: 'Koala.jpg'},
  'elikem': { job: 'developer', pet: 'Penguins.jpg' }
};

app.get('/users', (req, res) =>{
  console.log('running app.get/users');
   const allUsernames = Object.keys(fakeDatabase);
   console.log('allUsernames is: ', allUsernames);
   res.send(allUsernames);
});

app.get('/users/:userid', (req, res) => {
  const nameToLookup = req.params.userid;
  const val = fakeDatabase[nameToLookup]
  console.log(nameToLookup, '->', val);
  if(val){
    res.send(val)
  }else{
    res.send( `${nameToLookup} does not exist`)
  }
});

app.listen(3001, () => {
  console.log('server started on 3001')
})