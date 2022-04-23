import React from 'react'
import './about.css'
import IMG from '../../assets/little_saar.png'
import {FiAward} from 'react-icons/fi'
import {FaUsers} from 'react-icons/fa'
import {MdCheckCircle} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5 className='.text-light'>
        What makes me different
      </h5>
      <h2 className='.text-light'>
        working with me
      </h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={IMG} alt="About" className='about__me-image' />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h2>Experienece</h2>
              <h5>6+ Years IT Experienece</h5>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h2>Clients</h2>
              <h5>Small Medium Business</h5>
            </article>

            <article className='about__card'>
              <MdCheckCircle className='about__icon'/>
              <h2>Projects</h2>
              <h5>25+ Completed</h5>
            </article>

          </div>
          <p>
          An IT professional with 6 years of experience in system programing. highly motivated, dynamic and innovative individual with hunger to develop and influence, currently focusing on mastering Unity independent game creation skills.
Freelance developer & designer while finishing visual communication gaming program in Bezalel arts academy,last year participated in the first founders design program of the school.
Specialize in game design, video editing and graphic design for both web and print.
With excellent social skills, preferred working as part of a team, but capable of working independently.
On my spare time, I enjoy learning arabic and russian languages, and going out traveling, trekking the outdoors.
          </p>
          <div className="btn__holder">
          <a href='#contact' className='btn btn-primary'> Let's talk</a>
          </div>
        </div>
      
      </div>
    </section>
  )
}

export default About