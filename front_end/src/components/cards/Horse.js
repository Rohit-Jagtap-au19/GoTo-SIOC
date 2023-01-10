import React from 'react'
import { horse } from '../data.js'
import './horse.scss'
import {BiRupee} from 'react-icons/bi'
import {GiTwoCoins} from 'react-icons/gi'

const Horse = () => {
  return (
    <>
      <div className='horse_card'>
        {horse.map((card) => {
          return (
            <div className='card-container'>
              <div className="img-container">
                <img src="https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" alt="Not found" />
                <h2>{card.hname}</h2>
                <h4>Breed : {card.Breed}</h4>
              </div>
              <div className="details">
                <p>Height: <span>{card.height}</span> <br />
                  Weight: <span>{card.weight}</span> <br />
                  speed: <span>{card.speed}</span> <br />
                  No. of race: <span>{card.race}</span>    <br />
                  Avrage Position : <span>{card.avrage}</span> <br />
                  most favorable jockey & style : <span>{card.style}</span>
                </p>
                <div className="bet">
                <span className='money'> <GiTwoCoins className='money-icon'/> <BiRupee className='money-icon'/>{card.money}</span>
                  {/* <input type="number" min={card.money} max='40' placeholder={card.money} /> */}
                  <button>Select</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>

  )
}

export default Horse