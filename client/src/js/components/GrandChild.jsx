import React from 'react';
export default class GrandChild extends React.Component{
constructor()
    {
      super();
      this.saveButton=this.saveButton.bind(this);
    }
 saveButton(){
      console.log("Value of url is ");
		    $.ajax({
				     url: "/news/save",
				     type: 'POST',
				     data:this.props.sentData,
				     success : function(){
				        /*msg reprewsents JSON data of news headlines sent back by external API*/
				        console.log(" Msg is Succesfully Saved ");
				     }.bind(this),
				     error: function(err){
				         console.log("Error occured "+err);
				     }.bind(this)
		 });
 }
render(){
return (
  <div>
   <section className="container" >
	               <section className="jumbotron" style={{"margintop": "10%"}}>
	                   <h4>{this.props.sentData.author}</h4>
	                   <img src={this.props.sentData.urlToImage} alt="" style={{"width": "250px"}}/>
	                   <h4>{this.props.sentData.title}</h4>
	                   <h4>{this.props.sentData.description}</h4>
	                   <h4>{this.props.sentData.url}</h4>
	                   <h4>{this.props.sentData.publishedAt}</h4>
	               </section>
	               <input type="button" value="Save"  onClick={this.saveButton} />
	</section>
 </div>
  )
 }
}
