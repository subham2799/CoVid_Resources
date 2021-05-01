import React from 'react'

function Footer() {
    return (
        <footer className = "footer-text">
            <div className = "container">
                {new Date().toLocaleString() + ''}
            </div>
        </footer>
        
    )
}

export default Footer