import React from 'react';
import {Link}  from 'react-router-dom';
import ReactDOM from 'react-dom';

class Navbar extends React.Component{
    
    render(){
        return(
            <nav class="navbar navbar-default navbar-fixed-top custom-header">
        <div class="container-fluid">
            <div class="navbar-header"><Link to="/dashboard" ><a class="navbar-brand navbar-link" href="#">Task<span class="text-muted title-side">Board </span> </a></Link>
                <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
            </div>
            <div class="collapse navbar-collapse" id="navbar-collapse">
                <ul class="nav navbar-nav links">
                    <li role="presentation" class="navbar-items"><a href="#"> </a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#"> <span class="caret"></span><img src="assets/img/avatar.jpg" class="dropdown-image" /></a>
                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                            <li role="presentation" class="topbar-items"><Link to="/dashboard" >DashBoard <i class="glyphicon glyphicon-th"></i></Link></li>
                            <li role="presentation"><Link to="/settings" >Settings <i class="glyphicon glyphicon-wrench"></i></Link></li>
                            <li role="presentation" class="active"><Link to="/" >Logout <i class="glyphicon glyphicon-off"></i></Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>  
        );
        
    }
    
}
export default Navbar;