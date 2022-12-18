import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import pic from './assets/pic.png'



function App() {
 return(
  <div className='container'>
   
    <img className='image' src={pic} />
    <div className='content'>
      <h1 className='ha'>SAHIL AGGARWAL</h1>
      <h2 className='hb'>Frontend Developer</h2>
      <a href="https://github.com/ghostridersahil"><h4>github.com/ghostrider</h4></a>
      <div className='but'>
        <a className='email' href="https://mail.google.com/"><button className='ema' >Email</button></a>
        <a className='linkin' href="https://www.linkedin.com/in/sahil-aggarwal-8220a322a/"><button className='lik'>LinkedIn</button></a>
      </div>
      <div className='about'>
        <h3><b>About</b></h3>
        <p>
        I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
        </p>
        <div className='interest'>
        <h3><b>Interests</b></h3>
        
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>
      </div>
      
    </div>
    <footer>
      ghfts
    </footer>
    
  </div>
 );
}

export default App
