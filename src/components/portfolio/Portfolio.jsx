import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
{
  id:1,
  image: IMG1,
  title: 'QB-Puzzle Platformer game',
  link: 'https://noa-lev.itch.io/qb',
  btntext: 'PlayOnline'
},
{
  id:2,
  image: IMG2,
  title: '3D Modeling and Sculpting',
  link: 'https://noa-lev.itch.io/qb',
  btntext: 'Video Showreel'
},
{
  id:3,
  image: IMG3,
  title: 'VR Story experience',
  link: 'https://youtu.be/-H5r-it5c7w',
  btntext: 'Watch Video'
},
{
  id:4,
  image: IMG4,
  title: 'QB-Puzzle Platformer game',
  link: 'https://noa-lev.itch.io/qb',
  btntext: 'PlayOnline'
},
{
  id:5,
  image: IMG5,
  title: 'QB-Puzzle Platformer game',
  link: 'https://noa-lev.itch.io/qb',
  btntext: 'PlayOnline'
},
{
  id:6,
  image: IMG6,
  title: 'QB-Puzzle Platformer game',
  link: 'https://noa-lev.itch.io/qb',
  btntext: 'PlayOnline'
}
]


export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My work</h5>
      <h2> Portfolio</h2>
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
