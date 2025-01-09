import { DocsThemeConfig, ThemeSwitch, Navbar } from 'nextra-theme-docs'

function SideCard(){
  return <a target="_blank" className="nextra-focus nextra-card _group _flex _flex-col _justify-start _overflow-hidden _rounded-lg _border _border-gray-200 _text-current _no-underline dark:_shadow-none hover:_shadow-gray-100 dark:hover:_shadow-none _shadow-gray-100 active:_shadow-sm active:_shadow-gray-200 _transition-all _duration-200 hover:_border-gray-300 _bg-gray-100 _shadow dark:_border-neutral-700 dark:_bg-neutral-800 dark:_text-gray-50 hover:_shadow-lg dark:hover:_border-neutral-500 dark:hover:_bg-neutral-700" 
  href="https://tally.so/embed/w5lOWM">
    <img src="newsletter.svg" alt="Down-Arrow" width="90%" height="100" style={{display: "flex", justifyContent: "center"}}/>
    <span className="_flex _font-semibold _items-center _gap-2 _p-4 _text-gray-700 hover:_text-gray-900 after:_content-[&quot;→&quot;] after:_transition-transform after:_duration-75 after:group-hover:_translate-x-0.5 dark:_text-gray-300 dark:hover:_text-gray-100">
      Subscribe to Newsletter
    </span>
  </a>
}

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
            tools: {title: "Tools", href: "/tools"},
            projects: {title: "Projects",href: "/projects"},
            resources: {title: "External Resources",href: "/resources/external"}
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
  // backgroundColor: {
  //   dark: "25,25,25",
  //   light: "245,245,245"
  // },
  // color: {
  //   hue: {
  //     dark: 200,
  //     light: 210
  //   },
  //   lightness: {
  //     dark: 60,
  //     light: 50
  //   },
  //   saturation: 95
  // },
  banner: {
    dismissible: true,
    key: "banner-key",
    content: "This website is currently in Beta."
  },
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
    link: "https://discord.gg/QXKdyNSDQD",
  },
  gitTimestamp: null,
  toc: {
    extraContent: (<SideCard/>)
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