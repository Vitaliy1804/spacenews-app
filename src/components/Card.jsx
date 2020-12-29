import React from 'react';


const Card = ({title, summary, imageUrl, url}) => {
    return (
        <div className="col-4 col-md-6 my-3">
            <div className="card h-100">
                <img src={ imageUrl } alt={ title } className="card-img card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title">
                        { title }
                        </h3>
                    <p className="card-text">{ summary }</p>
                    <a href={ url } className="btn btn-link ml-n2">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Card;