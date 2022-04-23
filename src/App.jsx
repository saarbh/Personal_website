import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import IMG from './assets/TransProfile.png'
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from 'react-scroll-parallax';
import { useParallaxController } from 'react-scroll-parallax';

const ImageLoader = () => {
  const parallaxController = useParallaxController();
  return <img src={IMG} className="Hero__Image" onLoad={() => parallaxController.update()} />;
};
const Image = () => (
  <Parallax speed={30}>
    <ImageLoader />
  </Parallax>
);

const App = () => {

  return (
    <>
      <Header />
        <ParallaxProvider >
          <Image />
        </ParallaxProvider>

          <Nav />
      <About />

      <Experience />

      <Services />

      <Portfolio />

      <Contact />

      <Footer />
    </>
  )
}

export default App