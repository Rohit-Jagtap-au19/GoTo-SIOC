import React from 'react'
import './home.scss'
import Horse from '../cards/Horse'
import Jockey from '../cards/Jockey'

const Home = () => {
  return (
    <div className='cards'>
    <h1>Create Team</h1>
    <h1>Choose Horse to Race</h1>
      <Horse/>
    <h1>Choose Jockey to Race</h1>
      <Jockey/>
      <button>Continue</button>
    </div>
  )
}

export default Home