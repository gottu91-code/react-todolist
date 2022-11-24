import { TodoItem } from "./TodoItem"

export const TodoList = props => {
    const { todos, deleteTodo } = props;

    return (
        <div>
            {
                todos.map((todo, index) => (
                    <TodoItem todo={todo} index={index} deleteTodo={deleteTodo} key={todo} />
                ))
            }
        </div>
    )
}