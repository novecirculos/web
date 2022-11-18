/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  type: 'website',
  titleTemplate: '%s | Nove Círculos',
  defaultTitle: 'Nove-Circulos',
  description: 'Nove Círculos é um universo de fantasia',
  canonical: 'https://next-plate.vercel.app',
  site_name: 'Nove-Circulos',
  openGraph: {
    url: 'https://next-plate.vercel.app',
    title: 'Nove-Circulos',
    description: 'Nove Círculos é um universo de fantasia',
    images: [
      {
        url: 'https://next-plate.vercel.app/static/images/banner.jpg',
        width: 512,
        height: 256,
        alt: 'Next-Plate Banner Image',
      },
    ],
    site_name: 'Nove-Circulos',
  },
}

export default defaultSEOConfig
