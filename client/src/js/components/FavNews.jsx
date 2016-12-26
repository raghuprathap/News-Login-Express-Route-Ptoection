var React = require('react');
import NewsDisplay from './NewsDisplay.jsx';
export default class FavNewsComponent extends  React.Component{
constructor(){
super();
this.Favourites=this.Favourites.bind(this);
this.state={str:[]};
}
componentDidMount()
 {
    this.Favourites();
 }
Favourites() {
console.log("Inside fav");
  $.ajax({
    url: "/news/view",
    type: "GET",
    dataType: 'JSON',
    success : function(msg){
      console.log("viewed");
      this.setState({str:msg});
    }.bind(this),
     error: function(err){
    console.log("Error occured retrive "+err);
   }.bind(this)
  });
}
render()
 {
   var object=this.state.str.map(function(e){
   return(
    <NewsDisplay news={e} />
   );
  }
 );
return(
  <div>
    {object}
  </div>
  )
 }
}
