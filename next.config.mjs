import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.jsx',
  latex: true,
  search: {
    codeblocks: false
  }
})

export default withNextra({
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: "/pcss4vrc",
  assetPrefix:"/pcss4vrc",
})