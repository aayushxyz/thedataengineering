export default {

  // Default settings for all pages
  '*': {
    type: 'page',
    theme: {
      timestamp: false
    }
  },
  'index': {
    title: 'Home',
    display: 'hidden'
  },
  //'about': {
   // title: 'About Me',
   // display: 'hidden'
  //},
  // --- Top Level Navigation / Special Pages  ---
  'TopicsMenu': {
    title: 'Guides',
    type: 'menu',
    items: {
      foundational_knowledge: {
        title: 'Foundational Knowledge',
        href: '/foundational-knowledge'
      },
      data_ingestion: {
        title: 'Data Ingestion',
        href: '/data-ingestion'
      },
      data_modeling_storage: {
        title: 'Data Modeling & Storage',
        href: '/data-modeling-storage'
      },
      data_transformation: {
        title: 'Data Transformation',
        href: '/data-transformation'
      },
      data_orchestration: {
        title: 'Data Orchestration',
        href: '/data-orchestration'
      },
      data_quality_governance: {
        title: 'Data Quality & Governance',
        href: '/data-quality-governance'
      },
      data_operations_dataops: {
        title: 'Data Operations',
        href: '/data-operations-dataops'
      },
      data_visualization_reporting: {
        title: 'Data Visualization & Reporting',
        href: '/data-visualization-reporting'
      }
    }
  },
  'AboutLink': {
    title: 'About',
    href: '/about'
  },


  // --- Domain Specific Sidebar Configurations ---
  'fundamentals': {
    title: 'Fundamentals',
    items: {
      'sub-heading-2-in-fundamentals': 'Sub Heading 2 In Fundamentals',
      'case-study_separator': { type: 'separator', title: 'Case Study' },
      'tet2': 'Tet2'
    }
  },

  'python': {
    title: 'Python',
    items: {
      'dsa': 'Dsa'
    }
  }
};