import React from 'react'
import Link from 'next/link'
import {FaGlobe, } from 'react-icons/fa'
const Header = () => {
  return (
    <div>
        <div>
          <header>
              <h1>Father Of The Nation <FaGlobe className="meetup"/></h1>
            <nav >
              <ul>
                <Link href="/">
                  <li>Home</li>
                </Link>
                <Link href='/about'>
                <li>About</li>
                </Link>
                <Link href='/contact'>
                <li>Contact</li>
                </Link>
              </ul>
            </nav>
          </header>
        </div>
    </div>
  )
}

export default Header