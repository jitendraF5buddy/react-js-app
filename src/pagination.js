import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Addcontact from './component/Addcontact';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Pagination from "react-js-pagination";


import './App.css';

class App extends Component {


  constructor(props){
    super(props);
    
    this.state = {
          title : "This is my first title",
          recordArray : [],
          counterg : 0,
          activePage: 0,
          totalrecord : 0,
          per_page:6
      }

      this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
     let urli = "http://local-business.mywebprovider.com/admin/api/business-list?page="+pageNumber+"&per_page="+this.state.per_page;
     fetch(urli).then(res => res.json()).then((result)=>{
        this.setState({
                recordArray:result.data,
                totalrecord:result.total,
                activePage: pageNumber
            })
      });
  }

  componentWillMount(){
    let url = "http://local-business.mywebprovider.com/admin/api/business-list?per_page="+this.state.per_page;
      fetch(url).then(res => res.json()).then((result)=>{
        debugger;
          this.setState({
              recordArray:result.data,
              totalrecord:result.total,
              activePage: 1
          })
    });
  }

  render() {

    let result1 = this.state.recordArray;
    const tableb = result1.map((record => 
      <tr key={record.business_id}>
      <td>{record.business_name}</td>
      <td>{record.email}</td>
      <td>{record.country}</td>
      <td>{record.state}</td>
      <td>{record.phone}</td>
      <td><button>Delete</button></td>
    </tr>
     ));

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
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Country</th>
                      <th>State</th>
                      <th>Phone</th>
                      <th>Action</th>
                      </tr>
                    {tableb}
                    </table>

                    <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.per_page}
          totalItemsCount={this.state.totalrecord}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange} />
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
