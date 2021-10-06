import { useState, useEffect } from "react";
import "./GiftDetail.css";
import { getGift, deleteGift, updateGift } from "../../services/gifts";
import { useParams, Link, Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom'

const GiftDetail = (props) => {
  const [isLoaded, setLoaded] = useState(false);
  const [isUpdated, setUpdated] = useState(false)
  const history = useHistory()
  const { id } = useParams()
  const [toggleFetch, setToggleFetch] = useState(false)
  const [gift, setGift] = useState({
    name: '',
    image_url: '',
    price: '',
    buy_link: ''
  })

  const { handleRedirect, user } = props


  useEffect(() => {
    const fetchGift = async () => {
      const gift = await getGift(id);
      console.log(gift)
      setGift(gift);
      setLoaded(true);
    };
    fetchGift();
  }, [id, toggleFetch]);
  }

  const handleSubmit = async (event) => {
    if (user !== null) {
      event.preventDefault()
      laptop.reviews.push(review)
      setLaptop(laptop)
      await updateLaptop(id, laptop)
      setToggleFetch((toggleFetch) => !toggleFetch)
      setReview({
        author: '',
        rating: '',
        description: '',
      })
      history.push('/laptops/:id')
    } else {
      alert('Please sign in first')
      history.push('/sign-in')
    }
  }

  const handleDelete = async (event) => {
    event.preventDefault()
    await deleteLaptop(id, laptop)
    setUpdated(true)
  }
  if (isUpdated) {
    return <Redirect to={'/laptops'} />
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout user={user}>
      <div className="laptop-detail">
        <div className="detail">
          <h1>Description</h1>
          <div className="description">{laptop.description}</div>
          <h1>Specifications</h1>
          <h2>Processor: {laptop.processor}</h2>
          <h2>Hard Drive: {laptop.hardrive}</h2>
          <h2>Memory: {laptop.memory}</h2>
          <div className='directLinkbutton'>
            <a className='linkbutton' href={laptop.buy_link}>Click to Buy</a>
          </div>
        </div>
        <div className="secondhalf">
          <img
            className="laptop-detail-image"
            src={laptop.image_url}
            alt={laptop.name}
          />
          <div className='detail'>
            <div className='name'>{laptop.name}</div>
            <div className='rating'>
              <StarRating
                size={laptop.rating}
                value={laptop.rating}
                onChange={function (val) {
                  // console.log(val)
                }}
              />
            </div>
            <h2 className="price">Price: {`$${laptop.price}`}</h2>
            <div className="button-container">
              <Link className="edit-button" to={`/laptops/${laptop._id}/edit`}>
                <button className="editbutton">Edit</button>
              </Link>

              <div>
                <button
                  className="delete-button"
                  onClick={() => deleteLaptop(laptop._id)}
                >
                  Delete
                </button>
              </div>

            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className='reviews-wrapper'>
        <ReviewForm
          author={review.author}
          rating={review.rating}
          description={review.description}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
        <Reviews reviews={laptop.reviews} />
      </div>
    </Layout>
  );
};

export default LaptopDetail;