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

const sdk = require('../src/index')
const path = require('path')

// load .env values in the e2e folder, if any
require('dotenv').config({ path: path.join(__dirname, '.env') })

let sdkClient = {}
const tenantId = process.env.CUSTOMER_PROFILE_API_TENANT_ID
const iMSOrgId = process.env.CUSTOMER_PROFILE_API_IMS_ORG_ID
const apiKey = process.env.CUSTOMER_PROFILE_API_API_KEY
const accessToken = process.env.CUSTOMER_PROFILE_API_ACCESS_TOKEN

beforeAll(async () => {
  sdkClient = await sdk.init(tenantId, iMSOrgId, apiKey, accessToken)
})

test('sdk init test', async () => {
  expect(sdkClient.tenantId).toBe(tenantId)
  expect(sdkClient.iMSOrgId).toBe(iMSOrgId)
  expect(sdkClient.apiKey).toBe(apiKey)
  expect(sdkClient.accessToken).toBe(accessToken)
})

const requiredParam = {
  'schema.name': '_xdm.context.profile',
  entityId: 'spaliwal@adobe.com',
  entityIdNS: 'email'
}

test('bad access token', async () => {
  const _sdkClient = await sdk.init(tenantId, iMSOrgId, apiKey, 'bad_access_token')
  const promise = _sdkClient.getAccessEntities(requiredParam)

  // just match the error message
  return expect(promise).rejects.toThrow('401')
})

test('bad api key', async () => {
  const _sdkClient = await sdk.init(tenantId, iMSOrgId, 'bad_api_key', accessToken)
  const promise = _sdkClient.getAccessEntities(requiredParam)

  // just match the error message
  return expect(promise).rejects.toThrow('[CustomerProfileAPISDK:ERROR_ENTITIES] Error 403 - Forbidden ({"error_code":"403003","message":"Api Key is invalid"})')
})

test('getAccessEntities API', async () => {
  // check success response
  const res = await sdkClient.getAccessEntities(requiredParam)
  expect(res.ok).toBeTruthy()
})
