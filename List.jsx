import React from "react";

function List(props){
   
    return (
        <>
        <div className="todo_style">
        <ol>
        <li> <i className="fa fa-times" aria-hidden='true' style={{borderRadius:'50%',height:'20px',width:'20px',color:'red'}}  onClick={()=>{
            props.onSelect(props.id);
        }}/> {props.data}</li>
      </ol>
      </div>
        </>
    );
}


export default List;