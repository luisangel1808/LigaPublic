import React, { useRef, useState, useContext } from 'react';
import Chessboard from './ChessBoard';
import '../styles/components/Test.css';
import { AuthContext } from "../hooks/Authentication";
import { db } from '../firebase';

const Test = (props) => {
  const {currentUser} = useContext(AuthContext);
  const positions = props.location.state.test.positions;
  const [page, setPage] = useState(0)
  const form = useRef(null);

  let enviado=false;
  const next = async () =>{
    const formData = new FormData(form.current);
    const ans = {
      valoration: formData.get('valoration'),
      answerText: formData.get('answerText'),
      user: currentUser.email,
    }

    await db.collection('answers').doc().set({ans});
    if(page<positions.length-1){
      setPage(page+1);
    }
    
    else{
      if(enviado==false){
        alert('Has terminado el test, pronto te darán resultados');
      }
    }
  }
  
  return (
    <div className="Test">
      <div className="board">
        <h3>Evalúa esta posición</h3>
        <Chessboard>
          {positions[page]}
        </Chessboard> 
      </div>
      <form ref={form}>
        <div className="form-valoration">
          <p>¿Cómo valoras la posición?:</p>
          <input type="radio" name="valoration" id="+-" value="+-" />
          <label htmlFor="+-">Ventaja decisiva de las blancas +-</label> <br />
          <input type="radio" name="valoration" id="+/-" value="+/-" />
          <label htmlFor="+/-">Amplía ventaja de las blancas +/-</label> <br />
          <input type="radio" name="valoration" id="+/=" value="+/=" />
          <label htmlFor="+/=">Leve ventaja de las blancas +/=</label> <br />
          <input type="radio" name="valoration" id="=" value="=" />
          <label htmlFor="=">Igualdad =</label> <br />
          <input type="radio" name="valoration" id="=/+" value="=/+" />
          <label htmlFor="=/+">Leve ventaja de las negras =/+</label> <br />
          <input type="radio" name="valoration" id="-/+" value="-/+" />
          <label htmlFor="-/+">Amplía ventaja de las negras -/+</label> <br />
          <input type="radio" name="valoration" id="-+" value="-+" />
          <label htmlFor="-+">Ventaja decisiva de las negras -+</label> <br />
        </div>
        <div className="answer">
          <h4>¿Cómo debería continuar la partida?</h4>
          <textarea name="answerText" type="text"  />
          <button type="button" onClick={()=>next()}>Continuar</button>
        </div>
      </form>
    </div>
  );
};

export default Test;
