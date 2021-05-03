import React from 'react'
import * as cardStyles from './card.module.scss'

const Card = () => {
    return (
        <body>
            <div className={cardStyles.card}>
                <div className={cardStyles.image}>
                    <img 
                    src="https://images.pexels.com/photos/1631678/pexels-photo-1631678.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                    alt="hi"
                    className={cardStyles.cardImg}/>
                </div>
                <div className={cardStyles.cardContent}>
                    <h2 className={cardStyles.cardTitle}>Something awesome</h2>
                    <p className={cardStyles.cardBody}>lorem asdklasdklj aklajs dasas dasdfkljasdf a sd fasdfjaldsf  a sdf asdf </p>
                    <a href="#" className={cardStyles.button}>Learn More</a>
                </div>
            </div>
        </body>
    )
}

export default Card
