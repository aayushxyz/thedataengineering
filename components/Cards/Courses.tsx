import { Grid, Card, Text, Title, Center, Box, Stack, GridCol, Group } from "@mantine/core";
import { Icon } from '@tabler/icons-react';
import { ReactElement } from 'react';
import classes from "./Courses.module.css";

export interface Course {
  icon: ReactElement<Icon>;
  title: string;
  description: string;
  href: string;
  category: string;
}

interface CoursesProps {
  headerTitle: string;
  headerDescription: string;
  courses: Course[];
}

export function Courses({headerTitle, headerDescription, courses} : CoursesProps){
  return (
    <Box py={80} className={classes.wrapper}>
      <Box px="md" mx="auto" maw={1200}>
        <Stack gap={60}>
          <Box>
            <Title className={classes.title} order={2} ta="center" size={40} fw={800}>
            {headerTitle}
            </Title>
            <Text c="dimmed" ta="center" size="lg" maw={600} mx="auto" mt="md">
            {headerDescription}
            </Text>
          </Box>

          <Grid gutter={40}>
            {courses?.map((course, i) => (
              <GridCol key={i} span={{ base: 12, md: 6, lg: 3 }}>
                <Card shadow="sm" p="lg" radius="md" withBorder component="a" href={course.href} className={classes.fixedCard}>
                  <Group align="flex-start">
                    {/* <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 60, height: 60 }}> */}
                      {course.icon}
                    {/* </Box> */}
                    <Box>
                      <Text size="lg" mb={4}>{course.title}</Text>
                      <Text c="dimmed" size="sm">{course.description}</Text>
                    </Box>
                  </Group>
                </Card>
              </GridCol>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};