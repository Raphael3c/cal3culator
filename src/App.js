import {useState} from 'react'
import {Display} from './components/Display'
import {Keyboard} from './components/Keyboard'
import {ExpressionContext} from './contexts/ExpressionContext'

import {calculadora} from './utils/calc'; 

import './styles/shape.css'
import './global.css'

function App() {

  const [value, setValue] = useState("");

  return (
    <>
      <ExpressionContext.Provider value={{value, setValue, calculadora}}>
        <div className="shape">
          <Display value={value}/>
          <Keyboard/>
        </div>
      </ExpressionContext.Provider>
    </>
  );
}

export default App;