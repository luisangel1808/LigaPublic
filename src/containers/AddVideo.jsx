import React,{useState} from 'react';
import axios from 'axios';
import '../styles/components/AddVideo.css';
const AddVideo = () => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await axios.post('http://localhost:8080/api/videos/create', {
            description: description,
            url: url,
            name:title,
            author:1
        });
    };
    return (
        <div className="AddVideo">
            <form onSubmit={handleSubmit}>
                <h1>Añadir vídeo</h1>
                <input type="text" placeholder="Título" onChange={e=>setTitle(e.target.value)}/>
                <input type="text" placeholder="Url" onChange={e=>setUrl(e.target.value)}/>
                <input type="text" placeholder="Descripción" onChange={e=>setDescription(e.target.value)}/>
                <button>Añadir</button>
            </form>
        </div>
    )
}

export default AddVideo;
