import './App.css';
import Todos from'./Todos';
import TodoProvider from './todocontext';


function App() {
  
  return (
    <TodoProvider>
      <Todos/>
    </TodoProvider>
  );
}


export default App;
