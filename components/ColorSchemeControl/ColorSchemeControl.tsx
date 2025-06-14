import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import { useTheme } from 'nextra-theme-docs';
import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { HeaderControl } from './HeaderControl';
import classes from './ColorSchemeControl.module.css';

export function ColorSchemeControl() {
  const { setColorScheme } = useMantineColorScheme();
  const { setTheme, theme } = useTheme();

  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  const handleColorSchemeChange = () => {
    const newColorScheme = computedColorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newColorScheme);
    setTheme(newColorScheme);
  };

  return (
    <HeaderControl
      onClick={handleColorSchemeChange}
      tooltip={`${computedColorScheme === 'dark' ? 'Light' : 'Dark'} mode`}
      aria-label="Toggle color scheme"
    >
      {/* {computedColorScheme === 'light' ? ( */}
        <IconSun className={classes.icon} stroke={1.5} />
       {/* ) : (
         <IconMoon className={classes.icon} stroke={1.5} />
       )} */}
    </HeaderControl>
  );
}
