<!--
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
-->

[![Version](https://img.shields.io/npm/v/@adobe/aio-lib-customer-profile.svg)](https://npmjs.org/package/@adobe/aio-lib-customer-profile)
[![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-lib-customer-profile.svg)](https://npmjs.org/package/@adobe/aio-lib-customer-profile)
[![Build Status](https://travis-ci.com/adobe/aio-lib-customer-profile.svg?branch=master)](https://travis-ci.com/adobe/aio-lib-customer-profile)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![Greenkeeper badge](https://badges.greenkeeper.io/adobe/aio-lib-customer-profile.svg)](https://greenkeeper.io/)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-lib-customer-profile/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-lib-customer-profile/)

# Adobe I/O Customer Profile Lib

### Installing

```bash
$ npm install @adobe/aio-lib-customer-profile
```

### Usage
1) Initialize the SDK

```javascript
const sdk = require('@adobe/aio-lib-customer-profile')

async function sdkTest() {
  //initialize sdk
  const client = await sdk.init('<tenant>', '<iMSOrgId>', 'x-api-key', '<valid auth token>', '[sandbox]')
}
```

2) Call methods using the initialized SDK

```javascript
const sdk = require('@adobe/aio-lib-customer-profile')

async function sdkTest() {
  // initialize sdk
  const client = await sdk.init('<tenant>', '<iMSOrgId>', 'x-api-key', '<valid auth token>', '[sandbox]')

  // call methods
  try {
    // get profiles by custom filters
    const result = await client.getSegmentRoute({
        segmentId: 'abc123'
    })
    console.log(result)

  } catch (e) {
    console.error(e)
  }
}
```

## Classes

<dl>
<dt><a href="#CustomerProfileAPI">CustomerProfileAPI</a></dt>
<dd><p>This class provides methods to call your CustomerProfileAPI APIs.
Before calling any method initialize the instance by calling the <code>init</code> method on it
with valid values for tenantId, apiKey and accessToken</p>
</dd>
<dt><a href="#OpenApi">OpenApi</a></dt>
<dd><p>Create dynamic methods from openApi spec file</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#init">init(tenantId, iMSOrgId, apiKey, accessToken, [sandbox])</a> ⇒ <code><a href="#CustomerProfileAPI">Promise.&lt;CustomerProfileAPI&gt;</a></code></dt>
<dd><p>Returns a Promise that resolves with a new CustomerProfileAPI object.</p>
</dd>
</dl>

<a name="CustomerProfileAPI"></a>

## CustomerProfileAPI
This class provides methods to call your CustomerProfileAPI APIs.
Before calling any method initialize the instance by calling the `init` method on it
with valid values for tenantId, apiKey and accessToken

**Kind**: global class  

* [CustomerProfileAPI](#CustomerProfileAPI)
    * [.tenantId](#CustomerProfileAPI+tenantId) : <code>string</code>
    * [.iMSOrgId](#CustomerProfileAPI+iMSOrgId) : <code>string</code>
    * [.apiKey](#CustomerProfileAPI+apiKey) : <code>string</code>
    * [.accessToken](#CustomerProfileAPI+accessToken) : <code>string</code>
    * [.sandbox](#CustomerProfileAPI+sandbox) : <code>string</code>
    * [.init(tenantId, iMSOrgId, apiKey, accessToken, [sandbox])](#CustomerProfileAPI+init) ⇒ [<code>Promise.&lt;CustomerProfileAPI&gt;</code>](#CustomerProfileAPI)
    * [.getProfile([parameters])](#CustomerProfileAPI+getProfile) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getExperienceEvents([parameters])](#CustomerProfileAPI+getExperienceEvents) ⇒ <code>Promise.&lt;Response&gt;</code>

<a name="CustomerProfileAPI+tenantId"></a>

### customerProfileAPI.tenantId : <code>string</code>
The tenant id

**Kind**: instance property of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
<a name="CustomerProfileAPI+iMSOrgId"></a>

### customerProfileAPI.iMSOrgId : <code>string</code>
The iMSOrgId

**Kind**: instance property of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
<a name="CustomerProfileAPI+apiKey"></a>

### customerProfileAPI.apiKey : <code>string</code>
The api key from your integration

**Kind**: instance property of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
<a name="CustomerProfileAPI+accessToken"></a>

### customerProfileAPI.accessToken : <code>string</code>
The access token from your integration

**Kind**: instance property of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
<a name="CustomerProfileAPI+sandbox"></a>

### customerProfileAPI.sandbox : <code>string</code>
The sandbox name

**Kind**: instance property of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
<a name="CustomerProfileAPI+init"></a>

### customerProfileAPI.init(tenantId, iMSOrgId, apiKey, accessToken, [sandbox]) ⇒ [<code>Promise.&lt;CustomerProfileAPI&gt;</code>](#CustomerProfileAPI)
Initializes a CustomerProfileAPI object and returns it.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: [<code>Promise.&lt;CustomerProfileAPI&gt;</code>](#CustomerProfileAPI) - a CustomerProfileAPI object  

| Param | Type | Description |
| --- | --- | --- |
| tenantId | <code>string</code> | the tenant id |
| iMSOrgId | <code>string</code> | the iMSOrgId for your integration |
| apiKey | <code>string</code> | the API key for your integration |
| accessToken | <code>string</code> | the access token for your integration |
| [sandbox] | <code>string</code> | sandbox name |

<a name="CustomerProfileAPI+getProfile"></a>

### customerProfileAPI.getProfile([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Get Profile by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |

<a name="CustomerProfileAPI+getExperienceEvents"></a>

### customerProfileAPI.getExperienceEvents([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Get ExperienceEvents.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |

<a name="OpenApi"></a>

## OpenApi
Create dynamic methods from openApi spec file

**Kind**: global class  
<a name="init"></a>

## init(tenantId, iMSOrgId, apiKey, accessToken, [sandbox]) ⇒ [<code>Promise.&lt;CustomerProfileAPI&gt;</code>](#CustomerProfileAPI)
Returns a Promise that resolves with a new CustomerProfileAPI object.

**Kind**: global function  
**Returns**: [<code>Promise.&lt;CustomerProfileAPI&gt;</code>](#CustomerProfileAPI) - a Promise with a CustomerProfileAPI object  

| Param | Type | Description |
| --- | --- | --- |
| tenantId | <code>string</code> | the tenant id |
| iMSOrgId | <code>string</code> | the iMSOrgId for your integration |
| apiKey | <code>string</code> | the API key for your integration |
| accessToken | <code>string</code> | the access token for your integration |
| [sandbox] | <code>string</code> | sandbox name |

### Debug Logs

```bash
LOG_LEVEL=debug <your_call_here>
```

Prepend the `LOG_LEVEL` environment variable and `debug` value to the call that invokes your function, on the command line. This should output a lot of debug data for your SDK calls.

### Contributing

Contributions are welcome! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

### Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
