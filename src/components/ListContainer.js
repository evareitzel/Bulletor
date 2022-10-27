import List from './List'
// Stretch goal: show list titles, onClick view details (get items, setState)

function ListContainer({lists}){

  const renderLists = lists.map(listObj => {
    return <List listObj={listObj} key={listObj.id}/>
  }) 

  return(
    <div>
      <h1>My Bullet Lists</h1>
      {renderLists}
    </div>
  )
}

export default ListContainer