import {useContext, useState} from 'react'
import { ExpressionContext } from '../contexts/ExpressionContext';
import '../styles/keyboard.css'

import {buttonsArray} from '../utils/buttons';

export function Keyboard(){

  const [buttons] = useState(buttonsArray)

  const {value, setValue, calculadora} = useContext(ExpressionContext);

  function handle(value1){
    const newValue = value + value1;
    setValue(newValue);
  }

  function calc(){
    setValue(calculadora.multiplicacao(value));
  }

  return (
    <div className="container">
      {buttons.map((button) => {
        return (
            <button 
              type="button" 
              value={button.id} 
              onClick={e => handle(e.target.value, button.className)}
              key={button.id}
              className={button.className}
          >
              {button.id}
          </button>
        )
      })}

      <button className="operator" onClick={calc}>=</button>
    </div>
  )
}