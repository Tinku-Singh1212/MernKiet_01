import React from 'react'

const Cards = (props) => {
        const { title , description , thumbnail, price , brand } = props;
    return (
        <div className='d-flex m-1'>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top overflow-hidden" src={thumbnail} alt="Card image cap" />
                    <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                             <p className="card-text">
                                        {description}
                             </p>
                             <h5>{price} Rs</h5>
                             <h6>{brand}</h6>
                         <div className='d-flex flex-row justify-content-between'></div>
                         <button class="btn btn-primary">Buy</button>
                             <a href="https://www.instagram.com/" className="btn btn-warning">instagram profile</a>
                    </div>
            </div>
     </div>
     )
};

export default Cards;