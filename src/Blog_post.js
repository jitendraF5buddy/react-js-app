import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Bloglist from './Bloglist';




class Blog_post extends Component {

  constructor(props){
    super(props);
    
      this.state = {
          title : "This is my first title",
          blogpost : []    
      }

  }

  componentWillMount(){
    fetch("http://localhost/wordpress/index.php/wp-json/wp/v2/posts").
    then(res => res.json()).
    then((result) => {
        this.setState({
            blogpost:result
        });
    })
  }

  render() {
    debugger;
    return (
      <div className="App">
            <div class="container">
                <div className="row">
                 
                  <div className="col-sm-12">
                     <Bloglist blogprops={this.state.blogpost} />

                  </div>
                </div>
            </div>               
      </div>
    );
  }
}


export default Blog_post;