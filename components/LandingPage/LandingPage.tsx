import { Container, Title, Text, Button, Group, Stack, Grid, ThemeIcon, Box, Paper, GridCol, Image, Card, SimpleGrid, Accordion, AccordionItem, AccordionControl, AccordionPanel, Badge } from "@mantine/core";
import { IconRocket, IconListDetails, IconMessages, IconTools, IconBook, IconDatabaseImport, IconSchema, IconTransform, IconRoute, IconShieldCheck, IconSettings, IconUserQuestion, IconMap2, IconChartBar, IconClockBolt, IconTargetArrow, IconSparkles, IconUsers, IconTrendingUp, IconFileText, IconTerminal2, IconColumns, IconBulb } from '@tabler/icons-react';
import classes from "./LandingPage.module.css";

// Curated Resources Data - No changes needed here
interface ResourceItem {
  icon: React.FC<any>;
  title: string;
  description: string;
  href: string;
}

// Merged and deduplicated list (removed: Cheat Sheets, Tool Comparisons, and duplicates by href)
const RESOURCES_LIST: ResourceItem[] = [
  { icon: IconTools, title: 'Essential Tools', description: 'Key tools for every data engineer.', href: '/tools' },
  { icon: IconMessages, title: 'Interview Preparation', description: 'Practice real questions and scenarios.', href: '/interview-preparation' },
  { icon: IconTargetArrow, title: 'Learning Paths', description: 'Step-by-step paths for every level.', href: '/learning-paths' },
  { icon: IconBook, title: 'Tutorials', description: 'Clear guidance for robust pipelines.', href: '/tutorials' },
  { icon: IconChartBar, title: 'Case Studies', description: 'Lessons from real-world projects.', href: '/case-studies' },
  { icon: IconTerminal2, title: 'Hands-on Labs', description: 'Build real world skills in interactive labs.', href: '/labs' },
  { icon: IconUserQuestion, title: 'Mock Interviews', description: 'Simulate interviews by topic or difficulty.', href: '/mock-interview' },
  { icon: IconBulb, title: 'Projects', description: 'Inspiring briefs for your portfolio.', href: '/projects' },
];

// Courses Data (Domains) - No changes needed here
const COURSES_LIST = [
  { title: "Foundational Knowledge", description: "Core concepts, programming essentials, and system basics.", icon: <IconBook size={28} />, href: "/foundational-knowledge" },
  { title: "Data Ingestion", description: "Acquiring raw data from diverse sources into your systems.", icon: <IconDatabaseImport size={28} />, href: "/data-ingestion" },
  { title: "Data Modeling & Storage", description: "Structuring, organizing, and storing data efficiently.", icon: <IconSchema size={28} />, href: "/data-modeling-storage" },
  { title: "Data Transformation", description: "Cleaning, reshaping, and enriching data for analysis.", icon: <IconTransform size={28} />, href: "/data-transformation" },
  { title: "Data Orchestration", description: "Automating, scheduling, and managing data workflows.", icon: <IconRoute size={28} />, href: "/data-orchestration" },
  { title: "Data Quality & Governance", description: "Ensuring data accuracy, security, and compliance.", icon: <IconShieldCheck size={28} />, href: "/data-quality-governance" },
  { title: "Data Operations", description: "Applying DevOps principles to the data lifecycle.", icon: <IconSettings size={28} />, href: "/data-operations-dataops" },
  { title: "Data Visualization", description: "Presenting data insights effectively to end-users.", icon: <IconChartBar size={28} />, href: "/data-visualization-reporting" },
];

