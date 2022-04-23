import React from 'react'
import './about.css'
import IMG from '../../assets/photo_2019-04-05_19-21-13.jpg'
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
        Why me
      </h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={IMG} alt="About" className='about__me-image' />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experienece</h5>
              <small>6+ Years IT Experienece</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Small Medium Business</small>
            </article>

            <article className='about__card'>
              <MdCheckCircle className='about__icon'/>
              <h5>Projects</h5>
              <small>25+ Completed</small>
            </article>

          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic velit ducimus veniam laboriosam deleniti eligendi assumenda, repudiandae aspernatur natus magni dignissimos commodi nemo accusantium, incidunt ullam id quibusdam exercitationem. Optio
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