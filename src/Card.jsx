import React from 'react'

const Card = ({cardInfo}) => {
  const { name, des, imageUrl, price } = cardInfo;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={imageUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>${price}</p>
    <p>{des}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card ;
