import React from 'react';
import GrandChild from './GrandChild.jsx';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class ChildReact extends React.Component{
constructor()
    {
      super();
      this.submitHandler=this.submitHandler.bind(this);
    }
submitHandler() {
	console.log("Button");
	console.log(document.getElementById("search").value);
	var searchItem=document.getElementById("search").value;
	this.props.ajaxUri(searchItem);
}
 render(){
   return (
  	<div>
	    <div>
	       <TextField name="News Search" floatingLabelText="Search News" id="search"/>
				 </div>
	       <div>
	          <RaisedButton onClick={this.submitHandler}>
	             <i className="glyphicon glyphicon-search"></i>
	          </RaisedButton>
	        </div>
      
	 </div>
  )
 }
}
