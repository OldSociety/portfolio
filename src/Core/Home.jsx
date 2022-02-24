import React from 'react'

const Home = () => {
  return (
    <>
      <h1 className='header'>Austin Lance, full-stack developer</h1>
      <p className="grey-text">this is my story.</p>
      <a className="flat-button" rel="contact" href="/contact">
        <div className="">
          <span className='bg'></span>
          <span className='base'></span>
          <span className='contact_body'>Say Hello!</span>
        </div>
      </a>
    </>
  )
}

export default Home
