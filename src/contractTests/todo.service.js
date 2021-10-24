import Todo from "../classes/todo";
const axios = require('axios');
import adapter from 'axios/lib/adapters/http';

class TodoService {

    constructor(baseUrl, port){
        this.baseUrl = baseUrl;
        this.port = port;
    }

     createTodo(todo) {
        return axios.request({
            method: 'GET',
            url: `/todo`,
            baseURL: `${this.baseUrl}:${this.port}`,
            headers: {
                "Accept": "application/json, text/plain, */*"
            },
           
        }, adapter);
    };

}

export default TodoService;