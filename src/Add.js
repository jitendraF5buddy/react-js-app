import React, { Component } from 'react';



class Add extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            id:'',
            contact:'',
            address:'',
            userlist : [
              {'id':0,name : 'jitupatel',email:'jitu@gmail.com',contact:'4545353',address:'fdsfdsfds'},
              {'id':1,name : 'vinod',email:'vinod@gmail.com',contact:'534534',address:'fds fsf'}
            ]
        }

        this.handleChange = this.handleChange.bind(this);
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  submitHander = (event) => {
    event.preventDefault();
    if(this.state.id===""){  
        const lists= this.state.userlist;
        const list = {id:lists.length,
          name:event.target.name.value,
          email:event.target.email.value,
          contact:event.target.contact.value,
          address:event.target.address.value,
        };
        this.setState({
            userlist : [...lists,list]
        });
    }else{
        debugger;

        const updaterecord = {
          ...this.state.userlist[this.state.id]
        };

        updaterecord.name = event.target.name.value;
        updaterecord.email = event.target.email.value;
        updaterecord.contact = event.target.contact.value;
        updaterecord.address = event.target.address.value;

        const userlist = [...this.state.userlist];
        
        userlist[this.state.id] = updaterecord;
        this.setState({
            userlist:userlist
        })

        this.setState({
            id:'',
            name:'',
            email:'',
            contact:'',
            address:''
        })
    }   
    debugger;
  }

  deleteHandler = (keys) => {

    let confirm = window.confirm("Are you sure you want to delete");
    if(confirm){
      let listrecord = this.state.userlist;
      let delete_record = listrecord.findIndex(function(derecord){
            return derecord.id === keys;
        });

      listrecord.splice(delete_record,1);
      this.setState({
        userlist : listrecord
      });
    }
  }

  editHandler = (keys) => {
    debugger;
      let userlist = this.state.userlist;
      let editusers = userlist.findIndex(function(editlist){
          return editlist.id === keys;
      });
      let editlist = this.state.userlist[editusers];
      //console.log(editlist);
      this.setState({
        id: editlist.id,
        name:editlist.name,
        email:editlist.email,
        contact:editlist.contact,
        address:editlist.address
      });
  
  }

  render() {
 

  const listrender = this.state.userlist.map((list)=>{
      return (<tr >
        <td>{list.id}</td><td>{list.name}</td>
        <td>{list.email}</td>
        <td>{list.contact}</td>
        <td>{list.address}</td>
        <td><button onClick={this.deleteHandler.bind(this,list.id)}>Delete</button>
        <button onClick={this.editHandler.bind(this,list.id)}>Edit</button>
        </td>
        </tr>)
  });

    return (
              <div>  
                 <form onSubmit={this.submitHander.bind(this)}>
                    <label>First Name</label> <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)}  />
                    <label>Email</label> <input type="text" name="email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
                    <label>Contact</label> <input type="text" name="contact" value={this.state.contact} onChange={this.handleChange.bind(this)}/>
                    <label>Address</label> <input type="text" name="address" value={this.state.address} onChange={this.handleChange.bind(this)}/>

                    <button>Add</button>
                 </form>
                 <br />
                 <br />
                 <table border="1" mat-table>
                  <tr><td>Id</td><td>Name</td><td>Email</td><td>Contact</td><td>Address</td><td>Delete</td></tr>
                  {listrender}
                 </table>
              </div>
      
    );
  }
}


export default Add;