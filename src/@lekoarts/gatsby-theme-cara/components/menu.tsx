import React from 'react';
import './menu.css';

interface MenuProps {
  scrollToAbout: () => void;
  scrollToContact: () => void;
  scrollToProjects: () => void;
}

export default function Menu(props: MenuProps) {
  return (
    <ul className="menu">
      <li>
        <button onClick={props.scrollToProjects}>Our Work</button>
      </li>
      <li>
        <button onClick={props.scrollToAbout}>Our Team &amp; Expertise</button>
      </li>
      <li>
        <button className="contact" onClick={props.scrollToContact}>
          Contact Us
        </button>
      </li>
    </ul>
  );
}
