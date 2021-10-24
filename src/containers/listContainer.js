import React, { useState, useEffect } from "react";
import axios from 'axios';
import TodoList from '../views/todo/todoList'
import TodoUpdate from '../views/todo/todoUpdate'

const ListContainer = () => {

    const [todos, setTodos] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/todo').then(res => {
            console.log(res)
            setTodos(
                res.data
            )
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            setError(false)
        })
    }, [])

    
    const updateTodos = (todo) => {
        let todosTemp=[{"name":todo}]
        console.log(todosTemp)
        console.log("here")
        todosTemp.map(item => axios.post('http://localhost:8080/todo', item, { headers: { 'Content-Type': 'application/json' } }).then(()=>{
            todos.push(item)
            let new_arr=[...todos]
            console.log(new_arr)
            setTodos(new_arr)
            
    }))

    }
 
    return (
        
        <>
            <TodoUpdate setTodos={updateTodos} />
            <TodoList loading={loading} error={error} todos={todos} />
        </>
    );
};
export default ListContainer;