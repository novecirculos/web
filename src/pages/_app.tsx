import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

// --- Configs ---
import SEO from '@root/next-seo.config'

import { globalStyles } from '../styles/global'

globalStyles()

export default function _app({
  Component,
  pageProps,
  router: { route },
}: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <main>
        <Component {...pageProps} key={route} />
      </main>
    </>
  )
}
