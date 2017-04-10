module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'BisuReactInput',
      externals: {
        react: 'React'
      }
    }
  }
}
