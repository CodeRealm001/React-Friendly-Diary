import React from 'react'

function Friends(props){
  return(
    <div>
      <span>
        {props.friendsList.map((items,index)=>(
        <div key={index}>
        {items.name} <button>Delete</button>
        </div>
        ))}
      </span>
    </div>
  )

}


export default Friends;