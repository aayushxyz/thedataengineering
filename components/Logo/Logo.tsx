import { Group, Text } from '@mantine/core';

export function Logo() {
  return (
    <Group align="center" gap={4} wrap="nowrap">
      <img
        src="/logo.png"
        alt="Data Engineering Website Logo"
        style={{ maxWidth: '38px', height: 'auto', flexShrink: 0 }}
      />
      <Text fz={22} fw={800} style={{ minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        The Data Engineering
      </Text>
      <span style={{display:'none'}}>
        Logo image courtesy of pojok d - Flaticon:
        href="https://www.flaticon.com/free-icons/technology"
        title="technology icons"
        Technology icons created by pojok d - Flaticon
      </span>
    </Group>
  );
}
