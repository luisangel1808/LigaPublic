import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import '../styles/components/Tests.css'

const Tests = () => {
    const [tests, setTests] = useState([]);
    const getPlayers = async () =>{
        db.collection('tests')
           .onSnapshot((querySnapshot)=>{
               const docs = [];
               querySnapshot.forEach(doc=>{
                   docs.push({...doc.data(), id: doc.id});
               });
               setTests(docs);
      })
   }
   useEffect(() => {
    getPlayers();
}, []);

  return (
    <div className="Tests">
      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombre</th>
            <th>Fecha de creación</th>
            <th>Dificultad</th>
            <th>Ejercicios</th>
            <th>Tema</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, index) => {
            return (
              <tr key={`Test-${index}`}>
                    <td>{index + 1}</td>
                    <td>{test.title}</td>
                    <td>{test.date}</td>
                    <td>{test.level}</td>
                    <td>{test.positions.length}</td>
                    <td>{test.topic}</td>
                    <td>{test.description}</td>
                    <td><Link to={{ pathname:`test/${test.id}`, state:{test}}}>{"Abrir"}</Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tests
