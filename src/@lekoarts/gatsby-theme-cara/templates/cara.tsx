import React, { useRef } from 'react';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import Layout from '@lekoarts/gatsby-theme-cara/src/components/layout';
import Hero from '@lekoarts/gatsby-theme-cara/src/components/hero';
import Projects from '@lekoarts/gatsby-theme-cara/src/components/projects';
import About from '@lekoarts/gatsby-theme-cara/src/components/about';
import Contact from '@lekoarts/gatsby-theme-cara/src/components/contact';
import Menu from '../components/menu';

export default function Cara() {
  const ref = useRef<Parallax>(null);

  function scrollToProjects() {
    ref.current?.scrollTo(1);
  }

  function scrollToAbout() {
    ref.current?.scrollTo(3);
  }

  function scrollToContact() {
    ref.current?.scrollTo(4);
  }

  return (
    <Layout>
      <Menu
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
        scrollToProjects={scrollToProjects}
      />
      <Parallax pages={5} ref={ref}>
        <Hero offset={0} factor={1} />
        <Projects offset={1} factor={2} />
        <About offset={3} factor={1} />
        <Contact offset={4} factor={1} />
      </Parallax>
    </Layout>
  );
}
