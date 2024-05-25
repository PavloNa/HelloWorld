import './App.css';
import { useRef, useEffect, useState } from 'react';

import {gsap, Power3} from 'gsap'
import coverimg from './images/intro.png';

function App() {
  let app = useRef(null)
  let text = useRef(null)
  let cover = useRef(null)

  const [textSize, setTextSize] = useState(false);

  const handleExpand = () => {
    gsap.to(text, .8, {fontSize: 'calc(20px + 2vmin)', ease: Power3.easeOut})
    setTextSize(true)
  }

  const handleShrink = () => {
    gsap.to(text, .8, {fontSize: 'calc(10px + 2vmin)', ease: Power3.easeOut})
    setTextSize(false)
  }

  useEffect(() => {
    gsap.to(app, 0, {css: {visibility: 'visible'}})
    gsap.to(text, .8, {opacity: 1, y: -20, ease: Power3.easeOut})
    gsap.to(cover, 0, {css: {visibility: 'visible'}})
  }, [])

  return (
    <>
    <div className="App" ref={el => app = el}>
      <header className="App-header">
      </header>
      <body className="App-body">
        <div>
          <img className='intro-pic' src={coverimg} loading='eager' ref={el => {cover = el}}></img>
        </div>
        <div className='Main-text' ref={el => {text = el}} onClick={textSize !== true ? handleExpand : handleShrink}> 
        <p>
          My portfolio
        </p>
        </div>
      </body>
    </div>
    </>
  );
}

export default App;
