import nextra from 'nextra'

//nextraの設定
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
  basePath: process.env.NODE_ENV === 'development' ? "" : "/PCSS4VRC",
  assetPrefix: process.env.NODE_ENV === 'development' ? "" : "/PCSS4VRC",
})