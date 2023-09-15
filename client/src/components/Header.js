import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Header extends Component{
  
 logout  =async ()  => {
  const res = await axios.get('http://localhost:5000/api/logout');


};
  renderContent(){
    switch(this.props.auth){
      case null:
        return;
        case false:
          return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return <li><a onClick={()=>this.logout()} >Logout</a></li>;

            
    }
  }
    render(){
        return(
           <nav>
            <div className="nav-wrapper">
              <a className="left brand-logo">
               Emaily
             </a>
              <ul className="right">
              {this.renderContent()}
              </ul>
            </div>
          </nav>
          
        );
    }
}
function mapStateToProps({auth}){
return {auth}
}

export default connect(mapStateToProps)(Header);