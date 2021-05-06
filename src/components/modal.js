import React, { useState } from 'react'
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
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({
          ...formData,
    
          // Trimming any whitespace
          [e.target.name]: e.target.value
        });
      };
    
    function handleFormSubmit(event) {
        event.preventDefault();
        alert("Message Sent :)")
        console.log(formData)
        event.target.reset()

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
                        <form onSubmit={handleFormSubmit} method="post" name="emailform" autocomplete="off">
                            <div className={modalStyles.input}>
                                <label for="name">Name
                                    <input type="text" required id="name" name="name" onChange={handleChange}/>
                                    <div className={modalStyles.inputIndicator}></div>
                                </label>
                            </div>
                            <div className={modalStyles.input}>
                                <label for="emailaddress">Email Address
                                    <input type="email" required id="emailaddress" name="emailaddress" onChange={handleChange}/>
                                    <div className={modalStyles.inputIndicator}></div>
                                </label>
                            </div>
                            <div className={modalStyles.input}>
                                <label for="message">Message
                                    <textarea required id="message" name="message" rows="4" onChange={handleChange}/>
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
