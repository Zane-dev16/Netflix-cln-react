import React, {useState, useEffect} from 'react'
import './Nav.css'

function Nav() {
    const [Show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true)
            } else setShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${Show && 'black_nav'}`}>
            <img className="logo" src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="Netflix Logo"/>
            <img className="icon" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="Profile Icon"/>
        </div>
        
    )
}

export default Nav
