import React from "react";
// import axios from 'axios';
// import { MDBRow, MDBCol } from "mdbreact";

const TodoList = ({loading,error,todos}) => {
     if(loading) {
    return <div className="loading" />
  }
  if(error) {
    return <div className="error" />
  }
   
  return (
    
      <ul className="list">
        <h2 className="title"> My Todos</h2>
       
        {todos.map((item) => {
          return <li className="todos">{item.name}</li>;
        })}
      </ul>
   
  );
};
export default TodoList;
