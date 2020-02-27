/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const sdk = require('../src')
const fetch = require('node-fetch')
const { createRequestOptions } = require('../src/helpers')
const { codes } = require('../src/SDKErrors')

// /////////////////////////////////////////////

const gTenantId = 'test-company'
const giMSOrgId = 'test-iMSOrgId'
const gApiKey = 'test-apikey'
const gAccessToken = 'test-token'
const gSandbox = 'test-sandbox'

// /////////////////////////////////////////////

const createSwaggerOptions = ({ body } = {}) => {
  return createRequestOptions({
    tenantId: gTenantId,
    apiKey: gApiKey,
    accessToken: gAccessToken,
    body
  })
}

const createSdkClient = async () => {
  return sdk.init(gTenantId, giMSOrgId, gApiKey, gAccessToken)
}

// /////////////////////////////////////////////

beforeEach(() => {
  fetch.resetMocks()
})

test('sdk init test', async () => {
  const sdkClient = await createSdkClient()

  expect(sdkClient.tenantId).toBe(gTenantId)
  expect(sdkClient.iMSOrgId).toBe(giMSOrgId)
  expect(sdkClient.apiKey).toBe(gApiKey)
  expect(sdkClient.accessToken).toBe(gAccessToken)
})

test('sdk init test - no tenantId', async () => {
  return expect(sdk.init(null, giMSOrgId, gApiKey, gAccessToken)).rejects.toEqual(
    new codes.ERROR_SDK_INITIALIZATION({ messageValues: 'tenantId' })
  )
})

test('sdk init test - no apiKey', async () => {
  return expect(sdk.init(gTenantId, giMSOrgId, null, gAccessToken)).rejects.toEqual(
    new codes.ERROR_SDK_INITIALIZATION({ messageValues: 'apiKey' })
  )
})

test('sdk init test - no accessToken', async () => {
  return expect(sdk.init(gTenantId, giMSOrgId, gApiKey, null)).rejects.toEqual(
    new codes.ERROR_SDK_INITIALIZATION({ messageValues: 'accessToken' })
  )
})

test('sdk init test - no iMSOrgId', async () => {
  return expect(sdk.init(gTenantId, null, gApiKey, gAccessToken)).rejects.toEqual(
    new codes.ERROR_SDK_INITIALIZATION({ messageValues: 'iMSOrgId' })
  )
})

test('sdk init test - sandbox', async () => {
  return expect(sdk.init(gTenantId, giMSOrgId, gApiKey, gAccessToken, gSandbox)).resolves.not.toThrow()
})

/** @private */
async function standardTest ({
  fullyQualifiedApiName, apiParameters, apiOptions,
  sdkFunctionName, sdkArgs,
  successReturnValue = {},
  ErrorClass
}) {
  const sdkClient = await createSdkClient()
  const [, apiFunction] = fullyQualifiedApiName.split('.')

  if (!ErrorClass) {
    throw new Error('ErrorClass not defined for standardTest')
  }

  // sdk function name is the same as the apiname (without the namespace) by default
  // so if it is not set, we set it
  // this means in the SDK the namespace is flattened, so functions have to have unique names
  if (!sdkFunctionName) {
    sdkFunctionName = apiFunction
  }
  const fn = sdkClient[sdkFunctionName]
  let mockFn

  // success case
  mockFn = sdkClient.sdk.mockResolved(fullyQualifiedApiName, successReturnValue)
  await expect(fn.apply(sdkClient, sdkArgs)).resolves.toEqual(successReturnValue)
  expect(mockFn).toHaveBeenCalledWith(apiParameters, apiOptions)

  // failure case
  const err = new Error('some API error')
  mockFn = sdkClient.sdk.mockRejected(fullyQualifiedApiName, err)
  await expect(fn.apply(sdkClient, sdkArgs)).rejects.toEqual(
    new ErrorClass({ sdkDetails: { ...sdkArgs }, messageValues: err })
  )
  expect(mockFn).toHaveBeenCalledWith(apiParameters, apiOptions)
}

test('getAccessEntities', async () => {
  const sdkArgs = []
  const apiParameters = {
    'x-gw-ims-org-id': 'test-iMSOrgId',
    'x-request-id': 1
  }
  const apiOptions = createSwaggerOptions()

  return expect(() => standardTest({
    fullyQualifiedApiName: 'Entities.get_access_entities',
    apiParameters,
    apiOptions,
    sdkFunctionName: 'getAccessEntities',
    sdkArgs,
    ErrorClass: codes.ERROR_ENTITIES
  })).not.toThrow()
})

test('postAccessEntities', async () => {
  const sdkArgs = []
  const apiParameters = {
    'x-gw-ims-org-id': 'test-iMSOrgId',
    'x-request-id': 1,
    'Content-Type': 'application/json'
  }
  const apiOptions = createSwaggerOptions()

  return expect(() => standardTest({
    fullyQualifiedApiName: 'Entities.post_access_entities',
    apiParameters,
    apiOptions,
    sdkFunctionName: 'postAccessEntities',
    sdkArgs,
    ErrorClass: codes.ERROR_ENTITIES
  })).not.toThrow()
})

test('getAccessEntities sandbox', async () => {
  const sdkArgs = []
  const apiParameters = {
    'x-gw-ims-org-id': 'test-iMSOrgId',
    'x-request-id': 1
  }
  const apiOptions = createSwaggerOptions()

  return expect(() => standardTest({
    fullyQualifiedApiName: 'Entities.get_access_entities',
    apiParameters,
    apiOptions,
    sdkFunctionName: 'getAccessEntities',
    sdkArgs,
    ErrorClass: codes.ERROR_ENTITIES
  })).not.toThrow()
})

test('getProfile', async () => {
  const sdkArgs = []
  const apiParameters = {
    'schema.name': '_xdm.context.profile',
    'x-gw-ims-org-id': 'test-iMSOrgId',
    'x-request-id': 1
  }

  const apiOptions = createSwaggerOptions()

  return expect(() => standardTest({
    fullyQualifiedApiName: 'Entities.get_access_entities',
    apiParameters,
    apiOptions,
    sdkFunctionName: 'getProfile',
    sdkArgs,
    ErrorClass: codes.ERROR_ENTITIES
  })).not.toThrow()
})

test('getExperienceEvents', async () => {
  const sdkArgs = []
  const apiParameters = {
    'relatedSchema.name': '_xdm.context.profile',
    'schema.name': 'xdm.context.experienceevent',
    'x-gw-ims-org-id': 'test-iMSOrgId',
    'x-request-id': 1
  }
  const apiOptions = createSwaggerOptions()

  return expect(() => standardTest({
    fullyQualifiedApiName: 'Entities.get_access_entities',
    apiParameters,
    apiOptions,
    sdkFunctionName: 'getExperienceEvents',
    sdkArgs,
    ErrorClass: codes.ERROR_ENTITIES
  })).not.toThrow()
})
