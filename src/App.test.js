import {render, screen} from '@testing-library/react';
import {App} from './App';
import {addTask} from './App'

test('renders learn react link', () => {
  render(<App/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('test addTask function',()=>{

  const todos = [{
    id: 0,
    task: 'NASDAQ',
    complete: false,
    checked: false,
    edit: false
  }]

  let result

  beforeAll(()=>{
    result = addTask(todos,'input')
  })

  it('should add an item to todo list',()=>{
    expect(result.length).toEqual(2)
  })

  it('should change id correctly',()=>{
    expect(result[1].id).toEqual(2)
  })

  it('new item should not be checked by default',()=>{
    expect(result[1].checked).toBeFalsy()
  })

})