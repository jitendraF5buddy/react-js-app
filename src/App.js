import React, { Component } from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import Header from './component/Header';
import Footer from './component/Footer';
import Addcontact from './component/Addcontact';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Bloglist from "./Bloglist";
import Blog_post from "./Blog_post";
import MenuItem1 from "./MenuItem1";
import Homepage from "./Homepage";
import Add from "./Add";

import Profilestore from './stores/Profilestore';

import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
          title : "This is my first title",
          recordArray : [],
          isLoggedIn:false,
          profile : Profilestore.tgetAll(),  
    }

    this.login = this.login.bind(this);  
  }

  componentWillMount(){
       debugger;
      Profilestore.on("change", () => {
        debugger;
        this.setState({
          isLoggedIn: Profilestore.login()
        })
      })
  }

  login = (props) => {
    debugger;
      Profilestore.on("change", () => {
        this.setState({
          isLoggedIn: Profilestore.login()
        })
      })

  }

  logout = (props) => {
    this.setState({
        isLoggedIn:false
    })
  }


  render() {
    let checklogin;
    if(this.state.isLoggedIn){
      checklogin = "Welcome to F5buddy";
    }else{
       checklogin = "Please login";
    }

    return (
      <div className="App">
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                React & Material-UI Sample Application 
                </Typography>
               
            </Toolbar>
        </AppBar>
          
            <div class="jumbotron">
              <div class="container">
              <MenuItem1 />
              {checklogin}
              </div>
            </div>
           <Router>

            <div>
              <Link to="/"> Blogpage </Link>
              <Link to="/home"> Homepage </Link>
              <Link to="/add"> Add User </Link>

              <Route exact path='/' component={Blog_post} />
              <Route exact path='/home' component={Homepage} />
              <Route exact path='/add' component={Add} />
            </div>  
           </Router> 

            <div class="container">
                <div className="row">
                 
                  <div className="col-sm-12">
                   <div class="table-responsive"> 
                     
                     
                      <button onClick={this.login.bind(this)}>Login</button>
                  </div>
                  </div>
                </div>   
             


            </div>        
          <Footer />
          
      </div>
    );
  }
}


export default App;