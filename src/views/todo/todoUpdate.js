import React,{useRef} from "react";

// import { MDBRow, MDBCol } from "mdbreact";

const TodoUpdate = ({setTodos}) => {
     let todoValue=useRef('')

    
   
     
  return (
    <>
    <input ref={todoValue} placeholder="i want to do" />
    <button onClick={()=>{setTodos(todoValue.current.value)}}
       
    >UPDATE</button>
    </>
  );
};
export default TodoUpdate;
