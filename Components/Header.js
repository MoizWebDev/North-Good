import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Header = () => {
    const router = useRouter();

    function toggleMenu() {
        var navMenu = document.getElementById("navMenu");
        if (navMenu.style.left === "0px") {
            navMenu.style.left = "100vw";
        } else {
            navMenu.style.left = "0px";
        }
    }

    const isActive = (pathname) => {
        return router.pathname === pathname ? 'active' : '';
    };

    return (
        <header>
            <div className="head-container">
                <img src="/imgs/logo.png" width="250px" alt="" />
                <button className="hamburger" onClick={toggleMenu}>
                    <img src="/imgs/hamburger.png" width="50px" alt="" />
                </button>
                <nav id="navMenu">
                    <ul>
                        <li><Link href="/" className={isActive('/')}>north beta</Link></li>
                        <li><Link href="/portfolio" className={isActive('/portfolio')}>PORTFOLIO</Link></li>
                        <li><Link href="/careers" className={isActive('/careers')}>CULTURE</Link></li>
                        <li><Link href="/services" className={isActive('/services')}>SERVICES</Link></li>
                        <li><Link href="/contact" className={isActive('/contact')}>CONTACT US</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
