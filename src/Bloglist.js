import React, { Component } from 'react';



class Bloglist extends Component {

  render() {
    
    debugger;
    const map = this.props.blogprops.map((data)=> {
        return (<div>

             <h3>{data.title.rendered}</h3>
                <div>{data.content.rendered}</div>
                <div> {data.content.rendered} </div>
                <p><b>Date</b> : {data.date}</p>
          </div>)
    });

    return (
              <div>  
                  {map}
              </div>
      
    );
  }
}


export default Bloglist;