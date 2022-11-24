import React from 'react';
import './projectDetails.css';

interface ProjectDetailsProps {
  name: string;
  img: string;
  link: string;
  challenge: string;
  solution: string;
  techStack: string;
  altPosition?: boolean;
}

export default function ProjectDetails({
  name,
  img,
  link,
  challenge,
  solution,
  techStack,
  altPosition,
}: ProjectDetailsProps) {
  return (
    <>
      <h2>
        Case Study:{' '}
        <a href={link} target="_blank">
          {name}
        </a>
      </h2>
      {!altPosition && (
        <img className="project-details-image" src={img} alt={name} />
      )}
      <div className="project-details">
        <div>
          <span className="details-title">Challenge:</span>
          <span>{challenge}</span>
        </div>
        <div>
          <span className="details-title">Solution:</span>
          <span>{solution}</span>
        </div>
        <div>
          <span className="details-title">Tech:</span>
          <span>{techStack}</span>
        </div>
      </div>
      {altPosition && (
        <img className="project-details-image" src={img} alt={name} />
      )}
    </>
  );
}
