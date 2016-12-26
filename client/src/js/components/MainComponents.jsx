import React from 'react';
import ReactDOM from 'react-dom';
import ChildReact from './ChildReact.jsx';
import Sibling1 from './Sibling1.jsx';
export default class mainComponents extends React.Component{
		constructor() {
			super();
			this.state={Msg:[]};
			this.fetchNewsFromExternalAPI=this.fetchNewsFromExternalAPI.bind(this);
		}
	  	fetchNewsFromExternalAPI(url) {
		    console.log("Value of url is "+url);
		    $.ajax({
				     url: "https://newsapi.org/v1/articles?source=" + url + "&sortBy=top&apiKey=58104e4d8cec41b1837916c6436b0198",
				     type: "GET",
				     dataType: 'JSON',
				     success : function(msg) {
				        /*msg reprewsents JSON data of news headlines sent back by external API*/
				        var len=msg.articles.length;
				        console.log("Articles"+msg);
				        /*JSON.stringify(msg)
				        console.log(" Msg is  " +msg.articles[0].title);*/
				        this.setState({Msg:msg.articles})
				     }.bind(this),
    			     error: function(err) {
				         console.log("Error occured "+err);
				     }.bind(this)
		 });
}
		render(){
            console.log("State message"+this.state.Msg);
		      	return (
				      	<div>
				      		 <ChildReact ajaxUri={this.fetchNewsFromExternalAPI}/>
				      		 <Sibling1 onData={this.state.Msg} />
				      	</div>
		          )
	       	}
}
