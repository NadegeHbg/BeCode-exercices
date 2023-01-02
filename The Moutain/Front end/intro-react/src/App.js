
import './App.css';

const Title = () => {
  return <h1 className='App-Title'>My Todo App</h1>;

}
const Form = () => {
  return (
    <form>
      <div className='displayFlex'>
        <input type='text' placeholder='Type a new todo' />
        <input type='submit' />
      </div>
    </form>)
}

const SubTitle = () => {
  return <h2>Todos</h2>
}

const TodosList = () => {
  return (
    <div className='displayFlex alignStart'>
      <label>
        <input type='checkbox' />
        <span>Be awesome</span>
      </label>
      <label>
        <input type='checkbox' />
        <span>Learn react</span>
      </label>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>

      <main className="App-body">
        <Form />
        <SubTitle />
        <TodosList />

      </main>
    </div>
  );
}

export default App;
