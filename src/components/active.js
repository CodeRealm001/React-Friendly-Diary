import React from 'react';
import '../App.css';

function ActiveFriends(props){
  
  return(
    <div>
      
      <h2>Active Friends</h2>
      {props.activeList.map((list,index)=>(
        <div key={index} className='friendStyle'>
          <div>
            <span className='nameStyle'>
             {list.firstname} {list.lastname}
            </span>
          </div>

          <div>
            <span>
              {list.email}
            </span>
          </div>
         
          <div>
            <span>
              {list.mobile}
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

         <button onClick={()=>props.onToggle(list.firstname,list.lastname,list.email,list.mobile,list.fbook,list.insta,list.twit,list.address)}>Deactivate</button>
         <button>Delete</button>
        </div>  
      )
      )}
    </div>
  )
}


export default ActiveFriends;