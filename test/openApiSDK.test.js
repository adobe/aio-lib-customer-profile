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

const { OpenApi } = require('../src/openApiSDK')
const specMock = {
  paths: {
    '/config/computedAttributes': {
      get: {
        tags: [''],
        parameters: ['']
      },
      post: {
        tags: [''],
        parameters: ['']
      }
    }
  },
  tags: ['']
}

test('__defaultMethods not throws with data', () => {
  expect(() => {
    const sdk = new OpenApi()
    sdk.__defaultMethods(specMock, null, {}, {})
  }).not.toThrow()
})

test('__defaultMethods not throws with existing method', () => {
  expect(() => {
    const sdk = new OpenApi()
    sdk.getConfigComputedAttributes = () => {}
    sdk.__defaultMethods(specMock, null, {}, {})
  }).not.toThrow()
})

test('__defaultMethods not throws without data', () => {
  expect(() => {
    const sdk = new OpenApi()
    sdk.__defaultMethods({}, null, {}, {})
  }).toThrow()
})

test('__defaultMethod not throws without data', () => {
  expect(() => {
    const sdk = new OpenApi()
    const sdkMock = {
      apis: {
        1: {
          1: () => new Promise(() => {})
        }
      }
    }

    sdk.__defaultMethod({ method: 'post', tag: 1, operationId: 1 }, sdkMock, {}, {})
  }).not.toThrow()
})

test('__getApiConfig to return an Array', () => {
  expect(OpenApi.__getApiConfig(specMock)).toBeInstanceOf(Array)
})

test('__getApiConfig without data to return an Array', () => {
  expect(OpenApi.__getApiConfig()).toBeInstanceOf(Array)
})
