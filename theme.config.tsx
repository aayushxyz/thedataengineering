import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  logo: (
    <>
      <img height="32px" width="32px" src="/logo.png" />
      <span style={{ marginLeft: '.4em', fontWeight: 700, fontSize: '1.15em' }}>
        The Data Engineering
      </span>
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – The Data Engineering'
    }
  },
  editLink: {
    component: null
  },
  nextThemes: {
    defaultTheme: 'light'
  },
  feedback: {
    content: null
  },
  gitTimestamp: null,
  toc: {
    extraContent: (
      <>
        <h4> Liked our content? Please share your feeback. <a href="https://twitter.com/AayushXYZ">@AayushXYZ</a></h4>
      </>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  footer: {
    text: '©️ The Data Engineering 2024',
  },
  banner: {
    dismissible: true,
    text: "This site is currently in Beta."
  }
}

export default config
