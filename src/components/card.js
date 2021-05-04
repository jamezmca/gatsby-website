import React from 'react'
import * as cardStyles from './card.module.scss'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Card = ({link, title, date, description, url}) => {
    return (
        <Link to={link}>
            <div className={cardStyles.card}>
                <div className={cardStyles.image}>
                    <GatsbyImage
                        image={getImage(url)}
                        alt={title}/>
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
