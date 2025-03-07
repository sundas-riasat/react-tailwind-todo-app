import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import { useEffect, useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            response.json().then((data) => {
                setTodos(data);
            });
        }
        );
    }
        , []);
    return (
        <>
            <div className="py-5 flex flex-col items-center">
                <div className="flex justify-between items-center w-full max-w-2xl">
                    <h1 className="text-2xl">All Todos</h1>
                    <button className="bg-pink-300 cursor-pointer rounded-lg p-4 m-4 text-center" onClick={() => window.location.href = "/create"}>
                        Create New
                    </button>
                </div>
                <div className="todo-list bg-blue-50 text-black p-4 shadow-lg rounded-lg m-4 max-w-2xl">
                    {todos.map((todo) => (
                        <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default TodoList;