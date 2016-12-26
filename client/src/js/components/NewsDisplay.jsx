import React from 'react';
import updateNews from './updateNews.jsx';
export default class NewsDisplay extends React.Component{
constructor(){
 super();
    this.DeleteNews=this.DeleteNews.bind(this);
    this.UpdateNews=this.UpdateNews.bind(this);
    this.state= {showModal: false}

}
showModal(){
this.setState({showModal:true});
}
DeleteNews()
{
$.ajax({
       url: "/news/delete",
       type: "DELETE",
       data : this.props.news,
       success : function(msg){
      console.log(msg);

          }.bind(this),
       error: function(err){
           console.log(err);
       }.bind(this)
});
}
UpdateNews()
{
$.ajax({
       url: "/news/update",
       type: "PUT",
       data : this.props.news,
       success : function(msg){
      console.log(msg);

          }.bind(this),
       error: function(err){
           console.log(err);
       }.bind(this)
});
}
render(){

return (
       <div>
         <div className="jumbotron">
             <div className="row">
                <div className="col-sm-1">
                </div>
             <div className="col-sm-5">
                   <img src={this.props.news.urlToImage} width="500px" height="300px"/>
             </div>
               <div className="col-sm-5">
                 <h4>{this.props.news.author}</h4>
                 <h4>{this.props.news.title}</h4>
                 <h4>{this.props.news.description}</h4>
                 <h4>{this.props.news.publishedAt}</h4>
                 <button type="button" className="btn btn-info" onClick={this.DeleteNews}>Delete</button>
                 <a href="#myModal" onClick={this.showModal.bind(this)} role="button" className="btn btn-primary" data-toggle="modal">Update</a>
                    <updateNews />
               </div>
           </div>
        </div>
      </div>

)
}
}
