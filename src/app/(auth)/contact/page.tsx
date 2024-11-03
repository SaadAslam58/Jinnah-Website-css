import React from 'react'
import { FaAddressBook, FaPhone, FaEnvelope, FaMeetup} from 'react-icons/fa'
const page = () => {
  return (
    <div>
      <div className='box'>
      <div className='Contact'>
        <h1>Meet Us <FaMeetup className='meetup'/></h1>
        <p><FaPhone className='icon' /> 0341-2322685</p>
        <p><FaEnvelope className='icon' /> saadxpert58@gmail.com</p>
        <p><FaAddressBook className='icon'/> Nort Nazmabad Sector/C block 11</p>
      </div>
      </div>
    </div>
  )
}

export default page