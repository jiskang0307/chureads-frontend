import React from 'react'
import Greeting from '../components/sample/Greeting'

const Sample = () => {
  const handleButtonClick = (data) => {
    console.log("click!!", data)
  }

  return (
    <div>Sample
        <Greeting name = "soong" onClick={handleButtonClick}/>
        <Greeting name = "강지수" onClick={handleButtonClick}/>
        <Greeting onClick={handleButtonClick}/>
    </div>
  )
}

export default Sample

//rafce