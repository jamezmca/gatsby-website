import React from 'react'
import emailjs from 'emailjs-com'
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

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'react-mailer', e.target, 'user_f2c8APICr5dYEDVNVecOV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        e.target.reset()
    }

    if (!open) return null
    return (
        <div>
            <div style={OVERLAY_STYLE} />
            <div className={modalStyles.modal}>
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
                                <a href="https://github.com/jamezmca/" target="_blank" rel="noreferrer">Github</a>
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
                            <button onClick={onClose} className={modalStyles.buttonClose}><p>close</p></button>
                        </div>
                        <form onSubmit={sendEmail} method="post" name="emailform" autoComplete="off">
                            <div className={modalStyles.input}>
                                <label htmlFor="name">Name
                                    <input type="text" required id="name" name="name"/>
                                    <div className={modalStyles.inputIndicator}></div>
                                </label>
                            </div>
                            <div className={modalStyles.input}>
                                <label htmlFor="emailaddress">Email Address
                                    <input type="email" required id="emailaddress" name="emailaddress"/>
                                    <div className={modalStyles.inputIndicator}></div>
                                </label>
                            </div>
                            <div className={modalStyles.input}>
                                <label htmlFor="message">Message
                                    <textarea required id="message" name="message" rows="4"/>
                                    <div className={modalStyles.inputIndicator}></div>
                                </label>
                            </div>
                            <div className={modalStyles.center}>
                                <div className={`${modalStyles.outer} ${modalStyles.button}`}>
                                    <button type="submit" value="Send Message">Send mensaje</button>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
