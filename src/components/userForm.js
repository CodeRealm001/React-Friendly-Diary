import React from 'react';
import '../App.css';



function UserForm(props){
  return(
    <div className='userContainer'>
        <div>
          <label> First Name: 
            <input type="text"
                   name="firstname"
                   onChange ={props.action}
                   required
            />
          </label>
        </div>

        <div>
          <label>Last Name:
            <input type="text"
                   name="lastname"
                   onChange ={props.action}
                   required
                  
              />
          </label>
        </div>
              
        <div>
          <label> Email:
            <input type="text"
                   name="email"
                   onChange ={props.action}
                   required
                      
            />
          </label>
        </div>
    

        <div>
        <label> Mobile:
            <input type="text"
                   name="mobile"
                   onChange ={props.action}
                    
            />
        </label>
        </div>
      
        <div>
        <label> Facebook:
          <input type="text"
                 name="fbook"
                 onChange ={props.action}
                
          />
          </label>    
        </div>

        <div>
        <label> Instagram:
          <input type="text"
                 name="insta"
                 onChange ={props.action}
                    
          />
          </label>    
        </div>

        <div>
        <label> Twitter:
          <input type="text"
                 name="twit"
                 onChange ={props.action}
                    
          />
          </label>    
        </div>


        <div>
        <label> Address:
          <input type="text"
                 name="address"
                 onChange ={props.action}
                 onSubmit={()=>props.clear}
                                    
          />
          </label>    
        </div>
    
      <button onClick={props.buttonAction} >Add</button>
    </div>
  )
}





export default UserForm;