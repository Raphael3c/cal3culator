import {Display} from './components/Display'
import {Keyboard} from './components/Keyboard'

import './styles/shape.css'
import './global.css'

function App() {
  return (
    <>
      <div className="shape">
        <Display value={'1230128198'}/>
        <Keyboard/>
      </div>
    </>
  );
}

export default App;