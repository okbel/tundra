export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/components/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-button" */ 'src/components/Button/Button.mdx'),
  'src/components/Text/Text.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-text-text" */ 'src/components/Text/Text.mdx'),
}
