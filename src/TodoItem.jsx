export const TodoItem = props => {
    const { todo, index, deleteTodo } = props;

    return (
        <div>
            <p>{index + 1}: {todo} <button onClick={() => deleteTodo(index)}>削除</button></p>
        </div>
    )
}