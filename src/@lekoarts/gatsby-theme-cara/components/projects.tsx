/** @jsx jsx */
import { jsx } from 'theme-ui';
import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider';
import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner';
import Content from '@lekoarts/gatsby-theme-cara/src/elements/content';
import SVG from '@lekoarts/gatsby-theme-cara/src/components/svg';
import {
  UpDown,
  UpDownWide,
} from '@lekoarts/gatsby-theme-cara/src/styles/animations';

import blaxpoImg from '../../../assets/blaxpo.gif';
import cnaImg from '../../../assets/cna-classes.gif';
// @ts-ignore
import ProjectsMDX from '../sections/projects';
import ProjectDetails from './projectDetails';

const Projects = ({
  offset,
  factor = 2,
}: {
  offset: number;
  factor?: number;
}) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1` },
          }}
        >
          <ProjectDetails
            name="CNA Classes For Me"
            img={cnaImg}
            link="https://cnaclassesforme.com"
            challenge="Connect potential nursing students with relevant, verified schools across the United States"
            solution="Full-fledged directory for nursing schools with approval process."
            techStack="ReactJS, NextJS, Google Cloud Platform, Firebase, TypeScript, CSS."
          />
          <ProjectDetails
            altPosition
            name="BLAXPO"
            img={blaxpoImg}
            link="https://blaxpo.ca"
            challenge="Build novel user interface letting job candidates interact with potential employers."
            solution="Tinder-style swipe-to-match game for national career fair."
            techStack="ReactJS, Animation, TypeScript, Github Actions."
          />
          <ProjectsMDX />
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
        <SVG icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
        <SVG
          icon="triangle"
          width={8}
          stroke
          color="icon_orange"
          left="25%"
          top="5%"
        />
        <SVG
          icon="circle"
          hiddenMobile
          width={24}
          color="icon_brightest"
          left="17%"
          top="60%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="arrowUp"
          hiddenMobile
          width={16}
          color="icon_green"
          left="20%"
          top="90%"
        />
        <SVG
          icon="triangle"
          width={12}
          stroke
          color="icon_brightest"
          left="90%"
          top="30%"
        />
        <SVG
          icon="circle"
          width={16}
          color="icon_yellow"
          left="70%"
          top="90%"
        />
        <SVG
          icon="triangle"
          hiddenMobile
          width={16}
          stroke
          color="icon_teal"
          left="18%"
          top="75%"
        />
        <SVG
          icon="circle"
          width={6}
          color="icon_brightest"
          left="75%"
          top="10%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_green"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG
        icon="circle"
        hiddenMobile
        width={6}
        color="icon_brightest"
        left="4%"
        top="20%"
      />
      <SVG icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
      <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
      <SVG
        icon="hexa"
        width={16}
        stroke
        color="icon_red"
        left="75%"
        top="30%"
      />
      <SVG
        icon="hexa"
        width={8}
        stroke
        color="icon_yellow"
        left="80%"
        top="70%"
      />
    </Divider>
  </div>
);

export default Projects;
