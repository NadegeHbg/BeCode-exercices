import { useState } from "react";
import Todo from "./Todo";

const ToDoList = () => {
    // state (état, données)
    const [todos, setTodos] = useState([
        { id: 1, task: 'Learn react' },
        { id: 2, task: 'Have fun' },
        { id: 3, task: 'Feel incredible' }
    ]);

    const [addTodo, setAddTodo] = useState('');

    // comportements
    const handleDelete = (id) => {
        // faire une copie du state
        const copyTodos = [...todos];
        // agir sur mon state
        const newTodos = copyTodos.filter(fruit => fruit.id !== id);
        // actualiser mon state avec le seter
        setTodos(newTodos);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // copie du state
        const copyTodos = [...todos]
        // manipulation copie du state
        const id = new Date().getTime();
        const nom = addTodo;
        const newTodo = { id: id, task: nom }

        copyTodos.push(newTodo);
        // modification du state avec seter
        setTodos(copyTodos);
        setAddTodo('');
    }

    const handleChange = (event) => {
        setAddTodo(event.target.value);
    }

    // affichage (render) -> return
    return (
        <div>
            <h1>To do list</h1>

            <form onSubmit={handleSubmit}>
                <input
                    value={addTodo}
                    type='text'
                    placeholder='Enter a new todo'
                    onChange={handleChange}
                />
                <input type='submit'></input>
            </form>

            <ul>
                {todos.map((todo) => {
                    return <Todo key={todo.id} todoInfo={todo} onDelete={handleDelete} />
                })}
            </ul>
        </div>
    )
}

export default ToDoList;

// Première méthode pour récupérer des données d'un form, mais très peu utilisée
// import useRef

// dans le handleChange :
// const inputRef = useRef()
// console.log(inputRef.current.value)

// dans le render
// <input ref={inputRef}></input>