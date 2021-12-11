import React, { useRef, useContext, useState } from 'react';
import '../styles/components/AddPlayer.css';
import AppContext from '../context/AppContext';
import notification from '../utils/Toast';
import Modal from '../hooks/modal';
import { AuthContext } from "../hooks/Authentication";
const addPlayer = () => {
  const [validate, setValidate] = useState(false);
  const [code, setCode] = useState(0);
  const [player, setPlayer] = useState({});
  const [disable, setDisable] = useState(false);

  const { addToPlayersList,validateCode } = useContext(AppContext);
  const form = useRef(null);
  const modal = useRef(null);
  const {currentUser} = useContext(AuthContext);
  const authorizedUsers= ["adriamk2600@hotmail.com","luisangel1808@hotmail.com"];

  const validateC = async()=>{
   
      const pl = await validateCode(code);
      setValidate(true);
      setPlayer(pl);
      modal.current.open();
      if(Object.keys(pl).length>0){
        setDisable(true);
        form.current[0].value =pl.name;
        form.current[1].value =pl.birth_year;
        form.current[7].value =pl.standard_elo;
        form.current[8].value =pl.rapid_elo;
        form.current[9].value =pl.blitz_elo;
      }
      else{
        notification('😐 No se encontraron datos para ese código Fide, ingresa otro código, o completa los datos manualmente');
        setDisable(false);
      }
  } 

  const validateN = async()=>{ 
    setValidate(true);
    setPlayer({});
    setDisable(false);  
    modal.current.open();
} 

  const handleSubmit = async() => {
    const formData = new FormData(form.current);
    const newPlayer = {
      name: formData.get('name')||player.name,
      club: formData.get('club')||"",
      league: formData.get('league')||"",
      codFide: formData.get('fideCod')||code||"",
      sex: formData.get('sex')||player.sex,
      birth_year: formData.get('birth_year')||player.birth_year,
      picture: "",
      description: formData.get('description')||"",
      lichess: formData.get('lichess')||"",
      standard_elo: formData.get('standard_elo')||player.standard_elo||"",
      rapid_elo: formData.get('rapid_elo')||player.rapid_elo||"",
      blitz_elo: formData.get('blitz_elo')||player.blitz_elo||"",
    };
    if(!newPlayer.name){
      alert('Ingrese un nombre');
    }
    else if(!(newPlayer.birth_year>1910&&newPlayer.birth_year<2017)){
      alert('Ingrese un año válido');
    }
    else{
      await addToPlayersList(newPlayer);
      notification('😜 Jugador añadido!');
      form.current[0].value ="";
      form.current[1].value ="";
      form.current[3].value ="";
      form.current[4].value ="";
      form.current[5].value ="";
      form.current[6].value ="";
      form.current[7].value ="";
      form.current[8].value ="";
      form.current[9].value ="";
      setPlayer({});
    }
  };
  
  return (
    <section className="AddPlayer">
      <h1>Registrar jugador</h1>
      <h4>Ingresa el código Fide del jugador para registrar los datos oficiales</h4>
      <input type="number" placeholder="Ingresa el código Fide" name="fideCod" onChange={(e) => setCode(e.target.value)}/>
      <div>
        <button type="button" onClick={validateC}>Validar código</button>
        <button type="button" onClick={validateN}>El jugador no tiene código Fide</button>
      </div>
      <a href="https://ratings.fide.com/" target="_blank" rel="noopener noreferrer" >Si no conoces el código Fide puedes buscarlo  <b>aquí</b></a>
      <Modal ref={modal}>
        <div className="AddPlayer">
      <form ref={form} className={`AddPlayer-${validate?"visible":"hide"}`} >
        <input
          type="text"
          placeholder="Ingresa el jugador"
          name="name"
          disabled={disable} 
        />
        <div>
          <input 
            type="number" 
            placeholder="Ingresa el año de nacimiento" 
            name="birth_year" 
            disabled={disable} 
          />
          <select name="sex" disabled={disable} value={player.sex} >
            <option value="Male">Masculino</option>
            <option value="Female">Femenino</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="Ingresa el club" name="club"/>
          <input type="text" placeholder="Ingresa la Liga" name="league" />
        </div>
        <input type="text" placeholder="Ingresa una descripción" name="description"/>
        <input type="text" placeholder="Ingresa el nick de Lichess" name="lichess"/>
        <div>
          <input type="number" placeholder="Elo clásico" name="standard_elo" disabled={disable} />
          <input type="number" placeholder="Elo activo" name="rapid_elo" disabled={disable} />
          <input type="number" placeholder="Elo blitz" name="blitz_elo" disabled={disable} />
        </div>
        <button type="button" onClick={handleSubmit}>
          Registrar
        </button>
      </form>
      </div>
      </Modal>
    </section>
  );
};

export default addPlayer;
