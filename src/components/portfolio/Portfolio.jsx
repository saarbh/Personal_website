import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/nCu+dL.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
{
  id:1,
  image: IMG1,
  title: 'QB-Puzzle Platformer game',
  link: 'https://noa-lev.itch.io/qb',
  btntext: 'Play Online'
},
{
  id:2,
  image: IMG2,
  title: '3D Modeling and Sculpting',
  link: 'https://www.behance.net/saarbenhorin',
  btntext: 'Behance'
},
{
  id:3,
  image: IMG3,
  title: 'VR Story experience',
  link: 'https://youtu.be/-H5r-it5c7w',
  btntext: 'Gameplay Video'
},
{
  id:4,
  image: IMG4,
  title: 'Comic book print',
  link: 'https://drive.google.com/file/d/1jjN05e6X5UpNIA6t2000KUoeSbsYp6kC/view',
  btntext: 'View print file'
},
{
  id:5,
  image: IMG5,
  title: 'Wordpress Website',
  link: 'https://magen4u.co.il/',
  btntext: 'Visit website'
},
{
  id:6,
  image: IMG6,
  title: 'Hebrew Typeface Design',
  link: 'https://drive.google.com/drive/folders/1Gm1vhiN5JSUlx_56IYN4Q4v6h-zxTupb?usp=sharing',
  btntext: 'Download Now!'
}
]


export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>WORK</h5>
      <h2>Current Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,link,btntext}) => {
          return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={link} className='btn btn-primary' target="_blank">{btntext}</a>
              </div>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}
export default Portfolio
