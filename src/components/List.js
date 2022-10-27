function List({listObj}){
  const {title, items} = listObj

  // console.log(listObj.items)  
  const renderItems = items.map(el => <li key={el.item}>{el.item}</li>) 

  return(
    <div>
      <h3>{title}</h3>
      <ul>
        {renderItems}
      </ul>
    </div>
  )
}

export default List