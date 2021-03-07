function Todo(props) {

    return (
        <li className="item" key={props.key}>
            {props.value}
            <button className="removebtn" onClick={() => props.onDelete(props.id)}>X</button>
        </li>
    )
}

export default Todo
