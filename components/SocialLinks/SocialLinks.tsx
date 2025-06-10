import { ActionIcon, Group } from '@mantine/core';
import { IconMail, IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons-react';

interface SocialLinksProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  gap?: number;
  variant?: 'subtle' | 'filled' | 'light';
  justify?: 'center' | 'flex-end' | 'flex-start';
  wrap?: 'nowrap' | 'wrap';
}

export const SocialLinks = ({
  size = 'lg',
  color = 'gray',
  gap = 0,
  variant = 'subtle',
  justify = 'center',
  wrap = 'nowrap',
}: SocialLinksProps) => (
  <Group gap={gap} justify={justify} wrap={wrap}>
    <ActionIcon
      size={size}
      color={color}
      variant={variant}
      component="a"
      href="mailto:aayushsharma1771@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Email"
    >
      <IconMail size={18} stroke={1.5} />
    </ActionIcon>
    <ActionIcon
      size={size}
      color={color}
      variant={variant}
      component="a"
      href="https://x.com/aayushxyz"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
    >
      <IconBrandTwitter size={18} stroke={1.5} />
    </ActionIcon>
    <ActionIcon
      size={size}
      color={color}
      variant={variant}
      component="a"
      href="https://linkedin.com/in/aayushxyz"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <IconBrandLinkedin size={18} stroke={1.5} />
    </ActionIcon>
  </Group>
);
