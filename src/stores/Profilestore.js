import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class Profilestore extends EventEmitter {
	constructor(){
		super();
		this.profile = [{
			'id':12,
            'name':'Jitendra Patel',
            'isLoggedIn' : false
		}]
	}

	tgetAll(){
		return this.profile;
	}
	
	checkLogin(){
		return this.profile[0].isLoggedIn;
	}

	login(){
		this.profile.push({'isLoggedIn':true});
		this.emit("change");
	}

	logout(){
		this.profile.push({'isLoggedIn':false});
		//this.emit("change");
	}

	handleActions(action){
		switch(action.type){
			case "LOGIN" : {
				this.login()	
			}
		}
		console.log("this is action",action);

	}
}

const profilestore = new Profilestore;
dispatcher.register(profilestore.handleActions.bind(this));

window.dispatcher = dispatcher;
export default profilestore;