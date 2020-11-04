import React from 'react';

const Card = () => {
    return (
        <div className='bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src='https://robohash.org/test?set=set2' alt='robo friend'/>
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
         
    )
}

export default Card;