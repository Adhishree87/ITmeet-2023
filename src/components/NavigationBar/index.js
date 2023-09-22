import React, { useEffect, useState } from 'react'
import "./Navigation.sass"
import logo from '../../assets/images/logo.png'

export default function NavigationBar() {
    const [location, setLocation] = useState(false)

    useEffect(() => {
        if (window.location.pathname !== "/") {
            return setLocation(true)
        }
        return setLocation(false)
    }, [window.location])

    const [isMenuActive, setIsMenuActive] = useState(false);


    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (window.location.pathname !== "/") {
            return;
        }
        if (scrollPosition < 200) {
            setLocation(false)
        } else {
            setLocation(true)
        }
        if (scrollPosition < 500) {
            document.getElementById("scrollUp").style.display = 'none';
        } else {
            document.getElementById("scrollUp").style.display = 'block';
        }
    };

    const handleMenuClick = () =>{
        setIsMenuActive(current => !current)
    }

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className='NavigationBar'>
            <header className="main-header clearfix" style={{
                backgroundColor:
                    `${location ?
                        'color-mix(in srgb, var(--fourth-color), transparent 0%)' :
                        "color-mix(in srgb, var(--fourth-color), transparent 100%)"
                    }`,
                marginTop: `${location ? "0px" : "30px"}`
            }} role="header">
                <div className="logo">
                    <a href="/#">
                        <img className="logo-image" src={logo} />
                    </a>
                </div>
                <a onClick={handleMenuClick} className={isMenuActive ? "menu-link active": "menu-link"}><i className="fa fa-bars"></i></a>
                <nav id="menu" className={isMenuActive ? "main-nav active":"main-nav inactive"} role="navigation">
                    <ul className="main-menu" onClick={handleMenuClick} >
                        <li><a href="/#section1"  >Home</a></li>
                        <li><a href="/#section2"  >About</a></li>
                        <li><a href="/allEvents"  >Events</a></li>
                        <li><a href="/#preevents"  >Pre Events</a></li>
                        <li><a href="/#section4"  >Sponsors</a></li>
                        <li><a href='/#faq'  >FAQ</a></li>
                        <li><a href="/#section5"  >Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>

    )
}
