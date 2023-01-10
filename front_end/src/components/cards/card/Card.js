import React from 'react'
import './card.scss'

const Card = () => {
  return (
    <div  className='card-container'>
    <div className="img-container">
        <img src="https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" alt="Not found" />
        <h2>Dakota</h2>
        <h4>Breed : Arabian Horse</h4>
    </div>
    <div className="details">
        <p>Height: <span>1.5</span> <br />
        Weight: <span>450kg</span> <br />
        speed: <span>25 km/h</span> <br />
        No. of race: <span>20</span>    <br />
        Avrage Position : <span>3rd</span> <br />
        most favorable jockey & style : <span>kamiya(Reining)</span>
        </p>
        <div className="bet">
            <input type="number" min='20' max='40' placeholder='20'/>
            <button>Select</button>
        </div>
    </div>
    </div>
  )
}

export default Card