// import React, { useState } from 'react'


// const Content1 = () => {

//   const [name,setName]=useState('Earn')
//   function handleNameChange(){
//     const names= ['Earn','Grow','Give']
//     const int= Math.floor(Math.random()*3)
//     setName( names[int])
//   }
//   return (
//     <main>
//       <p>Lets {name}  Money</p>
//       <button onClick={handleNameChange}>Subscribe</button>
//     </main>
//   )
// }

// export default Content1

//  const numbers = [-2,-3,0,1,2]
//   const itemss = numbers.map(n=> ({numbers:n}))
//   console.log(itemss); 

import React from 'react'
import ItemsList from './ItemsList';

const Content1 = ({items,handleCheck,handleDelete}) =>{
 

  return (
    <>
      {items.length ? (
        <ItemsList
          items={items}
          key={items.id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </>
  );
}

export default Content1;