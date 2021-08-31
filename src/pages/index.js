import React from 'react'
import background from '../../src/images/background.jpg'

const Home = () => {
    return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
            backgroundImage: `url(${background})`
          }}
        >
          <h1>Pokemon World</h1>
        </div>
    )
}

export default Home
