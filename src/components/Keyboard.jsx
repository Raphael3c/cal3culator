
import '../styles/keyboard.css'

export function Keyboard(){

  function handle(e){
  console.log(e)
  }

  return (
    <div className="container">
      <button 
        type="button" 
        value="asdasd" 
        onClick={e => handle(e.target.value)}
      >
          teste
      </button>
    </div>
  )
}