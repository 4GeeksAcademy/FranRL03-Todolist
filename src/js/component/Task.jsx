import React, { useState } from "react";

export const Task = () => {

    const [newTask, setNewTask] = useState('')
    const [listTask, setListTask] = useState([]);

    const handleAddList = (event) => {

        event.preventDefault();

        if (newTask.trim() != '') {

            setListTask((copyList) => [...copyList, event.target.addList.value]);
        }

        setNewTask('')
    }

    const deleteTask = (item) => {

        setListTask(copyList => copyList.filter(task => task !== item))
    }

    return (
        <div className="mt-5">

            <form onSubmit={handleAddList}>

                <input type="text" className="form-control" id="addList" value={newTask} onChange={event => setNewTask(event.target.value)} placeholder="Add your task" />
            </form>

            {

                listTask.length == 0 ?

                    <h4 className="mt-5 text-muted">The list is empty. Add a task</h4>

                    :

                    <ul className="list-group mt-3" id="list">

                        {listTask.map((item, index) => (
                            <li className="list-group-item item-list" key={index}>

                                {item}

                                <svg onClick={() => deleteTask(item)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" className="bi bi-trash icon" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>

                            </li>
                        ))}

                    </ul>

            }
        </div>
    )

}