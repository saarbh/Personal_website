import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

export const Services = () => {
  return (
    <section id='services'>
      <h5>I Do</h5>
      <h2>Everyday</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h2>UI/UX Design</h2>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Unique user interface</p>
            </li>
      
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Clean clear Understandable user experience</p>
            </li>
         
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Usability and Accesibilty in mind</p>
            </li>
         
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Great passion to details</p>
            </li>
   
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Boasting solid colors</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h2>Game Design</h2>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Unity, Godot and Unreal experience</p>
            </li>
      
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Game Design Document</p>
            </li>
          
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Programming both in C# and Visual scripting</p>
            </li>
     
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Strong visual communication language</p>
            </li>
   
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Multi-platform game support: Android, iOS, PC, VR </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h2>Website Building</h2>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Wix, Elementor and Webflow website design</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Shopify, Woocommerce E-commerce online shops </p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Infrasracture management: Domain, SSL certificate, login</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Email distruction list configuration</p>
            </li>

         
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Strengthening your visual indentity in the digital space </p>
            </li>
        </ul>
        </article>
      </div>
    </section>
  )
}
export default Services