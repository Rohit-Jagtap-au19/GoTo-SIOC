import React from 'react'
import { jockey } from '../data.js'
import {BiRupee} from 'react-icons/bi'
import {GiTwoCoins} from 'react-icons/gi'


const Jockey = () => {
  return (
    <>
      <div className='horse_card'>
        {jockey.map((card) => {
          return (
            <div className='card-container'>
              <div className="img-container jockey">
                <img src="https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" alt="Not found" />
                <h2>{card.rname}</h2>
              </div>
              <div className="details">
                <p>Height: <span>{card.height}</span> <br />
                  Weight: <span>{card.weight}</span> <br />
                  Riding Style: <span>{card.style}</span> <br />
                  No. of race: <span>{card.race}</span>    <br />
                  No. of races won: <span>{card.won}</span>
                  Avrage Position : <span>{card.position}</span> <br />
                  most favorable jockey & style : <span>{card.horse}</span>
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

export default Jockey