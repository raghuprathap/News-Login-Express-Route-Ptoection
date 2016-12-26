var express = require('express');
var router = express.Router();
var userauthentication = require('../modeles/userAuthentication.js');
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
var connectflash=require('connect-flash');
/* GET users listing. */
router.get('/view', function(req, res, next) {
 userauthentication.find({},function(err,user){
   if(err) throw err;
   res.send(user);
 })
 //res.send('respond with a resource');
});
router.post('/login',
passport.authenticate('local', { failureFlash:'Login Failed', successFlash: 'Login success' }),

function(req, res) {
  
  console.log("inside login route");
res.send('welcome to login');
});

//router.get('/logout', function(req, res) {

// console.log("Inside logout");
 //req.logout();

 //res.send({redirect: '/users/logout'});
// res.redirect("/login");
 //res.send("hi");


//res.send('respond with a resource');
//});
router.post('/save', function(req, res) {

  console.log("Inside Post");
  if(req.body)
  {
      //console.log("Inside Body");
      var userdetails = new userauthentication();
      userdetails.username = req.body.username;
      userdetails.password = req.body.password;
      //console.log("UserName"+userdetails.username);
      userdetails.save(function(err) {
          if(err)
          {
              res.send(err);
          }
          else
          {
              res.send("inserted to database")
          }

      });
  }


});



/* GET users listing. */


router.post('/update', function (req, res) {


   console.log("Inside post Im here");
 var data= new userauthentication();
 data.username=req.body.username;
 data.password=req.body.password;

 console.log(req4);

   modelObj.save(function (err) {if (err) console.log ('Error on save!')});
1
   res.send("Hello from express all...data saved");
 //next() // pass control to the next handler
})


module.exports = router;
