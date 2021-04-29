import '../styles/display.css'

export function Display(props){

  return (
    <>
      <div className="display">
        <span>{props.value}</span>
      </div>
    </>
  )
}