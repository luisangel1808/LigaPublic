import React, { useState, useRef }from 'react';
import { db } from '../firebase';
import notification from '../utils/Toast';
import '../styles/components/CreateTest.css';

const CreateTest = () => {

    const form = useRef(null);
    const [positions, setPositions] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);

        const newTest = {
          positions: positions,
          title: formData.get('title'),
          level: formData.get('level'),
          topic: formData.get('topic'),
          description: formData.get('description'),
        };
            await db.collection('tests').doc().set(newTest);
            notification('馃槣 Test a帽adido!');
        }
      
    const addPosition = () => {
        const formData = new FormData(form.current);
        let position = {}
        position.fen = formData.get('position');
        position.description = formData.get('descriptionPosition');
        setPositions([...positions, position]);
    }
    return (
            <section className="CreateTest">
              <form ref={form} onSubmit={handleSubmit}>
                <h3>Crear nuevo Test</h3>
                <h4>Datos del Test</h4>
                <input type="text" name="title" placeholder="Titulo"/>
                <input type="text" name="level" placeholder="Dificultad"/>
                <input type="text" name="topic" placeholder="Tema"/>
                <input type="text" name="description" placeholder="Descripci贸n"/>
                <h4>Datos de la posici贸n</h4>
                <input type="text" name="position" placeholder="Posici贸n en formato FEN"/>
                <input type="text" name="descrptionPosition" placeholder=" Descripci贸n de la posici贸n"/>
                <button type="button" onClick={() => addPosition()}>
                  A帽adir posici贸n
                </button>
                <button>Guardar test</button>
              </form>
              {positions.map((pos, index) => (
                <li key={`P-${index}`}>{`${index + 1 } ${pos.fen} `}</li>
              ))}
            </section>
      );
    };
export default CreateTest
