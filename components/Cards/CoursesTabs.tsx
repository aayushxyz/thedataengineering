'use client';
import { useState } from 'react';
import { Tabs } from '@mantine/core';
import { Courses } from './Courses';
import classes from './Courses.module.css';

import type { Course } from './Courses';

interface CategoryMeta {
  category: string;
  title: string;
  description: string;
}

interface CoursesTabsProps {
  categoryMeta: CategoryMeta[];
  courses: Course[];
  categories: string[];
}

export function CoursesTabs({ categoryMeta, courses, categories }: CoursesTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(categories[0]);
  const filteredCourses = courses.filter((course) => course.category === activeTab);
  const activeMeta = categoryMeta.find((meta) => meta.category === activeTab);

  return (
    <Tabs
      value={activeTab}
      onChange={(value) => {
        if (value) setActiveTab(value);
      }}
      variant="pills"
      radius="md"
      keepMounted={false}
    >
      <Tabs.List className={classes.tabsList}>
        {categories.map((cat) => (
          <Tabs.Tab
            value={cat}
            key={cat}
            className={classes.tabPill}
            data-active={activeTab === cat}
          >
            {cat}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      <Tabs.Panel value={activeTab}>
        <Courses
          headerTitle={activeMeta?.title || ''}
          headerDescription={activeMeta?.description || ''}
          courses={filteredCourses}
        />
      </Tabs.Panel>
    </Tabs>
  );
}
