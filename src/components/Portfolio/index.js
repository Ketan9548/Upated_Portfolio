import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import JavaScript_Developer_Ketan_Resume from '../../assets/JavaScript_Developer_Ketan_Resume.pdf'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = JavaScript_Developer_Ketan_Resume
    link.download = 'JavaScript_Developer_Ketan_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div className="about_me">
          <p className='text_about'>
            I am a passionate and experienced full stack developer with a strong
            background in building robust, scalable, and end-to-end web
            applications, proficient in both front-end and back-end technologies
            to deliver seamless user experiences.
          </p>
        </div>
        <h1 className="skills">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Resume'.split('')}
            idx={12}
          />
        </h1>
        <div className="button1">
          <button className="donload" onClick={handleDownload}>
            <href>Download Resume</href>
          </button>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
