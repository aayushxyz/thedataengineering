import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { Provider } from 'react-wrap-balancer'
import './styles.css'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return <Provider><Component {...pageProps} /></Provider>
}