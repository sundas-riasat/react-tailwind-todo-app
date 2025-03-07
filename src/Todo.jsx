import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Todo({ id, title, completed }) {

    const navigate = useNavigate();
    const editTodo = () => {
        navigate('create/' + id);
    }

    const deleteTodo = () => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "DELETE",
        }).then((response) => {
            response.json().then((data) => {
                console.log(data);
                toast.success("Todo Deleted Successfully");
                navigate('/');
            });
        });
    }
    return (
        <div className={`todo m-2 p-4 text-black border ${completed ? "bg-green-200 border-green-400 " : "bg-pink-200 border-pink-400 "} rounded-lg`}>
            <div>
                <h1 className="text-lg">{title}</h1>

                <div className="flex justify-end items-center">
                    <button onClick={deleteTodo} className="bg-red-600 p-2 rounded-lg m-2">
                        Delete
                    </button>
                    <button onClick={editTodo} className="bg-fuchsia-400 p-2 rounded-lg m-2">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Todo;