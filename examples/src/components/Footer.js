import React from 'react'

const Footer = () => {
    const footerStyle = {
        color: '#C71585',
        fontStyle: 'italic',
        fontSize: 12
    }

    return (
        <div style={footerStyle}>
            <br />
            <em>Note app, Department of Computer Science, University of Helsinki 2019</em>
        </div>
    )
}

export default Footer
