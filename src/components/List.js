function List({title, todo}){
  
  const renderItems = items.map(item => <li>item</li>) 
  return(
    <div>
      <h3>{title}</h3>
      <ul>
        {renderItems}
      </ul>
    </div>
  )
}