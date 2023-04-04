import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpg'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id = 'about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>    
      {/* section structure, it has 2 child div which have a child of there own.*/}

      <div className="contatainer about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt='thats me'/>
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>8 Projects</small>
            </article>
          </div>
          <p>
          My name is Samrat, a graduate from NIT Nagaland and pursuing Masters in CS from UMBC. As a beginner in software development, I am eager to gain experience and learn new skills to become a successful developer. I enjoy playing chess and table tennis, playing FPS games, and staying up-to-date with the latest science and technology advancements.
          </p>
          <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About