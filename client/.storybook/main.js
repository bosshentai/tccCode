module.exports = {
  stories: [
    // "./src/**/*.stories.mdx",
    '../src/**/*.stories.@(|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss'
    // "@storybook/preset-create-react-app"
  ],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  core: {
    builder: 'webpack5',
  },
  docsPage: {
    docs: 'automatic',
  },
}
