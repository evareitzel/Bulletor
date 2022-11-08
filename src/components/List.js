import {useState} from "react"
import '../stylesheets/List.css'

function List({listObj}){
  const {title, item1, item2, item3, item4} = listObj
  const [details, setDetails] = useState(false)

  const showDetails = 
  !details
  ? null
  : <ul>
      <li>{item1}</li>
      <li>{item2}</li>
      <li>{item3}</li>
      <li>{item4}</li>
    </ul>

  return(
    <div className="list">
      <hr />
      <button onClick={() => setDetails(!details)} className ="list-btn">{title}</button>
      {showDetails}
    </div>
  )
}

export default List