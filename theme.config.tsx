import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { ThemeSwitch } from 'nextra-theme-docs'
import { Navbar } from 'nextra-theme-docs'
import { Cards } from 'nextra/components'

function LiteThemeSwitch(props) {
  return <ThemeSwitch {...props} lite={true} className={"max-md:_hidden"}/>;
}

function NavbarWithIgnoreOption({items}){
  const navbarMenuItems = {
    lifecyclestages: {
        name: "lifecyclestages",
        title: "Lifecycle",
        type: "menu",
        items: {
            fundamentals: {title: "Fundamentals",href: "/fundamentals"},
            generation: {title: "Generation",href: "/generation"},
            storage: {title: "Storage",href: "/storage"},
            ingestion: {title: "Ingestion",href: "/ingestion"},
            transformation: {title: "Transformation",href: "/transformation"},
            serving: {title: "Serving",href: "/serving"
            }
        }
    },
    keypriciples: {
        name: "keypriciples",
        title: "Principles",
        type: "menu",
        items: {
            security: {title: "Security",href: "/security"},
            management: {title: "Management",href: "/management"},
            dataops: {title: "DataOps",href: "/dataops"},
            architecture: {title: "Architecture",href: "/architecture"},
            orchestration: {title: "Orchestration",href: "/orchestration"},
            programmming: {title: "Programming",href: "/programming"}
        }
    },
    resources: {
        name: "resources",
        title: "Resources",
        type: "menu",
        items: {
            projects: {title: "Projects",href: "/projects"},
            resources: {title: "External Resources",href: "/resources"}
        }
    }
  }
  for (let key in items) {if (items[key].display === "navbarHidden") {items[key].display = "hidden"}}
  if (items[0].name !== 'lifecyclestages') {
    items.unshift(navbarMenuItems['resources'])
    items.unshift(navbarMenuItems['keypriciples'])
    items.unshift(navbarMenuItems['lifecyclestages'])
  }
  return <Navbar items={items} />
}

const config: DocsThemeConfig = {
  logo: (
    <>
      <img alt="TDE" height="32px" width="32px" src="logo.png" />
      <span style={{ marginLeft: '.4em', fontWeight: 700, fontSize: '1.15em' }}>
        The Data Engineering
      </span>
    </>
  ),
  head: (
    <>
    <html lang='en'></html>
    <title>The Data Engineering</title>
    <meta property="og:title" content="The Data Engineering"/>
    <meta name="description" content="Best way to learn data engineering." />
    <link rel="shortcut icon" type="image/x-icon" href="logo.png"></link>
    </>
  ),
  nextThemes: {
    defaultTheme: 'system'
  },
  docsRepositoryBase: "https://github.com/aayushxyz/thedataengineering",
  project: {
    link: "https://github.com/aayushxyz/thedataengineering"
  },
  search: {
    placeholder: "Search..."
  },
  chat: {
    link: "https://discord.gg/fNhyHvUn",
  },
  gitTimestamp: null,
  toc: {
    extraContent: (
        <Cards.Card arrow title="Subscribe to Newsletter" href="https://tally.so/embed/w5lOWM">
          <img src="newsletter.svg" alt="Down-Arrow" width="90%" height="100" style={{display: "flex",justifyContent: "center"}}/>
        </Cards.Card>
      )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  footer: {
    content: '©️ The Data Engineering 2025',
  },
  navbar: {
    component: NavbarWithIgnoreOption,
    extraContent: LiteThemeSwitch
  }
}
export default config;