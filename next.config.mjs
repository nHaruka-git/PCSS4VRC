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
  basePath: "/PCSS4VRC",
  assetPrefix:"/PCSS4VRC",
})