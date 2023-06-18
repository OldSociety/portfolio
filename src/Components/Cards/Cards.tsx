import React from 'react'

class Cards extends React.Component {
  render() {
    return (
      <div className="cards">
        <h4 className='work-experience'> —— My Work —— </h4>
        <h6 className="">{`I'm a software and web developer and a writer based in West Hollywood, California. I love telling stories and working with brands, non-profits, game designers and fiction writers.`}</h6>
        <p />
        <div className="card">
          <div className="exp">
            <a className="exp-title" href="https://smoothstack.com">
              DevOps Engineer - Smoothstack
            </a>
            <p>June 2022 - February 2023</p>
          </div>
          <p className="exp-description">
            Led a team of 5 engineers to develop our creator tools and e-comerce
            app
          </p>
          <p className="exp-tools">
            TS • Next • Nest • Stitches • Mobx • Turbo
          </p>
        </div>
        <div className="card">
          <div className="exp">
            <a className="exp-title" href="https://smoothstack.com">
              Software Engineer - Thinkful Immersion Program
            </a>
            <p>October 2021 - April 2022</p>
          </div>
          <p className="exp-description">
            Worked with a range of large and small agencies, start-ups and
            individuals to build products. Clients included Marvel App, United
            Nations, Netflix, Dropbox Design.
          </p>
          <p className="exp-tools">
            TS • Next • Nest • Stitches • Mobx • Turbo
          </p>
        </div>
        {/* <div className="card">
          <div className="exp">
            <a className="exp-title" href="https://smoothstack.com">
              DevOps Engineer - Smoothstack
            </a>
            <p>2022 - present</p>
          </div>
          <p className="exp-description">
            Led a team of 5 engineers to develop our creator tools and e-comerce
            app
          </p>
          <p className="exp-tools">
            TS • Next • Nest • Stitches • Mobx • Turbo
          </p>
        </div> */}
      </div>
    )
  }
}

export default Cards
