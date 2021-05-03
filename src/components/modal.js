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
        <div>
            <div style={OVERLAY_STYLE} />
            <div className={modalStyles.modal}>
                <div className={modalStyles.close}>
                </div>
                <div className={modalStyles.aboutMe}>
                    <div className={modalStyles.aboutMeContent}>
                        <h3>About me</h3>
                        <p>
                            I am James McArthur, a 24-year-old React, Graphql, Node.js, and PostgreSQL enthusiast.
                            I have lots of ideas and I am thoroughly enjoying bringing them to life.
                        </p>
                        <p>
                            I like clothes, dogs, food, and nature :)
                        </p>
                        <ul style={{ padding: '30px' }}>
                            <li>
                                <a href="https://www.linkedin.com/in/jamezmcarthur/" target="_blank" rel="noreferrer">LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://codepen.io/jamezmca/" target="_blank" rel="noreferrer">CodePen</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Mystery</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={modalStyles.contact}>
                    <div className={modalStyles.contactContent}>
                        <div className={modalStyles.contactContentHeader}>
                            <h3>Contact</h3>
                            <button onClick={onClose}><p>close</p></button>
                        </div>
                        <form onsubmit="alert('Success')">
                            <div className={modalStyles.input}>
                                <label for="name">Name</label>
                                <input type="text" required id="name" />
                                <div className={modalStyles.inputIndicator}></div>
                            </div>
                            <div className={modalStyles.input}>
                                <label for="email-address">Email Address</label>
                                <input type="email" required id="email-address" />
                                <div className={modalStyles.inputIndicator}></div>
                            </div>
                            <div className={modalStyles.input}>
                                <label for="message">Message</label>
                                <textarea/>
                                <div className={modalStyles.inputIndicator}></div>
                            </div>
                            <button type="submit">Send mensaje</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
