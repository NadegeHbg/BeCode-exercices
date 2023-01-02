
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-Title'>My Todo App</h1>
      </header>
      <main className="App-body">

        <form>
          <div className='displayFlex'>
            <input type='text' placeholder='Type a new todo' />
            <input type='submit' />
          </div>
        </form>

        <h2>Todos</h2>
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
      </main>
    </div>
  );
}

export default App;
