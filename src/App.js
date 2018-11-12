import React from 'react';
import UserForm from './components/userForm';
import ActiveFriends from './components/active';
import InactiveFriends from './components/inactive';



class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      member:[],
      firstname:"",
      lastname:"",
      email:"",
      mobile:"",
      fbook:"",
      insta:"",
      twit: "",
      address:"",
      
   }
   this.handleAdd=this.handleAdd.bind(this);
   this.handleChange=this.handleChange.bind(this);
   this.handleClear=this.handleClear.bind(this);
   this.handleToggle=this.handleToggle.bind(this);
 }
 
  handleAdd(){
    if(this.state.firstname === "" || this.state.lastname === ""||this.state.email === ""||this.state.fbook === ""||this.state.twit === "" || this.state.address === ""|| this.state.twit === ""){
      return 0;
    }
   
      this.setState((prevState)=>{
        return{
           /// Check if the User already exist than add users
             member: prevState.member.filter((friends)=>
             friends.firstname !== this.state.firstname)
             .concat([{
             firstname:this.state.firstname,
             lastname:this.state.lastname,
             email:this.state.email,
             mobile:this.state.mobile,
             fbook:this.state.fbook,
             insta:this.state.insta,
             twit:this.state.twit,
             address:this.state.address,
             active: true
             }]) 
             //#endregion
             
           }
          
       }
      )
      
  }

  handleChange(e){
    const value = e.target.value;
    const name= e.target.name;
    this.setState({
      
         [name]:value
      })
  }
  
  handleToggle(...list){
    this.setState(prevState=>{
      const friendName = prevState.member.find((listNames)=> 
      listNames.firstname === list[0]
      )
    return{
      member: prevState.member.filter((friend)=>(
        friend.firstname !== list[0] && friend.lastname !== list[1]
      ))
        .concat([{
        firstname:list[0],
        lastname:list[1],
        email:list[2],
        mobile:list[3],
        fbook:list[4],
        insta:list[5],
        twit:list[6],
        address:list[7],
        active: !friendName.active
      }])
    }
  })

  }

  handleClear(e){
    e.target.value = " ";
  }

  render() {
    console.log(this.state.member)
    return (
     <div>
       <UserForm 
        action={this.handleChange}
        clear={this.handleClear}
        buttonAction={this.handleAdd}/>
        <hr/>
        <ActiveFriends 
          activeList={this.state.member.filter(status=> status.active===true)}
          onToggle={this.handleToggle}
        />
        <hr/>
        <InactiveFriends inactive={this.state.member.filter(status=> status.active === false)}/>
    </div>  
     
    );
  }
}
export default App;
