import { title } from "process";

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
  'about': {
    title: 'About Me',
    display: 'hidden'
  },
  // --- Top Level Navigation / Special Pages  ---
  // These are header links rather than sidebar items
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
  // 'ResourcesMenu': {
  //   title: 'Resources',
  //   type: 'menu',
  //   items: {
  //     learningPaths: { // Using camelCase for consistency, or use 'learning-paths'
  //       title: 'Learning Paths',
  //       href: '/learning-paths'
  //     },
  //     interviewPrep: { // Or use 'interview-preparation'
  //       title: 'Interview Preparation',
  //       href: '/interview-preparation'
  //     },
  //   }
  // },
  'AboutLink': {
    title: 'About',
    href: '/about'
  },


  // --- Domain Specific Sidebar Configurations ---

  'foundational-knowledge': {
    title: 'Foundational Knowledge',
    items: {
      'core_concepts_separator': { type: 'separator', title: 'Core Concepts' },
      'core-data-concepts': 'Core Data Concepts',
      'programming_essentials_separator': { type: 'separator', title: 'Programming Essentials' },
      'programming_essentials': { title: 'Programming Essentials' },
      'systems_infra_separator': { type: 'separator', title: 'Systems & Infrastructure' },
      'operating-systems-linux': 'Operating Systems (Linux)',
      'networking-basics': 'Networking Basics',
      'cloud-computing-basics': 'Cloud Computing Basics',
      'containers-docker-basics': 'Containers (Docker)',
      'virtualization-basics': 'Virtualization Basics'
    }
  },

  'data-ingestion': {
    title: 'Data Ingestion',
    items: {
      'data-sources-formats': 'Data Sources & Formats',
      'ingestion-patterns-methods': 'Ingestion Patterns & Methods',
      'ingestion-tooling-considerations': 'Ingestion Tooling & Considerations'
    }
  },

  'data-modeling-storage': {
    title: 'Data Modeling & Storage',
    items: {
      'modeling_separator': { type: 'separator', title: 'Modeling Techniques' },
      'relational-modeling': 'Relational Modeling',
      'dimensional-modeling': 'Dimensional Modeling',
      'data-vault-modeling': 'Data Vault Modeling',
      'nosql-denormalization-modeling': 'NoSQL & Denormalization',
      'storage_separator': { type: 'separator', title: 'Storage Solutions' },
      'data-warehouses': 'Data Warehouses',
      'data-lakes': 'Data Lakes',
      'data-lakehouses': 'Data Lakehouses',
      'databases-in-de': 'Databases in DE',
      'physical_design_separator': { type: 'separator', title: 'Physical Design' },
      'storage-formats-structures': 'Storage Formats & Structures'
    }
  },

  'data-transformation': {
    title: 'Data Transformation',
    items: {
       'concepts_separator': { type: 'separator', title: 'Concepts' },
      'transformation-concepts-techniques': 'Concepts & Techniques',
      'batch_separator': { type: 'separator', title: 'Batch Processing' },
      'sql-based-transformations': 'SQL-based Transformations',
      'apache-spark-batch': 'Apache Spark (Batch)',
      'dbt-for-transformations': 'dbt',
      'stream_separator': { type: 'separator', title: 'Stream Processing' },
      'stream-processing-concepts': 'Stream Processing Concepts',
      'apache-flink': 'Apache Flink',
      'spark-streaming': 'Spark Streaming',
      'kafka-streams-ksqldb': 'Kafka Streams & ksqlDB',
       'libraries_separator': { type: 'separator', title: 'Libraries' },
      'python-libraries-transformation': 'Python Libraries (Pandas, Dask, Polars)'
    }
  },

  'data-orchestration': {
    title: 'Data Orchestration',
    items: {
       'principles_separator': { type: 'separator', title: 'Principles' },
      'workflow-management-principles': 'Workflow Management Principles',
      'tools_separator': { type: 'separator', title: 'Orchestration Tools' },
      'apache-airflow': 'Apache Airflow',
      'prefect': 'Prefect',
      'dagster': 'Dagster',
      'cloud-native-orchestrators': 'Cloud-Native Orchestrators',
       'advanced_separator': { type: 'separator', title: 'Advanced Topics' },
      'advanced-scheduling-dependencies': 'Advanced Scheduling & Dependencies'
    }
  },

  'data-quality-governance': {
    title: 'Data Quality & Governance',
    items: {
      'quality_separator': { type: 'separator', title: 'Data Quality' },
      'data-quality-dimensions-metrics': 'DQ Dimensions & Metrics',
      'implementing-dq-checks': 'Implementing DQ Checks',
      'data-quality-tools': 'Data Quality Tools',
      'governance_separator': { type: 'separator', title: 'Data Governance' },
      'data-governance-frameworks': 'Governance Frameworks',
      'data-catalog-metadata-lineage': 'Cataloging, Metadata, Lineage',
      'master-data-management-mdm': 'Master Data Management (MDM)',
      'retention-archiving-compliance': 'Retention, Archiving, Compliance',
      'security_separator': { type: 'separator', title: 'Security & Privacy' },
      'data-security-privacy': 'Data Security & Privacy'
    }
  },

  'data-operations': {
    title: 'Data Operations',
    items: {
      'dataops-principles-practices': 'DataOps Principles & Practices',
      'monitoring-logging-alerting': 'Monitoring, Logging & Alerting',
      'ci-cd-for-data-pipelines': 'CI/CD for Data Pipelines',
      'incident-mgmt-performance-tuning': 'Incident Mgmt & Performance Tuning'
    }
  },

  'data-visualization-reporting': {
    title: 'Data Visualization & Reporting',
    items: {
      'principles_separator': { type: 'separator', title: 'Principles' },
      'principles-of-data-visualization': 'Principles of Data Visualization',
      'bi_separator': { type: 'separator', title: 'Reporting & BI Platforms' },
      'bi-platforms-overview': 'BI Platforms Overview',
      'semantic-layers': 'Semantic Layers',
      'serving_separator': { type: 'separator', title: 'Implementation' },
      'serving-data-for-analytics': 'Serving Data for Analytics'
    }
  },

  'learning-paths': {
    title: 'Learning Paths',
    items: {
    }
  },

  'interview-preparation': {
    title: 'Interview Preparation',
    items: {
    }
  }
};