import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Addcontact from './component/Addcontact';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


import './App.css';

class App extends Component {


  constructor(props){
    super(props);
   
    this.state = {
          title : "This is my first title",
          recordArray : [],
          counterg : 0
      }
  }



  componentWillMount(){
    let url = "http://local-business.mywebprovider.com/admin/api/business-list";
      fetch(url).then(res => res.json()).then((result)=>{
        debugger;
          this.setState({
              recordArray:result
          })
    });
  }




  render() {

    const result1= this.state.recordArray.data;
    const listItems = "";
    if(result1){
          const listItems = result1.map((number) =>
        <li key={number.toString()}>
          {number}
        </li>);
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
               <p>Create Pagination</p>   
              </div>
            </div>

            <div class="container">
                <div className="row">
                 
                  <div className="col-sm-12">
                   <div class="table-responsive"> 
                    <table className="table table-bordered">
                    <tr><th>Email</th><th>Password</th><th>City</th></tr>
                  
                    </table>
                   {listItems}
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
import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Addcontact from './component/Addcontact';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


import './App.css';

class App extends Component {


  constructor(props){
    super(props);
     this.formSubmit = this.formSubmit.bind(this);
     this.updateform = this.updateform.bind(this);
     this.deleterec = this.deleterec.bind(this);
    this.state = {
          title : "This is my first title",
          recordArray : [],
          counterg : 0
      }
  }

   formSubmit = (event) => {
    debugger;
    event.preventDefault();
   
    const request_data = new FormData(event.target);

    let email = request_data.get('email');
    let password = request_data.get('password');
    let city = request_data.get('city');
    let state = request_data.get('state');
    let address = request_data.get('address');
    let address2 = request_data.get('address2');
    let counterg = this.state.counterg; 
    console.log();
    let addrecord = {
      email,
      password,
      address,
      address2,
      city,
      state,
      counterg
    }
    counterg+=1;

    let record = this.state.recordArray;
    record.push(addrecord);

    this.setState({
      recordArray : record,counterg
    })

  }

  updateform = (event) => {
    
  }

  deleterec = (dkey) => {
    debugger;

    let conf = window.confirm("Are you sure you want to delete");
    if(conf===false){
      return false;
    }



      let recordArray =  this.state.recordArray;
      let deleterecord = recordArray.findIndex(function(resultfind){
          return resultfind.business_id === dkey;
      })
     recordArray.splice(deleterecord,1);
     this.setState({
        recordArray : recordArray
     });
  }

  componentWillMount(){
    let url = "http://local-business.mywebprovider.com/admin/api/business-list";
      fetch(url).then(res => res.json()).then((result)=>{
        debugger;
          this.setState({
              recordArray:result
          })
    });
  }




  render() {


          let tableb ="";
          let recordData = this.state.recordArray.data;
          debugger;
          if(recordData){
            debugger;
            let tableb = recordData.map((ddata => <li>fdsfdsfd</li>));
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
                <h3>Hello, world!  </h3>
               
              </div>
            </div>

            <div class="container">
                <div className="row">
                  <div className="col-sm-6">
                    <Addcontact myformsubmit={this.formSubmit}/>
                  </div>
                  <div className="col-sm-6">
                   <div class="table-responsive"> 
                    <table className="table table-bordered">
                    <tr><th>Email</th><th>Password</th><th>City</th></tr>
                    
                    </table>
                    {tableb}
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
