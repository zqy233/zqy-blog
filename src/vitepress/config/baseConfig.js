const deps = ['@vue/theme', '@vueuse/core', 'body-scroll-lock']

module.exports = async () => ({
  vite: {
    ssr: {
      noExternal: deps
    },
    optimizeDeps: {
      exclude: deps
    }
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/vite-vue-blog/logo.svg'
      }
    ],
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            'link',
            {
              rel: 'preload',
              href: '/assets/inter-latin.7b37fe23.woff2',
              as: 'font',
              type: 'font/woff2',
              crossorigin: 'anonymous'
            }
          ]
        ]
      : []),
    [
      'script',
      {},
      require('fs').readFileSync(
        require('path').resolve(
          __dirname,
          './inlined-scripts/applyDarkMode.js'
        ),
        'utf-8'
      )
    ]
  ],
  markdown: {
    highlight: await require('./highlight')()
  },
  shouldPreload: (link) => {
    return !link.includes('Algolia')
  }
})
