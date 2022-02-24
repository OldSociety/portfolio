import React from 'react'

const Header = () => {
  return (
    <section id="masthead" className="masthead loaded">
      <div className="container">
        <div className="row">
          <div className="col">
          <nav>
            <ul>
              <li>Work</li>
              <li>Contact</li>
              <li><button type='submit'>Resume</button></li>
            </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
