import React from 'react'


const Array = () => {
  const carros =[1,2,3,4,5]
  return (
    <div>

{carros.map(item=>(<p>{item}</p>))}
</div>
  )
}

export default Array