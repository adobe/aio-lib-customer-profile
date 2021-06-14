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

const Swagger = require('swagger-client')
const loggerNamespace = '@adobe/aio-lib-customer-profile'
const { v4: uuidv4 } = require('uuid')
const logger = require('@adobe/aio-lib-core-logging')(loggerNamespace, { level: process.env.LOG_LEVEL })
const { requestInterceptor, responseInterceptor, createRequestOptions } = require('./helpers')
const { codes } = require('./SDKErrors')
const { OpenApi } = require('./openApiSDK')

/* global Response */ // for linter

/**
 * Returns a Promise that resolves with a new CustomerProfileAPI object.
 *
 * @param {string} tenantId the tenant id
 * @param {string} iMSOrgId the iMSOrgId for your integration
 * @param {string} apiKey the API key for your integration
 * @param {string} accessToken the access token for your integration
 * @param {string} [sandbox] sandbox name
 * @returns {Promise<CustomerProfileAPI>} a Promise with a CustomerProfileAPI object
 */
function init (tenantId, iMSOrgId, apiKey, accessToken, sandbox) {
  const spec = require('../spec/api.json')

  return new Promise((resolve, reject) => {
    const clientWrapper = new CustomerProfileAPI(spec)

    clientWrapper.init(tenantId, iMSOrgId, apiKey, accessToken, sandbox)
      .then(initializedSDK => {
        logger.debug('sdk initialized successfully')
        resolve(initializedSDK)
      })
      .catch(err => {
        logger.debug(`sdk init error: ${err}`)
        reject(err)
      })
  })
}

/**
 * This class provides methods to call your CustomerProfileAPI APIs.
 * Before calling any method initialize the instance by calling the `init` method on it
 * with valid values for tenantId, apiKey and accessToken
 */
class CustomerProfileAPI extends OpenApi {
  constructor (spec) {
    super()

    this.spec = spec
  }

  /**
   * Initializes a CustomerProfileAPI object and returns it.
   *
   * @param {string} tenantId the tenant id
   * @param {string} iMSOrgId the iMSOrgId for your integration
   * @param {string} apiKey the API key for your integration
   * @param {string} accessToken the access token for your integration
   * @param {string} [sandbox] sandbox name
   * @returns {Promise<CustomerProfileAPI>} a CustomerProfileAPI object
   */
  async init (tenantId, iMSOrgId, apiKey, accessToken, sandbox) {
    // init swagger client
    const swagger = new Swagger({
      spec: this.spec,
      requestInterceptor,
      responseInterceptor,
      usePromise: true
    })
    this.sdk = (await swagger)

    const initErrors = []
    if (!tenantId) {
      initErrors.push('tenantId')
    }
    if (!iMSOrgId) {
      initErrors.push('iMSOrgId')
    }
    if (!apiKey) {
      initErrors.push('apiKey')
    }
    if (!accessToken) {
      initErrors.push('accessToken')
    }

    if (initErrors.length) {
      const sdkDetails = { tenantId, iMSOrgId, apiKey, accessToken }
      throw new codes.ERROR_SDK_INITIALIZATION({ sdkDetails, messageValues: `${initErrors.join(', ')}` })
    }

    /**
     * The tenant id
     *
     * @type {string}
     */
    this.tenantId = tenantId

    /**
     * The iMSOrgId
     *
     * @type {string}
     */
    this.iMSOrgId = iMSOrgId

    /**
     * The api key from your integration
     *
     * @type {string}
     */
    this.apiKey = apiKey

    /**
     * The access token from your integration
     *
     * @type {string}
     */
    this.accessToken = accessToken

    /**
     * The sandbox name
     *
     * @type {string}
     */
    this.sandbox = sandbox

    /**
     * Create default methods from spec
     *
     */
    this.__defaultMethods(this.spec, this.sdk, this.__createRequestOptions({ body: null }), this.__createRequiredParams())

    return this
  }

  __createRequestOptions ({ body } = {}) {
    return createRequestOptions({
      tenantId: this.tenantId,
      apiKey: this.apiKey,
      accessToken: this.accessToken,
      body
    })
  }

  __createRequiredParams () {
    return {
      'x-gw-ims-org-id': this.iMSOrgId,
      'x-request-id': uuidv4(),
      ...this.sandbox && { 'x-sandbox-name': this.sandbox }
    }
  }

  /**
   * Get Profile by ID.
   *
   * @param {object} [parameters={}] parameters to pass
   * @returns {Promise<Response>} the response
   */
  getProfile (parameters = {}) {
    return this.getAccessEntities(parameters, {
      'schema.name': '_xdm.context.profile'
    })
  }

  /**
   * Get ExperienceEvents.
   *
   * @param {object} [parameters={}] parameters to pass
   * @returns {Promise<Response>} the response
   */
  getExperienceEvents (parameters = {}) {
    return this.getAccessEntities(parameters, {
      'relatedSchema.name': '_xdm.context.profile',
      'schema.name': 'xdm.context.experienceevent'
    })
  }
}

module.exports = {
  init: init
}
