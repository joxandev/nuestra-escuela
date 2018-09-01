module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nuestra Escuela Leeds',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuestra Escuela'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Quicksand:400,700',
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      }

    ]
  },
  router: {

    linkExactActiveClass: 'exact-active-link'
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#31bfcbff'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
