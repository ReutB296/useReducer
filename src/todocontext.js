
import React,{useReducer, useMemo} from 'react';

export const TodosContext = React.createContext({
    contextValue: {},
});

  export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_COMPLETE: 'toggle-complete',
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, {
            id: Date.now(),
            complete: false,
            text: action.payload.text,
          }],
        };
  
      case ACTIONS.TOGGLE_COMPLETE:
        return {
          ...state,
          todos: state.todos.map(
            todo => todo.id === action.payload.id 
            ? ( todo.complete ? {...todo, complete: false} : {...todo, complete: true} )
            : todo
          ),
        };
  
      default:
        return state;
    }
  }
  

  export default function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, {todos: [] });

    const contextValue = useMemo(() => {
        return { state, dispatch };
      }, [state, dispatch]);

      console.log(contextValue);
   
    return (
        <TodosContext.Provider value={{
            contextValue,
        }}> 
          {children}
        </TodosContext.Provider>
      );
    }
    