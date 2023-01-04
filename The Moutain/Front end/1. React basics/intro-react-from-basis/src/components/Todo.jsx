const Todo = (props) => {

    // const todoInfo = props.todoInfo;
    // const onDelete = props.onDelete;
    // ou
    const { todoInfo, onDelete } = props

    return <li >
        {todoInfo.task} <button onClick={() => onDelete(todoInfo.id)}>x</button>
    </li>
}

export default Todo