// Features Data - Descriptions slightly refined for conciseness
const FEATURES_LIST = [
  { icon: IconClockBolt, title: 'Stay Current, Not Overwhelmed', description: 'Cut through the noise. Get practical, up-to-date guidance on the essential tools and frameworks, curated by fellow engineers.' },
  { icon: IconTargetArrow, title: 'Actionable Solutions for Core Challenges', description: 'Find clear strategies for scalable pipelines, data quality, and best practices—based on real-world experience.' },
  { icon: IconMessages, title: 'Ace Your Data Engineering Interviews', description: 'Prepare confidently with targeted questions, system design scenarios, and advice grounded in actual interview experiences.' },
  { icon: IconUsers, title: 'Learn from Real-World Experience', description: 'Benefit from insights and solutions forged in the daily challenges faced by data engineers—because we\'ve been there too.' },
  { icon: IconSparkles, title: 'Instantly Accessible, Totally Free', description: 'High-quality knowledge at your fingertips. No logins, no fees, just the practical help you need, right when you need it.' },
  { icon: IconTrendingUp, title: 'Structured Paths for Career Growth', description: 'Navigate your learning effectively with curated paths—from fundamentals to advanced topics—designed to help you achieve specific career goals.' },
];

// Testimonials Data - No changes needed here
interface Testimonial {
  name: string;
  role: string;
  testimonial: string;
}
const TESTIMONIALS_LIST: Testimonial[] = [
  { name: 'Priya S.', role: 'Data Engineer, FinTech Startup', testimonial: 'The guides here helped me crack my first data engineering interview! The practical advice and sample questions were spot on.' },
  { name: 'Rahul M.', role: 'Aspiring Data Engineer', testimonial: 'I love how everything is explained clearly. The learning paths gave me the confidence to switch careers.' },
  { name: 'Emily T.', role: 'Senior Data Engineer', testimonial: 'Finally, a resource that’s up-to-date and actually useful for real engineering challenges. Highly recommended.' },
  { name: 'Carlos G.', role: 'Data Science Student', testimonial: 'The project ideas and cheat sheets made my coursework and side projects so much easier. Thank you!' },
  { name: 'Ananya P.', role: 'ETL Developer', testimonial: 'Clear, concise, and practical. This site is now my go-to for all things data engineering.' },
];

// FAQ Data - No changes needed here
interface FAQItem {
  question: string;
  answer: string;
}
const FAQ_LIST: FAQItem[] = [
  { question: 'How much does it cost?', answer: 'ZERO. Its free and open source.' },
  { question: 'How is content created?', answer: 'We write them. And we also do use LLMs to draft, modify the content but it is thoroughly verified and the sources are mentioned in each article.' },
  { question: 'How can I contribute?', answer: 'Currently we have just started out, we are not taking contributions but we sure will let you know once we mainstream some of the workflows.' },
];

