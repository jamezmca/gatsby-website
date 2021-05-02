import React from 'react'
import * as modalStyles from './modal.module.scss'

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000
}

const Modal = ({ open, onClose }) => {
    if (!open) return null
    return (
        <>
            <div style={OVERLAY_STYLE} />
            <div className={modalStyles.modal}>
                <div className={modalStyles.aboutMe}>
                    <div className={modalStyles.aboutMeContent}>
                        <h3>About me</h3>
                        <p>
                            I am James McArthur, a 24 year old React, Graphql, Node.js, and PostgreSQL enthusiast.
                            I have lots of ideas and I am thoroughly enjoying bringing them to life.
                        </p>
                        <p>
                            I like clothes, dogs, food, and nature :)
                        </p>
                    </div>
                </div>
                <div className={modalStyles.contact}>
                    <div className={modalStyles.contactContent}>
                        <div className={modalStyles.contactContentHeader}>
                            <h3>Contact</h3>
                            <button onClick={onClose}><p>close</p></button>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
