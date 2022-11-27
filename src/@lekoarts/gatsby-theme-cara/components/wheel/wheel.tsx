import SVG from '@lekoarts/gatsby-theme-cara/src/components/svg';
import Content from '@lekoarts/gatsby-theme-cara/src/elements/content';
import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider';
import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner';
import {
  UpDown,
  UpDownWide,
} from '@lekoarts/gatsby-theme-cara/src/styles/animations';
import React from 'react';
import WheelCanvas from './canvas';

/**
 * References:
 *
 * - https://codepen.io/zadvorsky/pen/xxyebY
 * - https://codepen.io/he9qi/pen/wvaBzqj
 * - http://dougtesting.net/winwheel/examples/wheel_of_fortune
 * - https://konvajs.org/docs/sandbox/Wheel_of_Fortune.html
 * - https://jsfiddle.net/joya/L9e95vhk/
 */
export default function Wheel({
  offset,
  factor = 1,
}: {
  offset: number;
  factor?: number;
}) {
  return (
    <div>
      <Divider
        bg="divider"
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={offset}
        factor={factor}
      />
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <SVG
            icon="box"
            hiddenMobile
            width={6}
            color="icon_blue"
            left="50%"
            top="75%"
          />
          <SVG
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_darkest"
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke
            color="icon_darkest"
            left="25%"
            top="5%"
          />
          <SVG
            icon="upDown"
            hiddenMobile
            width={24}
            color="icon_orange"
            left="80%"
            top="80%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            hiddenMobile
            width={16}
            color="icon_purple"
            left="5%"
            top="80%"
          />
          <SVG
            icon="triangle"
            width={12}
            stroke
            color="icon_brightest"
            left="95%"
            top="50%"
          />
          <SVG
            icon="circle"
            hiddenMobile
            width={6}
            color="icon_brightest"
            left="85%"
            top="15%"
          />
          <SVG
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_darkest"
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
        <SVG
          icon="circle"
          width={12}
          color="icon_darkest"
          left="70%"
          top="60%"
        />
        <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
        <SVG icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
        <SVG
          icon="hexa"
          width={8}
          stroke
          color="icon_darkest"
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={offset} factor={factor}>
        <Inner>
          <h1>Win a free tip!</h1>
          <WheelCanvas />
        </Inner>
      </Content>
    </div>
  );
}
