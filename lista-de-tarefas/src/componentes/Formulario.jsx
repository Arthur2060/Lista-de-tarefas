import './formulario.css'
import { useState, useEffect } from 'react'

export default function Formulario() {
    const [tarefas, setTarefas] = useState([]);
    const [editando, setEditando] = useState(false);
    const [formState, setFormState] = useState({
        nome: "",
        descricao: "",
        data: ""
    });

    useEffect(() => {
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
    }, [tarefas])

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setTarefas({
            ...tarefas,
            nome: formState.nome,
            descricao: formState.descricao,
            data: formState.data,
        })

        alert(localStorage.getItem("tarefa"))
    }

    return(
        <>
            <div id='formulario'>
                <input type="text" name='nome' id='nome' onChange={handleChange}/>
                <input type="text" name='descricao' id='descricao' onChange={handleChange}/>
                <input type="date" name="data" id="data" onChange={handleChange}/>
                <button type="submit" onClick={handleSubmit}>Adicionar</button>
            </div>
            
        </>
    )
}