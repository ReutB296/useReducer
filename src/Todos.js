import Todo from './Todo';
import {useContext, useState} from 'react';
import {ACTIONS, TodosContext} from './todocontext';

export default function Todos(){
    const {contextValue} = useContext(TodosContext);
    const {todos} = contextValue.state;
    const [text, setText] = useState('');
    
    console.log(contextValue.dispatch);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        contextValue.dispatch({
          type: ACTIONS.ADD_TODO, 
          payload: {text},
        });
        setText('');
      }

    return(
    <div className="App">
        <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => {
        setText(e.target.value);
            console.log(text)}}>
        </input>
    </form>
    <ul>
        {todos.map(props => <Todo {...props} />)}
    </ul>
    </div>
    )
}