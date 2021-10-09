import React from 'react'
import { useState, useEffect } from 'react'
import './MyWishlist.css'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import Search from '../../components/Search/Search'
import Sort from '../../components/Sort/Sort'
import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort'

export default function Gifts(props) {
  const userGift = props.gifts.filter((gift) => gift.user_id === props.currentUser.id)
  const [searchResult, setSearchResult] = useState(userGift)
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('name-ascending')
console.log(props.currentUser)
  const handleSort = (type) => {
    if (type !== '' && type !== undefined) {
      setSortType(type)
    }
    switch (type) {
      case 'name-ascending':
        setSearchResult(AZ(searchResult))
        break
      case 'name-descending':
        setSearchResult(ZA(searchResult))
        break
      case 'price-ascending':
        setSearchResult(lowestFirst(searchResult))
        break
      case 'price-descending':
        setSearchResult(highestFirst(searchResult))
        break
      default:
        break
    }
  }

  if (applySort) {
    handleSort(sortType)
    setApplySort(false)
  }

  const handleSearch = (event) => {
    const results = props.gifts.filter((gift) =>
      gift.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setSearchResult(results)



    setApplySort(true)


  }

  const handleSubmit = (event) => event.preventDefault()

  return (
    <>



      <div className='wishlist'>
        <h1 id='my-wishlist-mw'>My Wishlist</h1>
        <div className='add-gift'>
    <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
          <div className='add-gift-button'>
          <Link className="link" to="/add-gift">
        <button className='add-button-mw'>+</button>
      </Link>
        </div>
        </div>

    <div className='wishlist-div'>
      {searchResult.map((gift) => (
        <div  className='listing-wishlist-div' key={gift.id}>
          <Link to={`/gifts/${gift.id}`}>
            <Card className="card-container" style={{ height: "17rem" }}>
              <Card.Img
                className="card-img"
                variant="top"
                src={gift.image}
                style={{ height: "9rem"}}
              />
              <Card.Body style={{ height: "7rem" }}>
                <Card.Title className="card-name">{gift.name}</Card.Title>
                <Card.Text className="card-price">${gift.price}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
        </div>
      </div>
      </>
  )
}