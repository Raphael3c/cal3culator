import axios from 'axios'
import { useEffect, useState } from 'react'
import '../styles/keyboard.css'

export function Keyboard(){

  const [buttons, setButtons] = useState([])

  function handle(e){
    console.log(e)
  }

  useEffect(() => { 
    axios.get('http://localhost:3333/buttons')
      .then(res => {
        const data = res.data;

        setButtons(data)
      })
  }, [])

  return (
    <div className="container">
      {buttons.map((button) => {
        return (
            <button 
            type="button" 
            value={button.id} 
            onClick={e => handle(e.target.value)}
            key={button.id}
            className={button.className}
          >
              {button.id}
          </button>
        )
      })}
    </div>
  )
}