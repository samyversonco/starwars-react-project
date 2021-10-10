import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.image} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Home World:</strong> {item.homeworld}
            </li>
            <li>
              <strong>Height:</strong> {item.height}
            </li>
            <li>
              <strong>Mass:</strong> {item.mass}
            </li>
            <li>
              <strong>Gender:</strong> {item.gender}
            </li>
            <li>
              <strong>Species:</strong> {item.species}
            </li>
            <li>
              <strong>Born Location:</strong> {item.bornLocation}
            </li>
            <li>
              <strong>Died Location:</strong> {item.diedLocation}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
