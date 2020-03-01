const fs = require('fs')
const path = require('path')
const spec = require('../spec/api')
const { OpenApi } = require('../src/openApiSDK')

const docsTarget = path.join(__dirname, '../src/methods4docs.js')

/**
 * Generate dynamic methods into `docsTarget` file, to be consumed by jsDocs `generate-docs` task
 * Generated file is just for documentation purposes
 *
 */
const generateMethods = () => {
  const apiConfig = OpenApi.__getApiConfig(spec)
  console.log('Total methods: ', apiConfig.length)
  return apiConfig.map(config => {
    const params = config.parameters.map(param => {
      const paramWrapper = param.name.includes('.') ? '\'' : ''
      const jsdocParam = `parameters.${paramWrapper}${param.name}${paramWrapper}`
      const paramName = param.required ? jsdocParam : `[${jsdocParam}]`
      const type = param.schema.type.replace('integer', 'number')
      return `   * @param {${type}} ${paramName} - ${param.description}`
    }).join('\n')

    return `
  /**
   * ${config.summary}
   *
   * @param {object} [parameters={}] - parameters to pass
${params}
   * @returns {Promise<Response>} the response
   */
  ${config.name} (parameters = {}) {
    return new Promise((resolve, reject) => {})
  }
  `
  })
}

const methodsStrings = `class CustomerProfileAPI {
  ${generateMethods().join('')}
}
`

fs.writeFile(docsTarget, methodsStrings, 'utf8', function (err) {
  if (err) {
    console.log('An error occurred while writing data to File.')
    return console.log(err)
  }

  console.log('File has been saved.')
})
