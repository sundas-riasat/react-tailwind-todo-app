import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function CreateTodo() {
    const [title, setTitle] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const addTodo = () => {
        if (id) {
            updateTodo();
            return;
        }
        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: 1,
                title: title,
                completed: false,
            }),
        }).then((response) => {
            response.json().then((data) => {
                console.log(data);
                toast.success("Todo Added Successfully");
                setTitle("");
                navigate('/');
            })
        });
    }

    useEffect(() => {
        if (id) {
            fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: "GET",
            }).then((response) => {
                response.json().then((data) => {
                    setTitle(data.title);
                });
            });
        }
    }, [id]);


    const updateTodo = () => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: 1,
                title: title,
                completed: false,
            }),
        }).then((response) => {
            response.json().then((data) => {
                console.log(data);
                toast.success("Todo Updated Successfully");
            });
        });
    }

    return (<>
        <div className="flex m-auto flex-col items-center bg-blue-50 text-black p-4 shadow-lg rounded-lg my-4 max-w-2xl">
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="border bg-white border-gray-200 p-4 m-4 min-w-xl" type="text" placeholder="Enter your todo" />
            <button onClick={addTodo} className="bg-pink-300 p-4 m-4 text-center ">Add New Todo</button>
        </div>
    </>);
}

export default CreateTodo;