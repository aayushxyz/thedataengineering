import { getPageMap } from 'nextra/page-map';
import { IconColorSwatch } from '@tabler/icons-react';
import { Card, Text, Box, Center, Stack, Grid, GridCol, Title } from '@mantine/core';
import classes from './Courses.module.css';

interface PageMapItem {
  title?: string;
  frontMatter?: {
    category?: string;
    description?: string;
    [key: string]: any;
  };
  children?: PageMapItem[];
  [key: string]: any;
}

function flattenPageMap(items: PageMapItem[]): PageMapItem[] {
  return items.reduce<PageMapItem[]>((acc, item) => {
    acc.push(item);
    if (item.children && item.children.length > 0) {
      acc.push(...flattenPageMap(item.children));
    }
    return acc;
  }, []);
}

interface FilterByCategoryProps {
  category: string;
}

export async function FilterByCategory({ category }: FilterByCategoryProps) {
  const pageMap = await getPageMap();
  const flattenedPageMap = flattenPageMap(pageMap);
  const caseStudies = flattenedPageMap.filter(
    (item) =>
      item.frontMatter &&
      item.frontMatter.category &&
      item.frontMatter.category.toLowerCase() === category.toLowerCase()
  );
  return (
    <Box px="md" mx="auto" maw={1200} py={60} className={classes.wrapper}>
      <Box>
        <Title className={classes.title} order={2} ta="center" size={40} fw={800} mb="50px">
          Case Studies
        </Title>
      </Box>
      <Grid gutter={40}>
        {caseStudies.map((item) => (
          <GridCol key={item.title} span={{ base: 12, md: 6, lg: 4 }}>
            <Card className={classes.card} p={30} radius="md" withBorder>
              <Stack gap="lg">
                <Center>
                  <Box className={classes.iconWrapper}>
                    <IconColorSwatch size={28} stroke={1.5} />
                  </Box>
                </Center>
                <Stack gap="sm">
                  <Text className={classes.cardTitle}>{item.title}</Text>
                  <Text size="md" c="dimmed" lh={1.6}>
                    {item.frontMatter?.description}
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </GridCol>
        ))}
      </Grid>
    </Box>
  );
}
