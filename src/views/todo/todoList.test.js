import React from 'react'
import {shallow} from 'enzyme'
import TodoList from './todoList'
describe('loading here ', () => {
  it('Shows a loading bar', () => {
    const props = {
      loading: true
    }
    const wrapper = shallow(<TodoList {...props}/>)
    expect(wrapper.find('.loading').length).toEqual(1)
  })
})
describe('Network Error check', () => {
it('Shows a error ', () => {
  const props = {
    error: {
      "message": "Something went wrong"
    }
  }
  const wrapper = shallow(<TodoList {...props}/>)
  expect(wrapper.find('.error').length).toEqual(1)
})
})

describe('Todo list Integration Test', () => {
it('Shows a list of todos', () => {
  const props = {
    todos: [
      {name: "Refactoring"},
      {name: "Building test cases"}
    ]
  }
  const wrapper = shallow(<TodoList {...props}/>)
  expect(wrapper.find('.list .todos').length).toEqual(2)
})
})