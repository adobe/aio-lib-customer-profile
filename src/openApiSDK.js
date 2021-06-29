/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
const { reduceError } = require('./helpers')
const { codes } = require('./SDKErrors')
const { camelCase, constantCase } = require('change-case')

const defaultForbiddenNames = ['get', 'post', 'put', 'delete', 'cancel', 'patch', 'getMany', 'getById']
const isNameValid = (name, forbiddenNames) => name && !forbiddenNames.includes(name)
const defaultParams = ['authorization', 'x-api-key', 'x-gw-ims-org-id', 'x-sandbox-name']

/**
 * Create dynamic methods from openApi spec file
 *
 */

class OpenApi {
  static __getParams (apiJson, current) {
    return current.map(param => {
      if (param.$ref) {
        const paramPaths = param.$ref.split('/').slice(1)

        if (defaultParams.includes(paramPaths[2])) {
          return null
        }

        return apiJson[paramPaths[0]][paramPaths[1]][paramPaths[2]]
      } else {
        return param
      }
    }).filter(param => param)
  }

  static __getApiConfig (apiJson, forbiddenNames = defaultForbiddenNames) {
    if (!apiJson) {
      return []
    }

    return Object.keys(apiJson.paths).map(pathKey => {
      const pathObj = apiJson.paths[pathKey]

      return Object.keys(pathObj).map(method => {
        const methodObj = pathObj[method]
        const defaultName = `${method}_${pathKey.split('/').slice(1).join('_')}`

        return {
          method,
          tag: methodObj.tags[0],
          name: isNameValid(methodObj.operationId, forbiddenNames) ? methodObj.operationId : camelCase(defaultName),
          operationId: methodObj.operationId || defaultName,
          summary: methodObj.summary,
          parameters: OpenApi.__getParams(apiJson, methodObj.parameters),
          errorCode: `ERROR_${constantCase(methodObj.tags[0])}`
        }
      })
    }).reduce((acc, val) => acc.concat(val), [])
  }

  __defaultMethods (spec, sdk, requestOptions, requiredParams) {
    const apiConfig = OpenApi.__getApiConfig(spec)

    apiConfig.forEach(config => {
      const name = this[config.name] ? '__' + config.name : config.name

      this[name] = (parameters = {}, configUpdates = {}) => {
        config.params = { ...config.params, ...configUpdates }
        return this.__defaultMethod(config, sdk, requestOptions, requiredParams, parameters)
      }
    })
  }

  __defaultMethod (config, sdk, requestOptions, requiredParams, parameters = {}) {
    const sdkDetails = { parameters }

    const apiParams = {
      ...config.params,
      ...requiredParams,
      ...parameters
    }

    if (config.method === 'get') {
      requestOptions.requestBody = null
    }

    if (config.method === 'post' && !apiParams['Content-Type']) {
      apiParams['Content-Type'] = 'application/json'
    }

    return new Promise((resolve, reject) => {
      sdk.apis[config.tag][config.operationId](apiParams, requestOptions)
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(new codes[config.errorCode]({ sdkDetails, messageValues: reduceError(err) }))
        })
    })
  }
}

module.exports = {
  OpenApi
}
