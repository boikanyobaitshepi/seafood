import React from 'react'
import logo from '../../public/logo.png'

const Home = () => {

    // const navToggle = document.querySelector('.nav-toggle');
    // const navLinks = document.querySelectorAll('.nav__link')

    const HandleClick = () => {
        document.body.classList.toggle('nav-open');
    };

    // navLinks.forEach(link => {
    //     link.addEventListener('click', () => {
    //         document.body.classList.remove('nav-open');
    //     })
    // })

  return (
    <div>
        <header>
            <img className="logo" src={logo} alt=""/>
            <button className="nav-toggle" aria-label="toggle navigation" onClick={HandleClick}>
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="navlist">
                    <li className="navitem"><a href="#home" className="navlink">Home</a></li>
                    <li className="navitem"><a href="#services" className="navlink">My Services</a></li>
                    <li className="navitem"><a href="#about" className="navlink">About me</a></li>
                    <li className="navitem"><a href="#work" className="nav__link">My Work</a></li>
                </ul>
            </nav>
        </header>
      
    </div>
  )
}

export default Home
