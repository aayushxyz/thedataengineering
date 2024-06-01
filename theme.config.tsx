import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { BackToTop } from './components/BackToTop'


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
        <BackToTop />
        <h4> Liked our content? Please share your feeback.</h4>
      </>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  footer: {
    text: 'The Data Engineering',
  },
}

export default config
