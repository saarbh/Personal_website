import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5> My Skillset</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__developement">
        <h3>Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article> <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article> <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>C#</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article> <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Intermdiate</small>
            </div>
          </article> <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Vue</h4>
            <small className='text-light'>Intermdiate</small>
            </div>
            
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Three.JS</h4>
            <small className='text-light'>Intermdiate</small>
            </div>
            
          </article>
        </div>
        </div>
        <div className="experience__design">
        <h3>Design</h3>
        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Unity</h4>
            <small className='text-light'>Intermdiate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Adobe Programs</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Blender</h4>
            <small className='text-light'>Intermdiate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>zBrush</h4>
            <small className='text-light'>Intermdiate</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience