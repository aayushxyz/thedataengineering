import './global.css';
import 'nextra-theme-docs/style.css'
import { Layout } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider} from '@mantine/core';
import { MantineFooter, MantineNavBar } from '@/components';
import { SocialLinksToc } from '@/components/SocialLinks/SocialLinksToc';

export const metadata = {
  title: {
    default: 'The Data Engineering',
    template: '%s | The Data Engineering',
  },
  description: 'The Data Engineering is your one-stop resource for everything data engineering — from building robust data pipelines and mastering ETL processes to exploring big data solutions and cloud architectures. Discover expert tutorials, industry insights, and practical tools to transform your data into actionable intelligence.',
  metadataBase: new URL('https://thedataengineering.com/'),
  keywords: [

  ],
  generator: 'Next.js',
  applicationName: 'The Data Engineering',
  appleWebApp: {
    title: 'The Data Engineering',
  },
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: './',
    siteName: 'The Data Engineering',
    locale: 'en_US',
    type: 'website',
  },
  other: {
    'msapplication-TileColor': '#fff',
  },
  twitter: {
    site: 'https://thedataengineering.com/',
  },
  alternates: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    canonical: './',
  },
};

export default async function RootLayout({ children }: { children: any }) {
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript nonce="8IBTHwOdqNKAWeKl7plt8g==" defaultColorScheme="dark" />
        <link rel="shortcut icon" href="/logo.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <body>
        {/* <MantineProvider theme={shadcnTheme} cssVariablesResolver={shadcnCssVariableResolver}> */}
        <MantineProvider >
          <Layout
            navbar={<MantineNavBar />}
            pageMap={pageMap}
            docsRepositoryBase="https://github.com/aayushxyz/thedataengineering"
            footer={<MantineFooter />}
            sidebar={{ defaultMenuCollapseLevel: 1 }}
            editLink=''
            toc={{ extraContent: <SocialLinksToc /> }}
          >
            {children}
          </Layout>
          </MantineProvider>
      </body>
    </html>
  );
}
