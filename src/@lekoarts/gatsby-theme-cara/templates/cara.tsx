import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { IParallax, Parallax } from '@react-spring/parallax';
import Layout from '@lekoarts/gatsby-theme-cara/src/components/layout';
import Hero from '@lekoarts/gatsby-theme-cara/src/components/hero';
import Projects from '../components/projects';
import About from '@lekoarts/gatsby-theme-cara/src/components/about';
import Contact from '../components/contact';
import Seo from '@lekoarts/gatsby-theme-cara/src/components/seo';
import Menu from '../components/menu';
import Weather from '../components/weather/wrapper';
import Wheel from '../components/wheel/wheel';
import './shared.css';

function Cara() {
  const ref = React.useRef<IParallax>(null);

  function scrollToProjects() {
    ref.current?.scrollTo(1);
  }

  function scrollToFreebies() {
    ref.current?.scrollTo(3);
  }

  function scrollToAbout() {
    ref.current?.scrollTo(5);
  }

  function scrollToContact() {
    ref.current?.scrollTo(6);
  }

  return (
    <Layout>
      <Menu
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
        scrollToFreebies={scrollToFreebies}
        scrollToProjects={scrollToProjects}
      />
      <Parallax pages={7} ref={ref}>
        <Hero offset={0} factor={1} />
        <Projects offset={1} factor={2} />
        <Wheel offset={3} factor={1} />
        <Weather offset={4} factor={1} />
        <About offset={5} factor={1} />
        <Contact offset={6} factor={1} />
      </Parallax>
    </Layout>
  );
}

export default Cara;

export const Head: HeadFC = () => <Seo />;
