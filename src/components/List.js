import '../stylesheets/List.css'

function List({listObj}){
  console.log(listObj)
  const {title, item1, item2, item3, item4} = listObj

  return(
    <div>
      <h3 className="title">{title}</h3>
      <ul>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
        <li>{item4}</li>
      </ul>
    </div>
  )
}

export default List