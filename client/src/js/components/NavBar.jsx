
var React = require('react');
var {Link} = require('react-router');

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/favNews">Favourites</Link></li>
              <li><Link to="/login">login</Link></li>
              <li><Link to="/">LogOut</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
