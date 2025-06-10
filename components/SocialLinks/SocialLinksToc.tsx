import { Button, Box, Text } from '@mantine/core';
import { SocialLinks } from './SocialLinks';

/**
 * SocialLinksToc - For use in TOC (sidebar, layout) as a compact subscribe+social section.
 * In sync with the subscribe section in LandingPage, but more concise for sidebar use.
 */
export const SocialLinksToc = () => (
  <Box style={{ textAlign: 'center', marginTop: 16 }}>
    <Button
      size="sm"
      radius="md"
      variant="light"
      color="indigo"
      mt="20px"
      title="Join our Newsletter"
      component="a"
      href="https://aayushxyz.substack.com/"
      target="_blank"
      rel="noopener noreferrer"
      fullWidth
      style={{ marginBottom: 8 }}
    >
      Join our Free Newsletter
    </Button>
    <Text size="xs" c="dimmed" mb={4} mt={2}>
      Practical Data Engineering,<br/> Straight to your Inbox.
    </Text>
    <SocialLinks size="lg" color="gray" gap={0} variant="subtle" justify="center" wrap="nowrap" />
  </Box>
);
