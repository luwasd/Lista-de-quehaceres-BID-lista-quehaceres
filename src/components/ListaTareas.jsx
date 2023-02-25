import React, { useState } from 'react'


const ListaTareas = (props) => {

    const { tareas, setTareas } = props;
    console.log(tareas);

    const handleCheck = (tarea) => {
        setTareas(tareas.map((tar) => {
            if (tar.id === tarea.id) {
                return { ...tar, done: !tar.done }
            }
            return tar;
        }))
    }

    const handleDelete = (tarea) => {
        setTareas(tareas.filter((tar) => {
            return tar.id !== tarea.id;
        }));
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }


    return (
        <div>
            <ul>
                {tareas.map((tarea, idx) => {
                    return (
                        <li key={idx} style={{ textDecoration: tarea.done ? "line-through" : "", }}>
                            {tarea.tarea}
                            <input type="checkbox" checked={tarea.done} onChange={() => handleCheck(tarea)}></input>
                            <button onClick={() => handleDelete(tarea)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ListaTareas;