
import React from 'react';
import {browserHistory} from 'react-router';
import TextField from 'material-ui/TextField';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


export default class login extends React.Component
{

/*this is a ajax function for the URL of saving of login ID and password*/
Loginfun()
{
  var uname=document.getElementById('userid').value;
  var pass=document.getElementById('password').value;


$.ajax({
url: "/users/login",
type: "POST",
data:'username='+uname+'&password='+pass,
success : function(msg)

{
console.log("successfully loged to database");

 alert("succesfully loggedin");
 browserHistory.push('/home');
}.bind(this),
error: function(err){
 alert("check the username and password");
}.bind(this)
});

}
/*closed ajax function*/



render()
{
   return(
 <div>
   <Card className="container">
    <h2 className="card-heading">Login</h2>
        
               <center>
               <div className="field-line">
                 <TextField type="text" class="form-control" id="userid" name="User name" floatingLabelText="User name"/><br/><br/>
               </div>
               <div className="field-line"> 
                 <TextField type="password" class="form-control" id="password"  name="Password" floatingLabelText="Password"/>
              </div>   
                          
                   <div className="checkbox">
                   <input type="checkbox" /> remember me?
                       </div>
                   </center>
                         <RaisedButton label="Log in" onClick={this.Loginfun.bind(this)} style={{"margin-left":"45%"}}/>
             
   </Card>
</div>


       )
}
}
