import React from 'react'

function List(props) {
  
  const fruits=["apple","orange","banana","coconut","pineapple"]
fruits.sort()
  const listitems=fruits.map(fruit=><li>{fruit}</li>)
  return(

    <>
    <h1 className='product-name'>{props.productname}</h1>
    <ol className='list-item'>{listitems}</ol>;
    </>
  )
  
}

export default List