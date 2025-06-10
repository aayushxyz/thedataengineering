import { IconBrandLinkedin, IconBrandTwitter, IconBrandMedium, IconMail } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { Logo } from '../Logo/Logo';
import classes from './Footer.module.css';

/**
 * You can customize the Nextra Footer component.
 * Don't forget to use the MantineProvider component.
 *
 * @since 1.0.0
 *
 */
export const MantineFooter = () => (
  <footer className={classes.footer}>
  <Container className={classes.inner}>
    <div className={classes.logo}>
  <Logo/>
  <Text size="sm" c="dimmed" mt='xs' mb='5' ta='center' className={classes.description}>
    Where Data Engineers Grow Together
  </Text>
</div>
    <SocialLinks size="lg" color="gray" gap={0} variant="subtle" justify="flex-end" wrap="nowrap" />
  </Container>
</footer>
);
