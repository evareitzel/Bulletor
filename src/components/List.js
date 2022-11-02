import {useState} from "react"
import '../stylesheets/List.css'

function List({listObj}){
  // console.log(listObj)
  const {title, item1, item2, item3, item4} = listObj
  const [details, setDetails] = useState(false)

  function onBtnClick(){
    setDetails(!details)
  } 

  console.log(details)

  const showDetails = 
  details
  ? <ul>
      <li>{item1}</li>
      <li>{item2}</li>
      <li>{item3}</li>
      <li>{item4}</li>
    </ul>
  : null

  return(
    <div className="list">
      <hr />
      <button onClick={onBtnClick} className ="list-btn">{title}</button>
      {showDetails}
    </div>
  )
}

export default List