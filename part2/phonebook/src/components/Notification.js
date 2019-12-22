import React from 'react'

const Notification = ({ message, className }) => {
    if (message === null) {
        return null
    }
    return (
        <div className={message.className + ' notification'}>
            {message.text}
        </div>
    )
}

export default Notification
