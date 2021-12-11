import React, {useState} from 'react';
import axios from "axios";
import '../styles/components/AddVideo.css';
const AddClub = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await axios.post('http://localhost:8080/api/clubs/create', {
            name: name,
            city: city
        });
    };

    return (
        <div className="AddVideo">
            <form onSubmit={handleSubmit}>
                <h1>Añadir club</h1>
                <input type="text" name="name" placeholder="Club" onChange={e=>setName(e.target.value)}/>
                <input type="text" name="city" placeholder="Ciudad" onChange={e=>setCity(e.target.value)}/>
                <button>Añadir</button>
            </form>
        </div>
    )
}

export default AddClub;
