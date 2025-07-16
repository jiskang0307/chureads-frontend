import {React, useState} from 'react'


const Greeting = ({ name = "??", onClick }) => {
  // let userName = "jisu"
  const [userName, setUserName] = useState(name)
  const handleClick = () => {
    // userName = userName.toUpperCase()
    // setUserName(userName.toUpperCase())
    // console.log("🚀 ~ handleClick ~ userName:", userName)
    onClick(name)
  }

  return (
    <>
      <div>
          <p>Hi {userName}!</p>
          <p>Have a good day</p>
          <button type='button' className='border border-white' onClick={handleClick}>ToUpperCase</button>
      </div>
      <div></div>
      <div></div>
    </>
  )
}

export default Greeting