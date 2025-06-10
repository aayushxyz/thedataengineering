'use client';

import { Group, Text } from '@mantine/core';

import '@mantine/core/styles.css';

import { Navbar } from 'nextra-theme-docs';
import { ColorSchemeControl } from '../ColorSchemeControl/ColorSchemeControl';
import { Logo } from '../Logo/Logo';
import { MantineNextraThemeObserver } from '../MantineNextraThemeObserver/MantineNextraThemeObserver';

/**
 * You can customize the Nextra NavBar component.
 * Don't forget to use the MantineProvider and MantineNextraThemeObserver components.
 *
 * @since 1.0.0
 *
 */
export const MantineNavBar = () => {
  return (
    <>
      <MantineNextraThemeObserver />
      <Navbar
        logo={<Logo /> }
        // Mantine discord server
        //chatLink="https://discord.com/invite/"
        // projectLink="https://github.com/aayushxyz/thedataengineering"
      >
      <>
        <ColorSchemeControl />
      </>
      </Navbar>
    </>
  );
};
