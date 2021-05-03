import React from 'react'
import * as cardStyles from './card.module.scss'

const Card = () => {
    return (
        <body>
            <div className={cardStyles.card}>
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
