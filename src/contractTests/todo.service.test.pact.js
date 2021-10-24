import TodoService from './todo.service';
import * as Pact from '@pact-foundation/pact';
import Todo from '../classes/todo';
import axios from 'axios';

describe('TodoService API', () => {

    let todoService = new TodoService('http://localhost',global.port );
    
    describe('createTodo()', () => {

        beforeEach((done) => {
  
            const contentTypeJsonMatcher = Pact.Matchers.term({
                matcher: "application/json; *charset=utf-8",
                generate: "application/json; charset=utf-8"
            });
          
            global.provider.addInteraction({
                state: 'provider allows todos creation',
                uponReceiving: 'a GET request to create a todo',
                withRequest: {
                    method: 'GET',
                    path: '/todo',
                    headers: { "Accept": "application/json, text/plain, */*" },
                   
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: Pact.Matchers.somethingLike([
                        new Todo("1",'Superman')])
                }
             }).then(() => done());
        });
    
        it('sends a request according to contract', (done) => {
            todoService.createTodo(new Todo(1,'Superman'))
                .then(response => {
                    const hero = response.data;
                    expect(hero.name).toEqual("Superman");
                }).catch((err)=>{
                    console.log(err)
                })
                .then(() => {
                    global.provider.verify()
                        .then(() => done(), error => {
                            done.fail(error)
                        })
                });
        });
    });

});