export default function LandingPage() {
  return (
    <Box>
      {/* 1. HERO SECTION */}
      <Box>
        <Container size="xl" py={{ base: 30, sm: 40, md: 60 }}>
          <Grid mt='50px' gutter={{ base: 40, md: 20 }} align="center">
            <GridCol span={{ base: 12, md: 12 }}>
              <Stack gap="xl">
                <Group justify="center">
                  <Badge variant="light" size="lg" radius="md">
                    ✅ Free & Open Source - Building in Public
                  </Badge>
                </Group>
                <Group justify="center">
                  <Title className={classes.title} order={1} fz={{ base: 36, sm: 42, md: 60 }} lh='1.2'>
                    Data Engineering Is Complex <br/>
                    <Text component="span" className={classes.highlight} inherit>
                    We Make It Simple For You<br/>
                    </Text>
                  </Title>
                </Group>
                <Group justify="center">
                  <Text size="lg" c="dimmed" style={{textWrap: 'balance', textAlign: "center"}}>
                      Learn the fundamentals, patterns, tools, and best practices that matter.<br/>
                      Get in-depth guides and actionable strategies from real-world use cases.
                  </Text>
                </Group>
                <Group mt="lg" justify="center" gap="md">
                  <Button
                    size="xl"
                    radius="xl"
                    leftSection={<IconRocket style={{ width: '1.5rem', height: '1.5rem' }} />}
                    variant="light"
                    component="a"
                    href="/#courses"
                  >
                    Let's Get Started
                  </Button>
                  {/* <Button
                    size="xl"
                    radius="xl"
                    variant="outline"
                    component="a"
                    href="/community"
                  >
                    Join the Community
                  </Button> */}
                </Group>
                <Group mt="xl" gap="lg" justify="center">
                  {[{ icon: <IconListDetails style={{ width: '70%', height: '70%' }}/>, label: "Curated Guides" }, { icon: <IconMessages style={{ width: '70%', height: '70%' }}/>, label: "Interview Prep" }, { icon: <IconTools style={{ width: '70%', height: '70%' }}/>, label: "Tool Coverage" }].map((feature, index) => (
                    <Group key={index} gap="xs">
                      <ThemeIcon size="md" variant="light" radius="md">
                        {feature.icon}
                      </ThemeIcon>
                      <Text size="sm" c="dimmed">
                        {feature.label}
                      </Text>
                    </Group>
                  ))}
                </Group>
              </Stack>
            </GridCol>
          </Grid>
        </Container>
      </Box>

      {/* 2. CURATED RESOURCES SECTION */}
      {/* <Container id="resources-section" size={1100} mt={80} mb={80}>
        <Box>
          <Title className={classes.title} order={2} ta="center" size={40} fw={800}>
            Curated Resources for Every Stage
          </Title>
          <Text c="dimmed" ta="center" size="lg" maw={600} mx="auto" mt="md" mb="xl">
            Save time and learn faster with resources selected by experienced engineers for maximum impact.
          </Text>
        </Box>
        <SimpleGrid mt="30px" cols={{ base: 1, sm: 2, md: 4 }} spacing={30}>
          {RESOURCES_LIST.map((item: ResourceItem, idx: number) => (
            <Card key={idx} shadow="sm" p="md" radius="md" component="a" href={item.href} withBorder className={classes.fixedCard}>
              <Group>
                <ThemeIcon variant="light" size={40} radius="md">
                  <item.icon size={28} />
                </ThemeIcon>
                <Box>
                  <Text fw={700}>{item.title}</Text>
                  <Text size="sm" c="dimmed">{item.description}</Text>
                </Box>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Container> */}

      {/* 3. COURSES SECTION (Domains) */}
      <Container id="courses" size={1100} mt={100} mb={80}>
        <Box>
          <Title className={classes.title} order={2} ta="center" size={40} fw={800}>
            Master Data Engineering Domains
          </Title>
          <Text c="dimmed" ta="center" size="lg" maw={600} mx="auto" mt="md" mb="xl">
            Explore key areas with structured learning paths, from foundational concepts to advanced designs.
          </Text>
        </Box>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={30}>
          {COURSES_LIST.map(course => (
            <Card key={course.title} shadow="sm" p="md" radius="md" component="a" href={course.href} withBorder className={classes.fixedCard}>
              <Group>
                <ThemeIcon variant="light" size={40} radius="md">
                  {course.icon}
                </ThemeIcon>
                <Box>
                  <Text fw={700}>{course.title}</Text>
                  <Text size="sm" c="dimmed">{course.description}</Text>
                </Box>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* 4. FEATURES SECTION (Why Trust Us) */}
      <Container size={1100} mt={100} mb={80}>
        <Box>
          <Title className={classes.title} order={2} ta="center" size={40} fw={800}>
            Why Data Engineers Trust Us
          </Title>
          {/* <Text c="dimmed" ta="center" size="lg" maw={600} mx="auto" mt="md">
            Discover our value: always-current, practical resources built by engineers, for engineers.
          </Text> */}
        </Box>
        <SimpleGrid mt={60} cols={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 'xl', md: 50 }} verticalSpacing={{ base: 'xl', md: 50 }}>
          {FEATURES_LIST.map((feature, idx) => (
            <Card key={idx} shadow="sm" p="md" radius="md" className={classes.fixedCard}>
              {/* <ThemeIcon variant="light" size={50} radius={40} mb="md"> */}
                <feature.icon size={28} />
              {/* </ThemeIcon> */}
              <Text fw={700} mt="xs" mb={5}>{feature.title}</Text>
              {/* <<< Descriptions updated via FEATURES_LIST constant */}
              <Text size="sm" c="dimmed">{feature.description}</Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container>



      {/* 5. TESTIMONIALS SECTION */}
      {/* <Container size={1100} mt={100} mb={80}>
        <Box>
          <Title className={classes.title} order={2} ta="center" size={40} fw={800}>
            Real Results from Fellow Engineers
          </Title>
          <Text c="dimmed" ta="center" size="lg" maw={600} mx="auto" mt="md" mb="xl">
            Hear from engineers and learners who’ve used our resources.
          </Text>
        </Box>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={40}>
          {TESTIMONIALS_LIST.map((t, idx) => (
            <Card key={idx} shadow="md" p="lg" radius="md" className={classes.fixedCard}>
              <Text size="md" mb="md" c="dimmed" style={{ fontStyle: 'italic' }}>
                “{t.testimonial}”
              </Text>
              <Text fw={700}>{t.name}</Text>
              <Text size="sm" c="dimmed">{t.role}</Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container> */}

      {/* 6. FAQ SECTION */}
      <Container size={1100} mt={100} mb={80}>
        <Box>
          <Title className={classes.title} order={2} ta="center" size={40} fw={800}>
            Frequently Asked Questions
          </Title>
          <Text c="dimmed" ta="center" size="lg" maw={800} mx="auto" mt="md" mb='xl'>
            Answers to common questions about our resources, community, and learning paths.
          </Text>
        </Box>
        <Grid id="faq-grid" gutter={50} align="center" justify="center">
          <GridCol span={{ base: 12, md: 8 }}>
            <Accordion variant="separated" multiple>
              {FAQ_LIST.map((faq: FAQItem, idx: number) => (
                <AccordionItem value={faq.question} key={idx}>
                  <AccordionControl>{faq.question}</AccordionControl>
                  <AccordionPanel>{faq.answer}</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </GridCol>
        </Grid>
      </Container>

      {/* 7. SUBSCRIBE SECTION */}
      <Container size={900} mt="100px" mb="80px"> {/* Added mb for spacing */}
        <Grid id="subscribe-grid" gutter={50}>
          <GridCol span={{ base: 12, md: 5 }}>
            <Image src='/subscribe.svg' alt="Subscribe to Our Newsletter" />
          </GridCol>
          <GridCol span={{ base: 12, md: 7 }}>
            <Group justify="center">
              <Box>
                <Title className={classes.title} order={3} ta="center" size={40} fw={800} lh='1'>
                  {/* <<< CHANGED */}
                  Practical Data Engineering, Straight to Your Inbox
                </Title>
                <Text c="dimmed" ta="center" size="md" maw={600} mx="auto" mt="md" mb='md' style={{textWrap: 'balance'}}>
                  {/* <<< Kept original sub-headline, it's strong */}
                  Subscribe for weekly hands-on projects, tool mastery guides, and real-world
                  solutions from practicing professionals. No fluff, just practical knowledge you
                  can apply immediately.
                </Text>
              </Box>
              <Button
                size="lg"
                radius="md"
                variant="filled"
                color="indigo"
                mt="20px"
                fullWidth
                title="Join our Newsletter"
                component="a"
                href="https://aayushxyz.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our Free Newsletter
              </Button>
            </Group>
          </GridCol>
        </Grid>
      </Container>

      <Container size={1100} mt={200} mb={80}>
        <Box>
          <Title className={classes.title} order={2} ta="center" size={40} fw={800}>
            Proudly Open Source
          </Title>
          <Text c="dimmed" ta="center" size="lg" mx="auto" mt="md">
            The Data Engineering resources are open source and powered by open source software.<br/>
            The code is available on <a href="https://github.com/aayushxyz/thedataengineering/" style={{'textDecoration':'underline'}}>GitHub</a>.
          </Text>
        </Box>
        </Container>
    </Box>
  );
}