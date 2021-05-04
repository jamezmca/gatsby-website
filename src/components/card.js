import React from 'react'
import * as cardStyles from './card.module.scss'
import { Link } from 'gatsby'

const Card = ({link, title, date, description}) => {
    return (
        <Link>
            <div className={cardStyles.card}>
                <div className={cardStyles.image}>
                    <img
                        src="https://images.pexels.com/photos/1631678/pexels-photo-1631678.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        alt="hi"
                    />
                </div>
                <div className={cardStyles.cardContent}>
                    <h2 className={cardStyles.cardTitle}>{title}</h2>
                    <p className={cardStyles.cardBody}><i>{date}</i> | {description}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card
