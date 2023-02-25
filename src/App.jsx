import React, { useState, useEffect } from 'react'
import IngresoTareas from './components/IngresoTareas';
import ListaTareas from './components/ListaTareas'
import './App.css'



const App = () => {

    const [tareas, setTareas] = useState([]);
    console.log("desde app " + tareas);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('tareas'));
        if (saved) {
            setTareas(saved);
        }
    }, []);


    return (
        <div>
            <h2>Ingreso tareas</h2>
            <IngresoTareas tareas={tareas} setTareas={setTareas} />
            <h2>Lista de tareas</h2>
            <ListaTareas tareas={tareas} setTareas={setTareas} />
        </div>
    )
};

export default App;