import React from 'react';
import '../App.css';

function InactiveFriends(props){
  return(
    <div>
      <h2>Inactive Friends</h2>
      {props.inactive.map((list,index)=>(
        <div key={index} className='friendStyle'>
          <div>
            <span>
            Name: {list.firstname} {list.lastname}
            </span>
          </div>

          <div>
            <span>
            Email: {list.email}
            </span>
          </div>
         
          <div>
            <span>
            Mobile Number: {list.mobile}
            </span>
          </div>

          <div>
            <span>
            Facebook Account: {list.fbook}
            </span>
          </div>
         
          <div>
            <span>
            Instagram Account: {list.insta}
            </span>
          </div>
          
          <div>
            <span>
            Twitter Account: {list.twit}
            </span>
          </div>

          <div>
            <span>
            Address: {list.address}
            </span>
          </div>  

      
    </div>
    ) )} 

     </div>
  )
}


export default InactiveFriends;

